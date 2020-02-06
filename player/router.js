const express = require("express");
const { Router } = express;
const Player = require("./model");
const Team = require("../team/model");
const router = new Router();

router.get("/player", (req, res, next) => {
  Player.findAll()
    .then(players => {
      res.json(players);
    })
    .catch(next);
});

router.post("/player", (req, res, next) => {
  Player.create(req.body)
    .then(player => res.json(player))
    .catch(next);
});

router.get("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] })
    .then(player => {
      if (!player) {
        res.status(404).end();
      } else {
        res.json(player);
      }
    })
    .catch(next);
});

router.put("/player/:id", (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] })
    .then(player => {
      if (player) {
        player.update(req.body).then(player => res.json(player));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

module.exports = router;
