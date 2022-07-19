import { useEffect, useState } from "react";
import { Container, Typography } from "@material-ui/core";
import { API } from "aws-amplify";
import { useUser } from "../src/context/AuthContext";
import {
    Communities,
    ListCommunitiesQuery,
    Post,
    ListPostsQuery,
} from "../src/API";
import { listCommunities } from "../src/graphql/queries";
import { listPosts } from "../src/graphql/queries";
import Community from "../components/community";

export default function Home() {
    const { user } = useUser();
    const [allCommunities, setCommunities] = useState<Communities[]>([]);
    const [allPosts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchCommunitiesFromAPI = async (): Promise<Communities[]> => {
            const allCommunities = (await API.graphql({
                query: listCommunities,
            })) as { data: ListCommunitiesQuery; errors: any[] };
            if (allCommunities.data) {
                setCommunities(
                    allCommunities.data.listCommunities.items as Communities[]
                );
                return allCommunities.data.listCommunities
                    .items as Communities[];
            } else {
                throw new Error("Could not get communities from API.");
            }
        };
        fetchCommunitiesFromAPI();
        const fetchPostsFromAPI = async (): Promise<Post[]> => {
            const allPosts = (await API.graphql({
                query: listPosts,
            })) as { data: ListPostsQuery; errors: any[] };
            if (allPosts.data) {
                setPosts(allPosts.data.listPosts.items as Post[]);
                return allPosts.data.listPosts.items as Post[];
            } else {
                throw new Error("Could not get posts from API.");
            }
        };
        fetchPostsFromAPI();
    }, []);

    return (
        <Container maxWidth="md">
            {allPosts.map((post) => (
                <Community key={post.id} posts={post} />
            ))}
            <Typography />
        </Container>
    );
}
