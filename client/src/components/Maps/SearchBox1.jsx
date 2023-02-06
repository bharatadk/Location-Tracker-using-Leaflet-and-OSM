import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

import locationICON from "./locationICON.png";
import {
    OutlinedInput,
    Button,
    List,
    ListItemIcon,
    ListItemText,
    Divider,
    Dialog,
    ListItemButton,
} from "@mui/material";

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
    q: "",
    format: "json",
    addressdetails: "addressdetails",
};

export default function SearchBox1(props) {
    const { start, setStart } = props;
    const [listPlace1, setListPlace1] = useState([]);
    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = useState(false);
    const handleSearch = (searchText) => {
        const params = {
            q: searchText,
            format: "json",
            addressdetails: 1,
            polygon_geojson: 0,
        };
        const queryString = new URLSearchParams(params).toString();
        const requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        const fetchAPI1 = async () => {
            try {
                const response = await fetch(
                    `${NOMINATIM_BASE_URL}${queryString}`,
                    requestOptions
                );
                const result = await response.text();
                await setListPlace1(JSON.parse(result));
            } catch (err) {
                console.log(err);
            }
        };

        fetchAPI1();
    };
    return (
        <>
            <div
                style={{
                    width: "80px",
                    height: "80px",
                    position: "fixed",
                    zIndex: "1000",
                    borderRadius: "50%",
                    backgroundColor: "#ddd",
                    left: "0",
                    top: "0",
                    margin: "5px",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 3px gray",
                }}
            >
                <Button onClick={() => setOpen(true)}>
                    <span
                        style={{
                            fontSize: "20px",
                            color: "black",
                            marginTop: "15px",
                            marginLeft: "-2px",
                        }}
                    >
                        TO
                    </span>
                </Button>
            </div>
            <Dialog
                onClose={handleClose}
                open={open}
                style={{ borderRadius: "20px", marginRight: "50px" }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                        backgroundColor: "#ddd",
                    }}
                >
                    <div style={{ display: "flex" }}>
                        <div style={{ flex: 1, marginLeft: "5px" }}>
                            <OutlinedInput
                                style={{ width: "100%" }}
                                placeholder="From"
                                onChange={(event) => {
                                    handleSearch(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <List component="nav" aria-label="main mailbox folders">
                            {listPlace1.map((item) => {
                                return (
                                    <div key={item?.place_id}>
                                        <ListItemButton
                                            onClick={(e) => {
                                                setStart([
                                                    parseInt(item.lat),
                                                    parseInt(item.lon),
                                                ]);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <img
                                                    src={locationICON}
                                                    alt="locationICON"
                                                    style={{
                                                        width: 38,
                                                        height: 38,
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item?.display_name}
                                            />
                                        </ListItemButton>
                                        <Divider />
                                    </div>
                                );
                            })}{" "}
                        </List>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
