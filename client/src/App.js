import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Circle from "./components/Circle/Circle";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/map" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/circle" element={<Circle />} />
            </Routes>
        </div>
    );
}

export default App;
