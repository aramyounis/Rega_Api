const { Router } = require("express");

const authRoute = Router();

const auth_controller = require("../../controllers/auth_controller");

authRoute.post("/login", auth_controller.login);
authRoute.post("/register", auth_controller.register);

module.exports = authRoute;
