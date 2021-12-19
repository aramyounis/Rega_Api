exports.up = async function (knex) {
  //bo drustkrdni uuid idyake jyawaz  bo har userek

  return await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
  });
};

exports.down = async function (knex) {
  return await knex.schema.dropTable("users");
};
