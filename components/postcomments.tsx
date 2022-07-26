import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Comment } from "../src/API";
import millisecondsToElapsedTime from "../lib/millisecondsToElapsedTime";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Props {
    comment: Comment;
}

export default function PostComments({ comment }: Props): ReactElement {
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
                    >
                        <IconButton>
                            <Grid item>
                                <ArrowUpwardIcon color="primary" />
                            </Grid>
                        </IconButton>
                        <Grid item>
                            <Typography variant="body1">
                                {String(comment.upvotes - comment.downvotes)}
                            </Typography>
                        </Grid>
                        <IconButton>
                            <Grid item>
                                <ArrowDownwardIcon color="primary" />
                            </Grid>
                        </IconButton>
                        <Typography> Reply Share</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
