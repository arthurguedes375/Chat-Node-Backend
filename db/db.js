const EventEmitter = require('events');
const fs = require('fs');
const path = require('path');

const emitter = new EventEmitter();

const dbPath = path.join(__dirname, 'db.json');

function load() {
    let db = fs.readFileSync(dbPath);
    db = JSON.parse(db);
    return db.length > 0 ? db : [];
}


emitter.on('saveMessage', (data) => {

    let messages = load();
    messages.push(data);
    const newDb = JSON.stringify(messages);

    fs.writeFile(dbPath, newDb, (err) => {
        if (err) throw err;
    })

});


function saveMessage(data) {
    emitter.emit("saveMessage", data);
}



module.exports = {
    saveMessage,
    load,

};