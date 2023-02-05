import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
// import Maps from "../Maps/Maps";
import MapsApp from "../Maps/MapsApp";
// let socket: any;
const serverUrl = "http://localhost:3000";

const Home = () => {
    const socket = useRef();
    // useEffect(() => {
    //     socket.current = io("ws://localhost:8080");
    //     socket.current.emit("addUser", "ram123");
    // }, []);
    // useEffect(() => {
    //     socket.current = io("ws://localhost:8080");
    //     socket.current.on("getMessage", (data) => {
    //         console.log(data);
    //         setComingMessage({
    //             senderId: data.senderId,
    //             messageText: data.text,
    //             createdAt: Date.now(),
    //         });
    //     });

    //     socket.current.on("getVideoMessage", (data) => {
    //         setVideoCallUrl(data.videoCallUrl);
    //         setShowModal(true);
    //     });
    // }, []);

    // useEffect(() => {
    //     socket.current.emit("addUser", user._id);
    // }, [user]);

    return (
        <div className="Home">
            {/* <Maps /> */}
            <MapsApp />
            <Navbar />
        </div>
    );
};
export default Home;
