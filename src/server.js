const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') });


// Express
const express = require('express');
const app = express();
const routes = require('./routes');

const server = require('http').createServer(app);
const io = require('socket.io')(server);


const message = require('./models/message');

io.origins('*:*')

app.use(routes);



message.load(sockets);

function sockets(messages = [], err) {


    // When the socket connect
    io.on('connection', (socket) => {
        if (!err) {
            // Emit some message only to the user who connect
            socket.emit('previousMessages', messages);

            // When sendMessage event is called add to messages the data and emit to everyone connected this message
            socket.on("sendMessage", data => {
                if (data.author && data.message) {
                    messages.push(data);
                    message.new(data);
                    socket.broadcast.emit("receivedMessage", data);
                }
            })
        } else {
            const messageResponse = { message: "Internal Server Error. You don't need to reload this page, Wait or Try again later" }
            socket.emit("internalServerError", messageResponse);
            socket.broadcast.emit("internalServerError", messageResponse);
        }
    });

}


io.listen(process.env.SOCKET_PORT);
app.listen(process.env.HTTP_PORT);