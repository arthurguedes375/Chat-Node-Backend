const knex = require('./connect');

const message = {
    async load(callback = function (results, err = null) { }) {
        let results;
        try {
            results = await knex('message');
            callback(results);
        } catch (err) {
            callback(results, err);
        }
    },

    new(message) {
        try {
            knex('message').insert({ author: message.author, message: message.message }).catch((err) => log.error(err));
            return { status: true };
        } catch (err) {
            return { status: false, err };
        }
    }
};


module.exports = message;