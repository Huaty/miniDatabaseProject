const express = require("express");
const { getAssessments } = require("../queries/studentAssessment");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const assessments = await getAssessments();
    res.json(assessments);
  } catch (err) {
    console.error("Error fetching Assessment:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;

router.get("/", async (req, res) => {
  try {
    const assessments = await getAssessments();
    res.json(assessments);
  } catch (err) {
    console.error("Error fetching Assessment:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
