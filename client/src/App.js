import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
import Circle from "./components/Circle/Circle";
import APPMain from "./components/Login/APPMain";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/map" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/circle" element={<Circle />} />
                <Route path="/github" element={<APPMain />} />
            </Routes>
        </div>
    );
}

export default App;
