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

router.post("/team", (req, res, next) => {
  Team.create(req.body)
    .then(team => res.json(team))
    .catch(next);
});

router.get("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (!team) {
        res.status(404).end();
      } else {
        res.json(team);
      }
    })
    .catch(next);
});

router.put("/team/:id", (req, res, next) => {
  Team.findByPk(req.params.id)
    .then(team => {
      if (team) {
        team.update(req.body).then(team => res.json(team));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});
module.exports = router;
