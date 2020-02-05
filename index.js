const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const teamRouter = require("./team/router");

app.use(express.json());
app.use(teamRouter);
app.listen(port, () => {
  console.log("Started port on: ", port);
});
