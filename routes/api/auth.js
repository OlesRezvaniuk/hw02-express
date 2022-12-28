const express = require("express");

const router = express.Router();

router.post("/users/register", async (req, res, next) => {
  try {
    res.json(201).json({ message: "You have successfully registered" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
