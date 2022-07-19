import { Typography } from "@material-ui/core";
import { useUser } from "../src/context/AuthContext";
import { listCommunities } from "../src/graphql/queries";
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { Communities, ListCommunitiesQuery } from "../src/API";

export default function Home() {
    const { user } = useUser();
    const [allCommunities, setCommunities] = useState<Communities[]>([]);

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
    }, []);

    console.log(user);
    console.log(allCommunities);

    return (
        <div>
            <Typography variant="h1"> Hello World! </Typography>
        </div>
    );
}
