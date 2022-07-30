import { Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import {
    Comment,
    CreateVoteInput,
    CreateVoteMutation,
    UpdateVoteInput,
    UpdateVoteMutation,
    Vote,
} from "../src/API";
import millisecondsToElapsedTime from "../lib/millisecondsToElapsedTime";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { createVote, updateVote } from "../src/graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import { API } from "aws-amplify";
import { useUser } from "../src/context/AuthContext";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

interface Props {
    comment: Comment;
}

export default function PostComments({ comment }: Props): ReactElement {
    const [existingVote, setExistingVote] = useState<string | undefined>(
        undefined
    );
    const [existingUser, setExistingUser] = useState<string | undefined>(
        undefined
    );
    const [upVotes, setUpVotes] = useState<number>(
        comment.votes.items
            ? comment.votes.items.filter((v) => v.vote === "upvote").length
            : 0
    );
    const [downVotes, setDownVotes] = useState<number>(
        comment.votes.items
            ? comment.votes.items.filter((v) => v.vote === "downvote").length
            : 0
    );
    const { user } = useUser();

    console.log({ comment, user });
    console.log({ existingVote, upVotes, downVotes, existingUser });

    useEffect(() => {
        if (user) {
            const findVote: Vote | undefined = comment.votes.items?.find(
                (v) => v.owner === user.getUsername()
            );
            if (findVote) {
                setExistingVote(findVote.vote);
                setExistingUser(findVote.id);
            }
        }
    }, [user]);

    const addVote = async (voteType: string) => {
        if (existingVote && existingVote != voteType) {
            const updateVoteInput: UpdateVoteInput = {
                id: existingUser,
                vote: voteType,
                postVotesId: comment.postCommentsId,
                commentVotesId: comment.id,
            };
            const updateExistingVote = (await API.graphql({
                query: updateVote,
                variables: { input: updateVoteInput },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as { data: UpdateVoteMutation };
            if (voteType === "upvote") {
                setUpVotes(upVotes + 1);
                setDownVotes(downVotes - 1);
            }
            if (voteType === "downvote") {
                setUpVotes(upVotes - 1);
                setDownVotes(downVotes + 1);
            }
            setExistingVote(voteType);
            setExistingUser(updateExistingVote.data.updateVote.id);
            console.log("updated Vote: ", updateExistingVote);
        }
        if (!existingVote) {
            const createNewVoteInput: CreateVoteInput = {
                vote: voteType,
                postVotesId: comment.postCommentsId,
                commentVotesId: comment.id,
            };
            const createNewVote = (await API.graphql({
                query: createVote,
                variables: { input: createNewVoteInput },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as { data: CreateVoteMutation };
            if (createNewVote.data.createVote.vote === "upvote") {
                setUpVotes(upVotes + 1);
            }
            if (createNewVote.data.createVote.vote === "downvote") {
                setDownVotes(downVotes + 1);
            }
            setExistingVote(voteType);
            setExistingUser(createNewVote.data.createVote.id);
            console.log("created Vote: ", createNewVote);
        }
    };

    console.log("comment", comment);
    return (
        <Paper elevation={3}>
            <Grid
                container
                direction="column"
                margin="center"
                wrap="nowrap"
                marginTop={2}
                border={1}
                borderRadius={1}
                borderColor="#9a7d00"
            >
                <Grid item padding={2}>
                    <Typography variant="body2" color="#d4af37">
                        <b>{comment.owner}</b> •{" "}
                        {millisecondsToElapsedTime(comment.createdAt)}
                    </Typography>
                    <Typography variant="body1">{comment.content}</Typography>
                    <Grid
                        container
                        direction="row"
                        width="100%"
                        margin="center"
                        alignItems="center"
                        justifyItems="left"
                        wrap="nowrap"
                        overflow="hidden"
                    >
                        <IconButton onClick={() => addVote("upvote")}>
                            <Grid item>
                                <ArrowUpwardIcon color="primary" />
                            </Grid>
                        </IconButton>
                        <Grid item>
                            <Typography variant="body1">
                                {upVotes - downVotes}
                            </Typography>
                        </Grid>
                        <IconButton onClick={() => addVote("downvote")}>
                            <Grid item>
                                <ArrowDownwardIcon color="primary" />
                            </Grid>
                        </IconButton>

                        <Button>
                            <CommentOutlinedIcon />
                            <Typography color={"primary"} noWrap>
                                {" Reply"}
                            </Typography>
                        </Button>
                        <Button>
                            <AddReactionOutlinedIcon />
                            <Typography color={"primary"} noWrap>
                                {"Add Reaction"}
                            </Typography>
                        </Button>
                        <Button>
                            <ShareOutlinedIcon />
                            <Typography color={"primary"} noWrap>
                                {"Share"}
                            </Typography>
                        </Button>
                        {/* copy link, crosspost, embed, share to chat */}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
