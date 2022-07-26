import React, { ReactElement } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { withSSRContext } from "aws-amplify";
import { listPosts, getPost } from "../../src/graphql/queries";
import { GetPostQuery, ListPostsQuery, Post, Comment } from "../../src/API";
import Communities from "../../components/community";
import PostComments from "../../components/postcomments";
import { Container, ThemeProvider } from "@mui/system";
import theme from "../../src/theme";
import AddComment from "../../components/addcomment";

interface Props {
    post: Post;
}

export default function IndividualPost({ post }: Props): ReactElement {
    console.log("got post", post);
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Container>
                    <Communities posts={post}></Communities>
                    <AddComment posts={post} />
                    {(post.comments.items as Comment[])
                        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                        .map((comment) => (
                            <PostComments
                                key={comment.id}
                                comment={comment}
                            ></PostComments>
                        ))}
                </Container>
            </ThemeProvider>
        </div>
    );
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
