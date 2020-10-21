const express = require("express");
const Category = require("../models/Category");

const createRouter = () => {
  const router = express.Router();
  router.get("/", async (req, res) => {
    try {
      res.send(await Category.find());
    } catch(e) {res.status(500).send(e)}
  });
  return router;
};

module.exports = createRouter;