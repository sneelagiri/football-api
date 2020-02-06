const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
const cityRouter = require("./city/router");
app.use(express.json());
app.use(teamRouter);
app.use(playerRouter);
app.use(cityRouter);
app.listen(port, () => {
  console.log("Started port on: ", port);
});
