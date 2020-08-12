const knex = require('../db/connect');

const message = {
    async load() {
        let results;
        try {
            results = await knex('message');
            return { results };
        } catch (err) {
            return { results, err };
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