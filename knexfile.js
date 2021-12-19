// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: "postgres",
      password: "1081995",
      database: "rega_db",
    },

    migrations: {
      directory: __dirname + "/src/db/migrations",
    },
    seeds: {
      directory: __dirname + "/src/db/seeds",
    },
  },
};
