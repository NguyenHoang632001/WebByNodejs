import express from "express";
import viewEngine from "./configs/viewEngine";
const app = express();
const port = 3000;
viewEngine(app);
app.get("/welcome", (req, res) => {
  res.render("index.ejs");
});
app.listen(port, () => {
  console.log("Running in port 3000");
});
