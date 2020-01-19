const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWenSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWenSocket(server);

mongoose.connect('mongodb+srv://eduardo:cunhaedu12@cluster0-95geh.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
});

app.use(cors());
app.use(express.json());
app.use(routes);


server.listen(3333);