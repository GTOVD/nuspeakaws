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
import { CreatePostInput, CreatePostMutation } from "../src/API";
import { API } from "aws-amplify";
import { createPost } from "../src/graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import { useRouter } from "next/router";

interface Props {}

interface IFormInput {
    title: string;
    link?: string;
    contents?: string;
    communitiesPostsId: string;
}

export default function AddPost({}: Props): ReactElement {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm<IFormInput>();
    const [minimized, setMinimized] = useState<boolean>(true);
    const router = useRouter();

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        try {
            console.log(data);
            setMinimized(!minimized);
            const createNewPostInput: CreatePostInput = {
                title: data.title,
                contents: data.contents,
                link: data.link,
                communitiesPostsId: "1bd7d115-c6ed-444a-b826-c01c292b0627",
            };
            const createNewPost = (await API.graphql({
                query: createPost,
                variables: { input: createNewPostInput },
                authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
            })) as { data: CreatePostMutation };
            console.log(createNewPost);
            reset({ title: "", link: "", contents: "" });
            router.push(`/post/${createNewPost.data.createPost.id}`);
        } catch (err) {
            console.log(err);
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
                        <Typography color="primary" noWrap>
                            😂 Create Post 😂
                        </Typography>
                        <AddIcon color="primary" />
                    </IconButton>
                    {!minimized && (
                        <>
                            <Grid item>
                                <TextField
                                    id="title"
                                    label="Title"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    autoFocus
                                    error={errors.title ? true : false}
                                    helperText={
                                        errors.title
                                            ? errors.title.message
                                            : null
                                    }
                                    {...register("title", {
                                        required: {
                                            value: true,
                                            message: "Please enter a title",
                                        },
                                        maxLength: {
                                            value: 300,
                                            message:
                                                "Please enter a title less than 300 characters.",
                                        },
                                    })}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="link"
                                    label="Link"
                                    variant="outlined"
                                    type="url"
                                    fullWidth
                                    error={errors.link ? true : false}
                                    helperText={
                                        errors.link ? errors.link.message : null
                                    }
                                    {...register("link", {
                                        maxLength: {
                                            value: 2048,
                                            message:
                                                "Please enter a link less than 2048 characters.",
                                        },
                                    })}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="contents"
                                    label="Contents"
                                    variant="outlined"
                                    type="text"
                                    fullWidth
                                    multiline
                                    rows={5}
                                    error={errors.contents ? true : false}
                                    helperText={
                                        errors.contents
                                            ? errors.contents.message
                                            : null
                                    }
                                    {...register("contents", {
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
                                    Create Post
                                </Button>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Paper>
        </form>
    );
}
