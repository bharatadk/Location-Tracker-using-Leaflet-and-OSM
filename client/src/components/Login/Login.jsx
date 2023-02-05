import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Login.css";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © ERMIN Automotive "}
        </Typography>
    );
}
const theme = createTheme();

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container
                component="main"
                maxWidth="xs"
                style={{
                    backgroundColor: "whitesmoke",
                    border: "1px solid rgba(0,0,0,0.2)",
                    marginTop: 58,
                    borderRadius: "20px",
                }}
            >
                <CssBaseline />
                <Box
                    sx={{
                        padding: "16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "25rem",
                        borderRadius: "20px",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#1976d2" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            className="inputRounded"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Enter Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />

                        <TextField
                            className="inputRounded"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Enter Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            style={{ borderRadius: "10px" }}
                        />

                        <Button
                            className="btn"
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                borderRadius: "10px",
                                ":hover": {
                                    color: "white",
                                },
                            }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
};
export default Login;
