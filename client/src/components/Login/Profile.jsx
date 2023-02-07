import * as React from "react";
import { format } from "date-fns";
import "./Profile.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Divider } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Profile(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Card
                sx={{
                    width: 400,

                    boxShadow: "5px 10px 20px #999",
                    borderRadius: "20px",
                    margin: "20px",
                    background: `${props.bgColor}`,
                }}
            >
                <CardHeader
                    style={{ fontSize: "40px", height: "50px" }}
                    avatar={
                        <Avatar
                            sx={{ bgcolor: orange[500] }}
                            aria-label="recipe"
                        >
                            <img
                                src={props.owner.avatar_url}
                                alt={props.owner.login}
                                width="40"
                            />
                        </Avatar>
                    }
                    title={props.name}
                    subheader={props.owner.login}
                />

                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        <div>
                            <p style={{ fontSize: "16px", fontWeight: "600" }}>
                                Created on : 
                                {format(
                                    new Date(props.created_at),
                                    "dd MMMM yyyy"
                                )}
                            </p>
                        </div>
                    </Typography>
                </CardContent>
                <CardActions disableSpacing style={{ marginBottom: "-50px" }}>
                    <IconButton style={{ fontSize: "16px" }}>
                        <StarBorderIcon />  
                        {props.stargazers_count.toLocaleString()} stars
                    </IconButton>
                    <IconButton style={{ fontSize: "16px" }}>
                        <VisibilityIcon />  
                        {props.watchers_count.toLocaleString()} Watchers
                    </IconButton>
                </CardActions>
                <CardActions>
                    <Button
                        style={{ marginLeft: "auto" }}
                        variant="outlined"
                        size="small"
                    >
                        <a
                            style={{
                                textDecoration: "none",
                                color: "black",
                                fontWeight: "600",
                            }}
                            href={props.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View Repo ↗️
                        </a>
                    </Button>
                </CardActions>

                {props.private ? (
                    <p
                        style={{
                            BackgroundColor: "orange",
                            color: "white",
                        }}
                    >
                        Private
                    </p>
                ) : (
                    <p
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "10px",
                            marginBottom: "-5px",
                        }}
                    >
                        Public
                    </p>
                )}
            </Card>
        </div>
    );
}
