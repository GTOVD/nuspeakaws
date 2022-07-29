/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommunities = /* GraphQL */ `
  mutation CreateCommunities(
    $input: CreateCommunitiesInput!
    $condition: ModelCommunitiesConditionInput
  ) {
    createCommunities(input: $input, condition: $condition) {
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
export const updateCommunities = /* GraphQL */ `
  mutation UpdateCommunities(
    $input: UpdateCommunitiesInput!
    $condition: ModelCommunitiesConditionInput
  ) {
    updateCommunities(input: $input, condition: $condition) {
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
export const deleteCommunities = /* GraphQL */ `
  mutation DeleteCommunities(
    $input: DeleteCommunitiesInput!
    $condition: ModelCommunitiesConditionInput
  ) {
    deleteCommunities(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
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
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
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
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
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
