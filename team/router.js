const express = require("express");
const { Router } = express;
const Team = require("./model");

const router = new Router();

router.get("/", (req, res) => res.send("Welcome to the homepage!"));

router.get("/team", (req, res, next) => {
  Team.findAll()
    .then(teams => {
      res.json(teams);
    })
    .catch(next);
});

module.exports = router;
