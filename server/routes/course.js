const express = require("express");
const { getCourses } = require("../queries/course");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await getCourses();
    res.json(courses);
  } catch (err) {
    console.error("Error fetching Assessment:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
