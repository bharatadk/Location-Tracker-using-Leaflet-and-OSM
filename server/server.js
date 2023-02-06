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

const addUser = (userObj, socketId) => {
    console.log(users);

    !users.some((user) => user.userObj.username === userObj.username) &&
        users.push({ userObj, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const updateUser = (userObj) => {
    users.forEach((user) => {
        console.log("updaign", user);
    });
};

io.on("connection", (socket) => {
    // add userId and socketId from user
    socket.on("addUser", (userObj) => {
        console.log("conected", userObj);
        addUser(userObj, socket.id);
        io.emit("getUsers", users);
    });

    // send and post message
    socket.on("sendMessage", (senderObj) => {
        updateUser(senderObj);
        io.to(user.socketId).emit("getMessage", {
            senderId,
            text,
        });
    });

    //when someone disconnects
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});

app.get("/", (req, res) => {
    res.json("api running");
});

server.listen(PORT, console.log(`server running in node on port ${PORT}`));
