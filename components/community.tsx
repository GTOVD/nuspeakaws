import {
    Button,
    ButtonBase,
    Grid,
    IconButton,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import {
    CreateVoteInput,
    CreateVoteMutation,
    Post,
    UpdateVoteInput,
    UpdateVoteMutation,
    Vote,
} from "../src/API";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import theme from "../src/theme";
import ReactPlayer from "react-player";
import router from "next/router";
import millisecondsToElapsedTime from "../lib/millisecondsToElapsedTime";
import { createVote, updateVote } from "../src/graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import { API } from "aws-amplify";
import { useUser } from "../src/context/AuthContext";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

interface Props {
    posts: Post;
}

export default function Community({ posts }: Props): ReactElement {
    const [existingVote, setExistingVote] = useState<string | undefined>(
        undefined
    );
    const [existingUser, setExistingUser] = useState<string | undefined>(
        undefined
    );
    const [upVotes, setUpVotes] = useState<number>(
        posts.votes.items
            ? posts.votes.items.filter(
                  (v) => v.vote === "upvote" && v.commentVotesId === "0"
              ).length
            : 0
    );
    const [downVotes, setDownVotes] = useState<number>(
        posts.votes.items
            ? posts.votes.items.filter(
                  (v) => v.vote === "downvote" && v.commentVotesId === "0"
              ).length
            : 0
    );
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            const findVote: Vote | undefined = posts.votes.items?.find(
                (v) =>
                    v.owner === user.getUsername() && v.commentVotesId === "0"
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
                postVotesId: posts.id,
                commentVotesId: "0",
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
                postVotesId: posts.id,
                commentVotesId: "0",
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

    return (
        <ThemeProvider theme={theme}>
            <Paper elevation={3}>
                <Grid
                    container
                    direction="row"
                    margin="center"
                    wrap="nowrap"
                    marginTop={2}
                    border={1}
                    borderRadius={1}
                    borderColor="#9a7d00"
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyItems="center"
                        width="auto"
                        borderRadius={1}
                        style={{ background: "#1f1f1f" }}
                    >
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            justifyItems="center"
                            width="auto"
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
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        margin="center"
                        overflow="hidden"
                        wrap="nowrap"
                        padding={0.5}
                    >
                        <Grid item width="100%" padding={0.2}>
                            <Typography variant="body2" color="#d4af37" noWrap>
                                <b>{posts.communities?.name}</b>
                                {" • Posted by "}
                                {posts.owner}{" "}
                                {millisecondsToElapsedTime(posts.createdAt)}
                                {"🤦🏿‍♂️ 5 🤦🏿‍♂️ 3"}
                            </Typography>

                            {/* <Button variant="outlined">{"Join"}</Button> */}
                        </Grid>

                        <Grid item width="100%" padding={0.2}>
                            <Typography variant="h6">{posts.title}</Typography>
                        </Grid>
                        <Grid item width="100%" padding={0.2}>
                            <Typography variant="body1">
                                {posts.contents}
                            </Typography>
                        </Grid>
                        <ButtonBase
                            onClick={() => router.push(`/post/${posts.id}`)}
                        >
                            {ReactPlayer.canPlay(posts.link) && (
                                <Grid
                                    item
                                    alignSelf="center"
                                    width="100%"
                                    height={490}
                                    position="inherit"
                                >
                                    <ReactPlayer
                                        url={`${posts.link}`}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        position="inherit"
                                    />
                                </Grid>
                            )}
                            {posts.link && !ReactPlayer.canPlay(posts.link) && (
                                <Grid
                                    item
                                    alignSelf="center"
                                    maxHeight={600}
                                    position="inherit"
                                >
                                    <img
                                        alt="Image"
                                        src={`${posts.link}`}
                                        width="100%"
                                        height="100%"
                                        onError={(e) => {
                                            if (e) {
                                                document.getElementsByTagName(
                                                    "img"
                                                )[0].src =
                                                    "upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
                                            }
                                        }}
                                    />
                                </Grid>
                            )}
                        </ButtonBase>
                        <Grid
                            container
                            width="100%"
                            padding={0.2}
                            wrap="nowrap"
                            overflow="hidden"
                        >
                            <Button
                                onClick={() => router.push(`/post/${posts.id}`)}
                            >
                                <CommentOutlinedIcon />
                                <Typography color={"primary"} noWrap>
                                    {posts.comments.items.length} {" Comments"}
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
            {/*     
                <Image
                    src={`https://res.cloudinary.com/demo/image/fetch/${posts.image}`}
                    width={600}
                    height={500}
                    layout="intrinsic"
                />
                <img
                    alt="Italian Trulli"
                    src={`${posts.image}`}
                    width="900"
                    // height="500"
                / >
                <iframe
                    src="https://www.youtube.com/watch?v=BIRr0BLRgRc"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="600"
                    height="500"
                />
            */}
        </ThemeProvider>
    );
}
