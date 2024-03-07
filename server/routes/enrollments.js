const express = require("express");
const { getEnrollments } = require("../queries/enrollment");
const { createEnrollment } = require("../queries/createEnrollment");

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

router.post("/createEnrollment", async (req, res) => {
  const { studentId, courseId } = req.body;

  // Basic validation
  if (!studentId || !courseId) {
    return res.status(400).send("Student ID and Course ID are required.");
  }

  try {
    const enrollment = await createEnrollment(studentId, courseId);
    // If you have access to the newly created enrollment ID, you could include it in the response
    res.status(201).json({
      message: "Enrollment successfully created",
      enrollmentId: enrollment.insertId,
    });
  } catch (err) {
    console.error("Error creating enrollment:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
