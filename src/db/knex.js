const config_knex = require("../../knexfile.js")["development"];
const knex = require("knex");
const connection = knex(config_knex);

module.exports = connection;
