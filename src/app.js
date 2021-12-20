const express = require("express");
const authRoute = require("./routers/auth");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const http = require("http");
const { Server } = require("socket.io");

//socket
const server = http.createServer(app);
const io = new Server(server);
io.on("connection", (socket) => {
  console.log("a user connected");
});

require("dotenv").config({
  path: "../.dev.env",
});

//api
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.use("/api", authRoute);

server.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
