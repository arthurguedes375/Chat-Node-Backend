const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '..', '..', '.env') });

const environment = process.env.ENVIRONMENT || 'development';
const knexFile = require(path.resolve(__dirname, '..', '..', 'knexfile.js'))[environment];
const knex = require('knex')(knexFile);


module.exports = knex;