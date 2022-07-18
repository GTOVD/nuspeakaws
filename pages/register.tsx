import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Button, Grid, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { useUser } from "../src/context/AuthContext";
import { Auth } from "aws-amplify";

interface IFormInput {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    code: string;
}

export default function Register() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();
    const [open, setOpen] = useState<boolean>(false);
    const [signUpError, setSignUpError] = useState<string>("");
    const { user, setUser } = useUser();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            signUp(data);
        } catch (err) {
            console.log(err);
            setOpen(true);
        }
    };

    const handleClick = () => {
        setOpen(true);
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

    async function signUp(data: IFormInput) {
        const { username, password, email } = data;
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,
                },
            });
            console.log("Signed up a user ", user);
        } catch (err) {
            throw err;
        }
    }

    console.log("User is : ", user);

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
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        error={errors.email ? true : false}
                        helperText={errors.email ? errors.email.message : null}
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Please enter a valid email",
                            },
                            minLength: {
                                value: 3,
                                message: "Please enter a valid email",
                            },
                            maxLength: {
                                value: 319,
                                message: "Please enter a valid email",
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
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        error={errors.confirmPassword ? true : false}
                        helperText={
                            errors.confirmPassword
                                ? errors.confirmPassword.message
                                : null
                        }
                        {...register("confirmPassword", {
                            required: {
                                value: true,
                                message: "Please re-enter your password",
                            },
                            minLength: {
                                value: 6,
                                message: "Please re-enter your password",
                            },
                            maxLength: {
                                value: 256,
                                message: "Please re-enter your password",
                            },
                        })}
                    />
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        onClick={handleClick}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    sx={{ width: "100%" }}
                >
                    {signUpError}
                </Alert>
            </Snackbar>
        </form>
    );
}
