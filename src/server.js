const express = require("express");

const app = express();
const port = 3000;
app.get("/welcome", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log("Running in port 3000");
});