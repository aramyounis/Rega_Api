const auth_service = require("../../services/auth_service");

const register = (req, res) => {
  console.log(req.body);
  auth_service.register(req.body, res);
};

module.exports = register;
