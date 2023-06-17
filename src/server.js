import express from "express";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import dotenv from "dotenv";
import connectDB from "./config/connectDB";
dotenv.config();
const app = express();

let port = process.env.PORT || 3001;
viewEngine(app);
initWebRoute(app);
connectDB();
app.listen(port, () => {
  console.log("Running in port", port);
});
