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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($owner: String) {
    onCreateVote(owner: $owner) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($owner: String) {
    onUpdateVote(owner: $owner) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($owner: String) {
    onDeleteVote(owner: $owner) {
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
