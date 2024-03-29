import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import { API } from "aws-amplify";
import { useUser } from "../src/context/AuthContext";
import {
    Communities,
    ListCommunitiesQuery,
    Post,
    ListPostsQuery,
    GetPostQuery,
    GetVoteQuery,
    Vote,
} from "../src/API";
import { getPost, getVote, listCommunities } from "../src/graphql/queries";
import { listPosts } from "../src/graphql/queries";
import Community from "../components/community";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme";
import AddPost from "../components/addpost";

export default function Home() {
    const { user } = useUser();
    const [allCommunities, setCommunities] = useState<Communities[]>([]);
    const [allPosts, setPosts] = useState<Post[]>([]);
    const [allPostsData, setPostsData] = useState<Post>();

    const fetchPostsFromAPI = async (): Promise<Post[]> => {
        const allPosts = (await API.graphql({
            query: listPosts,
        })) as { data: ListPostsQuery; errors: any[] };
        console.log("all data", allPosts.data);
        if (allPosts.data) {
            setPosts(allPosts.data.listPosts.items as Post[]);
            return allPosts.data.listPosts.items as Post[];
        } else {
            throw new Error("Could not get posts from API.");
        }
    };

    const fetchCommunitiesFromAPI = async (): Promise<Communities[]> => {
        const allCommunities = (await API.graphql({
            query: listCommunities,
        })) as { data: ListCommunitiesQuery; errors: any[] };
        if (allCommunities.data) {
            setCommunities(
                allCommunities.data.listCommunities.items as Communities[]
            );
            return allCommunities.data.listCommunities.items as Communities[];
        } else {
            throw new Error("Could not get communities from API.");
        }
    };

    const fetchIndividualPostsData = async (): Promise<void> => {
        allPosts.forEach(async (post): Promise<void> => {
            const postsData = (await API.graphql({
                query: getPost,
                variables: { id: post.id },
            })) as {
                data: GetPostQuery;
            };
            if (postsData.data) {
                setPostsData(postsData.data.getPost as Post);
            } else {
                throw new Error("Could not get posts from API.");
            }
        });
    };

    useEffect(() => {
        fetchCommunitiesFromAPI();
        fetchPostsFromAPI();
        fetchIndividualPostsData();
    }, []);

    console.log({ allPosts, allPostsData });

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <AddPost />
                {allPosts
                    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                    .map((post) => (
                        <Community key={post.id} posts={post} />
                    ))}
            </Container>
        </ThemeProvider>
    );
}
