import React, { ReactElement } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { withSSRContext } from "aws-amplify";
import { listPosts, getPost } from "../../src/graphql/queries";
import { GetPostQuery, ListPostsQuery, Post } from "../../src/API";

interface Props {
    post: Post;
}

export default function IndividualPost({ post }: Props): ReactElement {
    console.log("got post", post);
    return <div></div>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const SSR = withSSRContext();
    const postsQuery = (await SSR.API.graphql({
        query: getPost,
        variables: { id: params.id },
    })) as {
        data: GetPostQuery;
    };

    return { props: { post: postsQuery.data.getPost as Post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const SSR = withSSRContext();
    const res = (await SSR.API.graphql({ query: listPosts })) as {
        data: ListPostsQuery;
        errors: any[];
    };
    const paths = res.data.listPosts.items.map((post) => ({
        params: { id: post.id },
    }));

    return { paths, fallback: "blocking" };
};