import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import MapIcon from "@mui/icons-material/Map";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
export default function Navbar() {
    const [value, setValue] = React.useState(0);

    return (
        <Box
            sx={{
                width: "100%",
                position: "absolute",
                bottom: "0px ",
                backgroundColor: "whitesmoke",
                minHeight: "20px",
            }}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Map" icon={<MapIcon />} />
                <BottomNavigationAction
                    label="Circles"
                    icon={<SupervisedUserCircleIcon />}
                />
            </BottomNavigation>
        </Box>
    );
}
