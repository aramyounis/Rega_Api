const knex = require("../db/knex");

const recordUser = async (username, email, password) => {
  return knex("users").insert([{ username, email, password }]);
};

const getUser = async (userID) => {
  return await knex.select().from("users").where("id", userID).first();
};

const recordLocationUser = (userID) => {};

const getUserLocation = (userID) => {};

module.exports = {
  recordUser,
  getUser,
  recordLocationUser,
  getUserLocation,
};
