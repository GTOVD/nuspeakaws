/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommunities = /* GraphQL */ `
    query GetCommunities($id: ID!) {
        getCommunities(id: $id) {
            id
            name
            posts {
                items {
                    id
                    title
                    contents
                    link
                    createdAt
                    updatedAt
                    communitiesPostsId
                    owner
                }
                nextToken
            }
            createdAt
            updatedAt
            owner
        }
    }
`;
export const listCommunities = /* GraphQL */ `
    query ListCommunities(
        $filter: ModelCommunitiesFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listCommunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                name
                posts {
                    nextToken
                }
                createdAt
                updatedAt
                owner
            }
            nextToken
        }
    }
`;
export const getPost = /* GraphQL */ `
    query GetPost($id: ID!) {
        getPost(id: $id) {
            id
            title
            contents
            link
            votes {
                items {
                    id
                    vote
                    createdAt
                    updatedAt
                    postVotesId
                    commentVotesId
                    owner
                }
                nextToken
            }
            communities {
                id
                name
                posts {
                    nextToken
                }
                createdAt
                updatedAt
                owner
            }
            comments {
                items {
                    id
                    content
                    createdAt
                    updatedAt
                    postCommentsId
                    commentReplyId
                    owner
                }
                nextToken
            }
            createdAt
            updatedAt
            communitiesPostsId
            owner
        }
    }
`;
export const listPosts = /* GraphQL */ `
    query ListPosts(
        $filter: ModelPostFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                title
                contents
                link
                votes {
                    items {
                        id
                        vote
                        createdAt
                        updatedAt
                        postVotesId
                        commentVotesId
                        owner
                    }
                    nextToken
                }
                communities {
                    id
                    name
                    createdAt
                    updatedAt
                    owner
                }
                comments {
                    items {
                        id
                        content
                        createdAt
                        updatedAt
                        postCommentsId
                        commentReplyId
                        owner
                    }
                    nextToken
                }
                createdAt
                updatedAt
                communitiesPostsId
                owner
            }
            nextToken
        }
    }
`;
export const getComment = /* GraphQL */ `
    query GetComment($id: ID!) {
        getComment(id: $id) {
            id
            post {
                id
                title
                contents
                link
                votes {
                    nextToken
                }
                communities {
                    id
                    name
                    createdAt
                    updatedAt
                    owner
                }
                comments {
                    nextToken
                }
                createdAt
                updatedAt
                communitiesPostsId
                owner
            }
            reply {
                items {
                    id
                    content
                    createdAt
                    updatedAt
                    postCommentsId
                    commentReplyId
                    owner
                }
                nextToken
            }
            content
            votes {
                items {
                    id
                    vote
                    createdAt
                    updatedAt
                    postVotesId
                    commentVotesId
                    owner
                }
                nextToken
            }
            createdAt
            updatedAt
            postCommentsId
            commentReplyId
            owner
        }
    }
`;
export const listComments = /* GraphQL */ `
    query ListComments(
        $filter: ModelCommentFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                post {
                    id
                    title
                    contents
                    link
                    createdAt
                    updatedAt
                    communitiesPostsId
                    owner
                }
                reply {
                    nextToken
                }
                content
                votes {
                    nextToken
                }
                createdAt
                updatedAt
                postCommentsId
                commentReplyId
                owner
            }
            nextToken
        }
    }
`;
export const getVote = /* GraphQL */ `
    query GetVote($id: ID!) {
        getVote(id: $id) {
            id
            vote
            createdAt
            updatedAt
            postVotesId
            commentVotesId
            owner
        }
    }
`;
export const listVotes = /* GraphQL */ `
    query ListVotes(
        $filter: ModelVoteFilterInput
        $limit: Int
        $nextToken: String
    ) {
        listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                vote
                createdAt
                updatedAt
                postVotesId
                commentVotesId
                owner
            }
            nextToken
        }
    }
`;
