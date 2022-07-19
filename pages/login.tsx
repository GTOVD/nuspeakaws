import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";

interface IFormInput {
    username: string;
    password: string;
}

export default function Login() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();
    const [open, setOpen] = useState<boolean>(false);
    const [signInError, setSignInError] = useState<string>("");
    const router = useRouter();

    const onSubmit: SubmitHandler<IFormInput> = async (data: IFormInput) => {
        const { username, password } = data;
        try {
            const amplifyUser = await Auth.signIn(username, password);
            console.log("Success, signed in a user", amplifyUser);
            if (amplifyUser) {
                router.push("/");
            } else {
                throw new Error("Invalid Amplify user sign in");
            }
        } catch (err) {
            console.error(err);
            setSignInError(err.message);
            setOpen(true);
        }
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={2}
                marginTop={10}
            >
                <Grid item>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        type="text"
                        error={errors.username ? true : false}
                        helperText={
                            errors.username ? errors.username.message : null
                        }
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Please enter a valid username",
                            },
                            minLength: {
                                value: 4,
                                message:
                                    "Please enter a username between 4-16 characters.",
                            },
                            maxLength: {
                                value: 16,
                                message:
                                    "Please enter a username between 4-16 characters.",
                            },
                        })}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        error={errors.password ? true : false}
                        helperText={
                            errors.password ? errors.password.message : null
                        }
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Please enter a valid password",
                            },
                            minLength: {
                                value: 8,
                                message: "Please enter a valid password",
                            },
                            maxLength: {
                                value: 256,
                                message: "Please enter a valid password",
                            },
                        })}
                    />
                </Grid>
                <Grid item>
                    <Button color="primary" variant="contained" type="submit">
                        {"Log-in"}
                    </Button>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {signInError}
                </Alert>
            </Snackbar>
        </form>
    );
}
