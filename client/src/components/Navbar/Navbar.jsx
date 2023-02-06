import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MapIcon from "@mui/icons-material/Map";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

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
                <BottomNavigationAction
                    label="Map"
                    icon={<MapIcon />}
                    onClick={() => {
                        navigate("/map");
                    }}
                />
                <BottomNavigationAction
                    label="Circles"
                    icon={<SupervisedUserCircleIcon />}
                    onClick={() => {
                        navigate("/circle");
                    }}
                />
            </BottomNavigation>
        </Box>
    );
}
