const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const message = require('./models/message');

io.origins('*:*')


message.load(sockets);

function sockets(messages = []) {
    // When the socket connect
    io.on('connection', (socket) => {

        // Emit some message only to the user who connect
        socket.emit('previousMessages', messages);

        // When sendMessage event is called add to messages the data and emit to everyone connected the new message
        socket.on("sendMessage", data => {
            if (data.author && data.message) {
                messages.push(data);
                message.new(data);
                socket.broadcast.emit("receivedMessage", data);
            }
        })
    });
}

io.listen(5000);