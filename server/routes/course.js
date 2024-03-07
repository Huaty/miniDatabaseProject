const express = require("express");
const { getCoursesAssessment, getCourses } = require("../queries/course");

const router = express.Router();

router.get("/courseAssessment", async (req, res) => {
  try {
    const courses = await getCoursesAssessment();
    res.json(courses);
  } catch (err) {
    console.error("Error fetching Assessment:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

router.get("/course", async (req, res) => {
  try {
    const courses = await getCourses();
    res.json(courses);
  } catch (err) {
    console.error("Error fetching Assessment:", err);
    res.status(500).send("An error occurred on the server.");
  }
});
module.exports = router;
