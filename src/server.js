import express from "express";
import viewEngine from "./configs/viewEngine";
import dotenv from "dotenv";
dotenv.config();
const app = express();

let port = process.env.PORT || 3001;
viewEngine(app);
app.get("/welcome", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log("Running in port", port);
});
