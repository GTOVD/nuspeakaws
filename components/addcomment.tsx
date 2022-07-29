import React, { ReactElement, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
    Button,
    Grid,
    IconButton,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateCommentInput, CreateCommentMutation, Post } from "../src/API";
import { API } from "aws-amplify";
import { createComment } from "../src/graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";

interface Props {
    posts: Post;
}

interface IFormInput {
    content: string;
}

export default function AddPost({ posts }: Props): ReactElement {
    const {
        register,
        formState: { errors },
        handleSubmit,
        // reset,
    } = useForm<IFormInput>();
    const [minimized, setMinimized] = useState<boolean>(true);

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        try {
            console.log(data);
            setMinimized(!minimized);
            const createNewCommentInput: CreateCommentInput = {
                postCommentsId: posts.id,
                content: data.content,
            };
            const createNewComment = (await API.graphql({
                query: createComment,
                variables: { input: createNewCommentInput },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as { data: CreateCommentMutation };
            console.log(createNewComment);
            window.location.reload();
            // reset({ content: "" });
            // setComments([...comment, createNewComment.data.createComment as Comment])
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <Paper elevation={3}>
                <Grid
                    container
                    direction="column"
                    margin="center"
                    wrap="nowrap"
                    marginTop={2}
                    border={1}
                    borderRadius={1}
                    padding={1}
                    gap={1}
                    borderColor="#9a7d00"
                >
                    <IconButton onClick={() => setMinimized(!minimized)}>
                        <AddIcon color="primary" />
                        <Typography color="primary">
                            😂 Create Comment 😂
                        </Typography>
                        <AddIcon color="primary" />
                    </IconButton>
                    {!minimized && (
                        <>
                            <Grid item>
                                <TextField
                                    id="content"
                                    label="Comment"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows={5}
                                    error={errors.content ? true : false}
                                    helperText={
                                        errors.content
                                            ? errors.content.message
                                            : null
                                    }
                                    {...register("content", {
                                        maxLength: {
                                            value: 100000,
                                            message:
                                                "Please enter contents less than 100,000 characters.",
                                        },
                                    })}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" type="submit">
                                    Create Comment
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Paper>
        </form>
    );
}
