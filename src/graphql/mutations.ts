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
          image
          upvotes
          downvotes
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
          image
          upvotes
          downvotes
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
          image
          upvotes
          downvotes
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
      image
      upvotes
      downvotes
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
          upvotes
          downvotes
          createdAt
          updatedAt
          postCommentsId
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
      image
      upvotes
      downvotes
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
          upvotes
          downvotes
          createdAt
          updatedAt
          postCommentsId
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
      image
      upvotes
      downvotes
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
          upvotes
          downvotes
          createdAt
          updatedAt
          postCommentsId
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
        image
        upvotes
        downvotes
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
      content
      upvotes
      downvotes
      createdAt
      updatedAt
      postCommentsId
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
        image
        upvotes
        downvotes
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
      content
      upvotes
      downvotes
      createdAt
      updatedAt
      postCommentsId
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
        image
        upvotes
        downvotes
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
      content
      upvotes
      downvotes
      createdAt
      updatedAt
      postCommentsId
      owner
    }
  }
`;
