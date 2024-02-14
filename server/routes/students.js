const express = require("express");
const { getStudents } = require("../queries/student");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const students = await getStudents();
    res.json(students);
  } catch (err) {
    console.error("Error fetching students:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
