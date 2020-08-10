const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const DB = require('./db/db');
const { clearDB } = require('./db/db');

io.origins('*:*')


let messages = DB.load();



// When the socket connect
io.on('connection', (socket) => {

    // Emit some message only to the user who connect
    socket.emit('previousMessages', messages);

    // When sendMessage event is called add to messages the data and emit to everyone connected the new message
    socket.on("sendMessage", data => {
        if (data.author && data.message) {
            messages.push(data);
            DB.saveMessage(data);
            socket.broadcast.emit("receivedMessage", data);
        }
    })
});

io.listen(5000);