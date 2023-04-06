const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization || req.header.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    res.status(401);
    throw new Error("User is not authorized/token is missing");
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.error(err.name + ': ' + err.message); // log the error and its reason
      res.status(401);
      throw new Error("User is not authorized");
    }
    console.log(decoded);
    req.user = decoded.user;
    next();
  });
});

module.exports = validateToken;
