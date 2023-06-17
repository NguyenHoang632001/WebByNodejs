import express from "express";
import viewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import dotenv from "dotenv";
dotenv.config();
const app = express();

let port = process.env.PORT || 3001;
viewEngine(app);
initWebRoute(app);

app.listen(port, () => {
  console.log("Running in port", port);
});
