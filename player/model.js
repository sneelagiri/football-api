const Sequelize = require("sequelize");
const db = require("../db");
const Team = require("../team/model");
const City = require("../city/model");
const Player = db.define(
  "player",
  {
    name: {
      type: Sequelize.STRING,
      field: "player_name"
    },
    number: {
      type: Sequelize.INTEGER,
      field: "player_number"
    }
  },
  { tableName: "football_players" }
);
Player.belongsTo(Team);
Player.belongsTo(City);
module.exports = Player;
