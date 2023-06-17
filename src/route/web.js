import express from "express";
const router = express.Router();
const initWebRoute = (app) => {
  router.get("/", (req, res) => {
    res.send("Hi router");
  });
  return app.use("/", router);
};
module.exports = initWebRoute;
