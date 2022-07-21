import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#d4af37",
        },
        secondary: {
            main: "#9a7d00",
        },
        background: {
            default: "#0a0a0a",
            paper: "#1a1a1a",
        },
        text: {
            primary: "rgba(255,255,255,0.95)",
            secondary: "rgba(255,255,255,0.80)",
            disabled: "rgba(255,255,255,0.50)",
        },
        divider: "rgba(0,0,0,0.12)",
    },
    typography: {
        button: {
            textTransform: "none",
        },
        fontFamily: [
            "Inter",
            "ui-sans-serif",
            "system-ui",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji",
        ].join(","),
        h1: {
            fontSize: "4rem",
            fontWeight: 700,
            lineHeight: 1,
            color: "#fff",
        },
        h2: {
            letterSpacing: "-.025em",
            fontWeight: 700,
            fontSize: "2.25rem",
            lineHeight: 2.5,
            color: "#fff",
        },
        h3: {
            color: "#fff",
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.75,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#d1d5db",
        },
        body2: {
            fontSize: "0.7rem",
            lineHeight: 1.75,
            color: "#9CA3AF",
        },
    },
});

export default responsiveFontSizes(theme);
