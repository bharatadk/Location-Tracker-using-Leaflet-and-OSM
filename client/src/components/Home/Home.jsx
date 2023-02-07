import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";
import MapsApp from "../Maps/MapsApp";
const serverUrl = "http://localhost:3000";

const Home = () => {
    return (
        <div className="Home">
            <MapsApp />
            <Navbar />
        </div>
    );
};
export default Home;
