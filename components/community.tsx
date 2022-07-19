import { Grid, IconButton, Paper, Typography } from "@mui/material";
import React, { ReactElement } from "react";
import { Communities } from "../src/API";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface Props {
    communities: Communities;
}

export default function Community({ communities }: Props): ReactElement {
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
                        <Grid item>0</Grid>
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
                                <b>{communities.name}</b> • Posted by{" "}
                                {communities.owner}
                                <b> {communities.createdAt}</b> 🤦🏿‍♂️ 5 🤦🏿‍♂️ 3
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h3">Title of post</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">
                                Guess I shouldnt have bought all those Roblox
                                and amc calls hoping for some sweet sweet
                                tendies, but I guess I’m here with the rest of
                                the speds now. Seriously though, I want to
                                become wife’s boyfriend even though I have
                                neither. I will do what the most upvoted comment
                                is as long as it’s a call or a put, no naked
                                calls/puts or shorting (bc I want to stay above
                                a negative net worth.) Thoughts on gme calls?
                                Maybe some big brain popcorn puts? (mOaSs iS
                                tOmorRoW) Thoughts on dwac puts? Or should I
                                play the tried and true spy calls or puts?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
