const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = precess.env. PORT || 3003;
const index = require("./index.js")

const app = express();
app.use(index);

const server = http.createServer(app);
app.use(index);

const io = socketIo(server);

const getApiAndEmit = "TODO";