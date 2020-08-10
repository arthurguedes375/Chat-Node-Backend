const knex = require('./connect');

const message = {
    load(callback) {

        let results = knex('message').then((messages) => {
            callback(messages);
        });
    },

    new(message) {
        knex('message').insert({ author: message.author, message: message.message }).catch((err) => log.error(err));
        return;
    }
};


module.exports = message;