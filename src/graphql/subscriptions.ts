/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommunities = /* GraphQL */ `
  subscription OnCreateCommunities($owner: String) {
    onCreateCommunities(owner: $owner) {
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
export const onUpdateCommunities = /* GraphQL */ `
  subscription OnUpdateCommunities($owner: String) {
    onUpdateCommunities(owner: $owner) {
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
export const onDeleteCommunities = /* GraphQL */ `
  subscription OnDeleteCommunities($owner: String) {
    onDeleteCommunities(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
