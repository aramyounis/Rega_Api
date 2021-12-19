const models = require("../../models");

const register = async (reqBody, res) => {
  const { username, email, password } = reqBody;
  await models
    .recordUser(username, email, password)
    .then((user) => {
      console.log("success");
      res.send("success");
    })
    .catch((err) => {
      console.log(err);
      res.send("something wrong");
    });
};

module.exports = register;
