import {
    ButtonBase,
    Grid,
    IconButton,
    Paper,
    ThemeProvider,
    Typography,
} from "@mui/material";
import React, { ReactElement } from "react";
import { Post } from "../src/API";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import theme from "../src/theme";
import ReactPlayer from "react-player";
import router from "next/router";
import millisecondsToElapsedTime from "../lib/millisecondsToElapsedTime";

interface Props {
    posts: Post;
}

export default function Community({ posts }: Props): ReactElement {
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
                            <IconButton>
                                <Grid item>
                                    <ArrowUpwardIcon color="primary" />
                                </Grid>
                            </IconButton>
                            <Grid item>
                                <Typography variant="body1">
                                    {String(posts.upvotes - posts.downvotes)}
                                </Typography>
                            </Grid>
                            <IconButton>
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
                        padding={0.5}
                    >
                        <Grid item width="100%" padding={0.2}>
                            <Typography variant="body2" color="#d4af37">
                                <b>{posts.communities?.name}</b> • Posted by{" "}
                                {posts.owner}{" "}
                                {millisecondsToElapsedTime(posts.createdAt)}
                                🤦🏿‍♂️ 5 🤦🏿‍♂️ 3
                            </Typography>
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
                            {ReactPlayer.canPlay(posts.image) && (
                                <Grid
                                    item
                                    alignSelf="center"
                                    width="100%"
                                    height={490}
                                    position="inherit"
                                >
                                    <ReactPlayer
                                        url={`${posts.image}`}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        position="inherit"
                                    />
                                </Grid>
                            )}
                            {posts.image && !ReactPlayer.canPlay(posts.image) && (
                                <Grid
                                    item
                                    alignSelf="center"
                                    maxHeight={600}
                                    position="inherit"
                                >
                                    <img
                                        alt="Image"
                                        src={`${posts.image}`}
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
