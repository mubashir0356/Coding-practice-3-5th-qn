const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const addDay = require("date-fns/addDays");
  const newDate = addDays(new Date(), 100);
  const displayDate = `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
  response.send(displayDate);
});

module.exports = app;

app.listen(3000);
