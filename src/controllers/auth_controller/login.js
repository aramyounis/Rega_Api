const auth_service = require("../../services/auth_service");

const login = (req, res) => {
  res.send(auth_service.login());
};

module.exports = login;
