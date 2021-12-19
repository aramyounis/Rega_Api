const { sign } = require("jsonwebtoken");

const createToken = (username, status) => {
  return new Promise((resolve, reject) => {
    const option = {
      expiresIn: "1d",
      issuer: "rega.com",
      audience: username,
    };
    const secret = process.env.TOKEN_SECRET;

    sign(payload, secret, option, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};

const verifyToken = (req, res, next) => {
  if (!req.headers["authorization"]) {
    res.status(400);
    res.send("not authorized");
  }

  const token = req.headers["authorization"].split(" ")[1];
  console.log(req.headers["authorization"].split(" ")[1]);
  verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    if (err) {
      res.status(400);
      res.send("not authorized");
    }
    req.payload = payload;
    console.log(payload);
    next();
  });
};

module.exports = {
  createToken,
  verifyToken,
};
