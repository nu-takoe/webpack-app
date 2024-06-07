import { Box, Divider, Typography } from "@mui/material";
import React, { useState } from "react";
import Screen from "./Screen";
import WorkSpace from "./WorkSpace";
import AppContext from "../context";

export default function Interface() {
    const [state, setState] = useState<{
        first: string;
        second: string;
        third: string;
    }>({
        first: '',
        second: '',
        third: '0',
    });

    return (
       
            <Box sx={{display: 'flex', flexDirection: 'column', bgcolor: "whitesmoke", borderRadius: '16px', boxShadow: "10px 10px 8px 0px rgba(0, 0, 0, 0.2)" }}>
                <AppContext.Provider value={{ state, setState }}>
                    <Screen />
                    <Divider />
                    <WorkSpace />
                </AppContext.Provider>
            </Box>
        
    );
}
