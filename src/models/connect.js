const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        database: 'whatsup',
        user: 'root',
        password: ''
    },
});



module.exports = knex;