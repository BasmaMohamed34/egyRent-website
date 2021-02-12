const config = require("../config/config");
const jwt = require('jsonwebtoken')

module.exports = {
  
  verifyUserToken: (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) return res.status(401).send("Access Denied / Unauthorized request");

    try {
      token = token.split(' ')[1]

      if (token === 'null' || !token) return res.status(401).send('Unauthorized request');

      let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
      if (!verifiedUser) return res.status(401).send('Unauthorized request')

      req.user = verifiedUser;
      next();

    } catch (error) {
      res.status(400).send("Invalid Token");
    }
  }
}
