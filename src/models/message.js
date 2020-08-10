const knex = require('./connect');

const message = {
    async load(callback = function () { }) {

        const results = await knex('message');
        callback(messages);
    },

    new(message) {
        knex('message').insert({ author: message.author, message: message.message }).catch((err) => log.error(err));
        return;
    }
};


module.exports = message;