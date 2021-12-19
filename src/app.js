const express = require("express");
const authRoute = require("./routers/auth");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config({
  path: "../.dev.env",
});
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

app.use("/api", authRoute);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${3000}`);
});
