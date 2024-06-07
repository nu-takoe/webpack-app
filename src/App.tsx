import React from "react";
import "./index.css";
import { Container } from "@mui/material";
import Interface from "./components/Interface";

export default function App() {
    return (
        <Container
            sx={{
                display: "flex",
                height: "100svh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Interface />
        </Container>
    );
}
