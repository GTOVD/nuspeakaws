import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Post } from "../src/API";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Props {
    posts: Post;
}

export default function Community({ posts }: Props): ReactElement {
    return (
        <Paper elevation={3}>
            <Grid
                container
                direction="row"
                justifyItems="flex-start"
                alignItems="flex-start"
                spacing={2}
                style={{ padding: 16, marginTop: 16 }}
            >
                <Grid item alignItems="center" justifyItems="center">
                    <Grid container direction="column" alignItems="center">
                        <IconButton>
                            <Grid item>
                                <ArrowUpwardIcon color="primary" />
                            </Grid>
                        </IconButton>
                        <Grid item>
                            {String(posts.upvotes - posts.downvotes)}
                        </Grid>
                        <IconButton>
                            <Grid item>
                                <ArrowDownwardIcon color="primary" />
                            </Grid>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="flex-start">
                        <Grid item>
                            <Typography variant="body2">
                                <b>{posts.communities?.name}</b> • Posted by{" "}
                                {posts.owner}{" "}
                                {(Date.now() - Date.parse(posts.createdAt)) /
                                    3600000 >
                                1
                                    ? `${Math.floor(
                                          (Date.now() -
                                              Date.parse(posts.createdAt)) /
                                              3600000
                                      )} hours ago`
                                    : (Date.now() -
                                          Date.parse(posts.createdAt)) /
                                          60000 >
                                      1
                                    ? `${Math.floor(
                                          (Date.now() -
                                              Date.parse(posts.createdAt)) /
                                              60000
                                      )} minutes ago`
                                    : "just now"}{" "}
                                🤦🏿‍♂️ 5 🤦🏿‍♂️ 3
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">{posts.title}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {posts.contents}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                {posts.image}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
