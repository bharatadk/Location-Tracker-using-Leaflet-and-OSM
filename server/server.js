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

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

io.on("connection", (socket) => {
    // add userId and socketId from user
    socket.on("addUser", (userId) => {
        console.log("bbbbbbbbbb", userId);
        addUser(userId, socket.id);
    });

    // send and post message
    socket.on("sendMessage", ({ senderId, otherUserId, text }) => {
        const user = getUserById(otherUserId);
        console.log(senderId, otherUserId, text);
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
