const express = require("express");
const { Router } = express;
const Player = require("./model");
const Team = require("../team/model");
const City = require("../city/model");
const router = new Router();

router.get("/city", (req, res, next) => {
  City.findAll()
    .then(cities => {
      res.json(cities);
    })
    .catch(next);
});

router.post("/city", (req, res, next) => {
  City.create(req.body)
    .then(city => res.json(city))
    .catch(next);
});

router.get("/city/:id", (req, res, next) => {
  City.findByPk(req.params.id)
    .then(city => {
      if (!city) {
        res.status(404).end();
      } else {
        res.json(city);
      }
    })
    .catch(next);
});

router.put("/city/:id", (req, res, next) => {
  City.findByPk(req.params.id)
    .then(city => {
      if (city) {
        city.update(req.body).then(city => res.json(city));
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.delete("/city/:id", (req, res, next) => {
  City.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(numDeleted => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

router.delete("/city", (req, res, next) => {
  City.destroy({ where: {}, truncate: true })
    .then(() => {
      res.status(204).end();
    })
    .catch(next);
});

module.exports = router;
