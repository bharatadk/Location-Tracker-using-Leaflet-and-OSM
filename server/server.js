const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: "*" } }); //for omit cors error

const PORT = 8080;
app.use(express.json());
app.use(cors());

let users = [];
let markers = [];
let usernames = [];

const addUser = (userObj, socketId) => {
    // console.log(users);

    // !users.some((user) => user.userObj.username === userObj.username) &&
    
    let temp = [];
    users.push({ userObj, socketId });
    const cc = userObj.coordinates.split(",");
    const c1 = parseFloat(cc[0]);
    const c2 = parseFloat(cc[1]);
    temp = [c1, c2];

    markers.push(temp);
    console.log("dfdfdfdf", markers);
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const updateUser = (userObj) => {
    users.forEach((user) => {
        console.log("updaign", user);
    });
};

// io.on("connection", (socket) => {
//     // add userId and socketId from user
//     socket.on("addUser", (userObj) => {
//         console.log("conected", userObj);
//         addUser(userObj, socket.id);
//         io.emit("getUsers", users);
//     });

//     // send and post message
//     socket.on("sendMessage", (senderObj) => {
//         updateUser(senderObj);
//         io.to(user.socketId).emit("getMessage", {
//             senderId,
//             text,
//         });
//     });

//     //when someone disconnects
//     socket.on("disconnect", () => {
//         console.log("a user disconnected!");
//         removeUser(socket.id);
//         io.emit("getUsers", users);
//     });
// });

app.get("/", (req, res) => {
    res.json("api running");
});

app.post("/updateLocation", (req, res) => {
    const { coordinates, username } = req.body;
    // console.log(req.body);
    if (usernames.includes(username)) {
    } else {
        usernames.push(username);

        let temp = [];
        const cc = coordinates.split(",");
        console.log(coordinates);
        const c1 = parseFloat(cc[0]);
        const c2 = parseFloat(cc[1]);
        temp = [c1, c2];
        if (isNaN(c1)) {
        } else {
            markers.push(temp);
        }
    }
    console.log(markers, usernames);
    return res.json({ markers });
});

server.listen(PORT, console.log(`server running in node on port ${PORT}`));
