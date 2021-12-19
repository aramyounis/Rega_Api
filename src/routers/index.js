const { Router } = require("express");

const router = Router();
const authRoute = require("./auth");
router.use("/", authRoute);
module.exports = router;
