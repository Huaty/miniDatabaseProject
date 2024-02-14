const express = require("express");
const { getEnrollments } = require("../queries/enrollment");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const enrollment = await getEnrollments();
    res.json(enrollment);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
