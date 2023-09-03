const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;


const { TokenExpiredError } = jwt;

const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ message: "Unauthorized! Access Token was expired!" });
  }

  return res.sendStatus(401).send({ message: "Unauthorized!" });
}

const verifyToken = async (req, res, next) => {
  let authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).send({ message: "No token provided!" });
  }

  const token = authHeader.substring(7); // Remove "Bearer " prefix

  try {
    const decoded = await jwt.verify(token, config.secret);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return catchError(err, res);
  }
};


const isAdmin = (req, res, next) => {
  User.findById(req.userId)
    .exec()
    .then(user => {
      if (!user) {
        return res.status(500).send({ message: "User not found!" });
      }

      Role.find({ _id: { $in: user.roles } })
        .exec()
        .then(roles => {
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
              next();
              return;
            }
          }

          res.status(403).send({ message: "Require Admin Role!" });
        })
        .catch(err => {
          res.status(500).send({ message: err });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

const isModerator = (req, res, next) => {
  User.findById(req.userId)
    .exec()
    .then(user => {
      if (!user) {
        return res.status(500).send({ message: "User not found!" });
      }

      Role.find({ _id: { $in: user.roles } })
        .exec()
        .then(roles => {
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "moderator") {
              next();
              return;
            }
          }

          res.status(403).send({ message: "Require Moderator Role!" });
        })
        .catch(err => {
          res.status(500).send({ message: err });
        });
    })
    .catch(err => {
      res.status(500).send({ message: err });
    });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};

module.exports = authJwt;
