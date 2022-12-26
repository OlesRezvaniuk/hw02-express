const express = require("express");

const router = express.Router();

router.post("/users/register", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
