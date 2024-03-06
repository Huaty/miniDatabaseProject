const express = require("express");
const router = express.Router();
const { getAssessmentsByMark } = require("../queries/assessment");

router.get("/minMarks", async (req, res) => {
  const { mark } = req.query; // Use req.query to get parameters from query string
  try {
    // Convert mark to a number and validate
    const minMark = parseInt(mark);
    if (isNaN(minMark)) {
      return res.status(400).json({ error: "Invalid mark provided" });
    }

    // Call your function with the validated mark
    const results = await getAssessmentsByMark(minMark);
    res.json(results); // Send back the results
  } catch (error) {
    console.error(error); // Log the error
    res
      .status(500)
      .json({ error: "An error occurred while fetching the data" });
  }
});

module.exports = router;
