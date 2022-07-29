/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommunitiesInput = {
  id?: string | null,
  name: string,
};

export type ModelCommunitiesConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCommunitiesConditionInput | null > | null,
  or?: Array< ModelCommunitiesConditionInput | null > | null,
  not?: ModelCommunitiesConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Communities = {
  __typename: "Communities",
  id: string,
  name: string,
  posts?: ModelPostConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type Post = {
  __typename: "Post",
  id: string,
  title: string,
  contents?: string | null,
  link?: string | null,
  votes?: ModelVoteConnection | null,
  communities?: Communities | null,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
  communitiesPostsId?: string | null,
  owner?: string | null,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items:  Array<Vote | null >,
  nextToken?: string | null,
};

export type Vote = {
  __typename: "Vote",
  id: string,
  vote: string,
  createdAt: string,
  updatedAt: string,
  postVotesId: string,
  commentVotesId: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items:  Array<Comment | null >,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  post?: Post | null,
  reply?: ModelCommentConnection | null,
  content: string,
  votes?: ModelVoteConnection | null,
  createdAt: string,
  updatedAt: string,
  postCommentsId?: string | null,
  commentReplyId?: string | null,
  owner?: string | null,
};

export type UpdateCommunitiesInput = {
  id: string,
  name?: string | null,
};

export type DeleteCommunitiesInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  title: string,
  contents?: string | null,
  link?: string | null,
  communitiesPostsId?: string | null,
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
  communitiesPostsId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdatePostInput = {
  id: string,
  title?: string | null,
  contents?: string | null,
  link?: string | null,
  communitiesPostsId?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  content: string,
  postCommentsId?: string | null,
  commentReplyId?: string | null,
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
  postCommentsId?: ModelIDInput | null,
  commentReplyId?: ModelIDInput | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  postCommentsId?: string | null,
  commentReplyId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateVoteInput = {
  id?: string | null,
  vote: string,
  postVotesId: string,
  commentVotesId: string,
};

export type ModelVoteConditionInput = {
  vote?: ModelStringInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
  postVotesId?: ModelIDInput | null,
  commentVotesId?: ModelIDInput | null,
};

export type UpdateVoteInput = {
  id: string,
  vote?: string | null,
  postVotesId: string,
  commentVotesId: string,
};

export type DeleteVoteInput = {
  id: string,
};

export type ModelCommunitiesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCommunitiesFilterInput | null > | null,
  or?: Array< ModelCommunitiesFilterInput | null > | null,
  not?: ModelCommunitiesFilterInput | null,
};

export type ModelCommunitiesConnection = {
  __typename: "ModelCommunitiesConnection",
  items:  Array<Communities | null >,
  nextToken?: string | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  link?: ModelStringInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
  communitiesPostsId?: ModelIDInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
  postCommentsId?: ModelIDInput | null,
  commentReplyId?: ModelIDInput | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  vote?: ModelStringInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
  postVotesId?: ModelIDInput | null,
  commentVotesId?: ModelIDInput | null,
};

export type CreateCommunitiesMutationVariables = {
  input: CreateCommunitiesInput,
  condition?: ModelCommunitiesConditionInput | null,
};

export type CreateCommunitiesMutation = {
  createCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommunitiesMutationVariables = {
  input: UpdateCommunitiesInput,
  condition?: ModelCommunitiesConditionInput | null,
};

export type UpdateCommunitiesMutation = {
  updateCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommunitiesMutationVariables = {
  input: DeleteCommunitiesInput,
  condition?: ModelCommunitiesConditionInput | null,
};

export type DeleteCommunitiesMutation = {
  deleteCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};

export type GetCommunitiesQueryVariables = {
  id: string,
};

export type GetCommunitiesQuery = {
  getCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommunitiesQueryVariables = {
  filter?: ModelCommunitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommunitiesQuery = {
  listCommunities?:  {
    __typename: "ModelCommunitiesConnection",
    items:  Array< {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      post?:  {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null,
      reply?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      content: string,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      postCommentsId?: string | null,
      commentReplyId?: string | null,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      vote: string,
      createdAt: string,
      updatedAt: string,
      postVotesId: string,
      commentVotesId: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommunitiesSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommunitiesSubscription = {
  onCreateCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommunitiesSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommunitiesSubscription = {
  onUpdateCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommunitiesSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommunitiesSubscription = {
  onDeleteCommunities?:  {
    __typename: "Communities",
    id: string,
    name: string,
    posts?:  {
      __typename: "ModelPostConnection",
      items:  Array< {
        __typename: "Post",
        id: string,
        title: string,
        contents?: string | null,
        link?: string | null,
        createdAt: string,
        updatedAt: string,
        communitiesPostsId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    title: string,
    contents?: string | null,
    link?: string | null,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    communities?:  {
      __typename: "Communities",
      id: string,
      name: string,
      posts?:  {
        __typename: "ModelPostConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    communitiesPostsId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    post?:  {
      __typename: "Post",
      id: string,
      title: string,
      contents?: string | null,
      link?: string | null,
      votes?:  {
        __typename: "ModelVoteConnection",
        nextToken?: string | null,
      } | null,
      communities?:  {
        __typename: "Communities",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      communitiesPostsId?: string | null,
      owner?: string | null,
    } | null,
    reply?:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        postCommentsId?: string | null,
        commentReplyId?: string | null,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    content: string,
    votes?:  {
      __typename: "ModelVoteConnection",
      items:  Array< {
        __typename: "Vote",
        id: string,
        vote: string,
        createdAt: string,
        updatedAt: string,
        postVotesId: string,
        commentVotesId: string,
        owner?: string | null,
      } | null >,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    postCommentsId?: string | null,
    commentReplyId?: string | null,
    owner?: string | null,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    id: string,
    vote: string,
    createdAt: string,
    updatedAt: string,
    postVotesId: string,
    commentVotesId: string,
    owner?: string | null,
  } | null,
};
