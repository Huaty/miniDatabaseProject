const express = require("express");
// Adjust the path to where your getStudentDetailsWithEnrollment function is defined
const {
  getStudentDetailsWithEnrollment,
  getStudentDetailsWithSchedule,
} = require("../queries/studentsResult");

const router = express.Router();

router.get("/:id/assessments", async (req, res) => {
  try {
    const studentId = req.params.id; // Corrected variable name for consistency
    // Use the getStudentDetailsWithEnrollment function with the student ID
    console.log(studentId);
    const studentDetails = await getStudentDetailsWithEnrollment(studentId);
    if (studentDetails.length === 0) {
      // If no student details are found, send a 404 response
      return res.status(404).send("Student not found");
    }
    console.log(studentDetails);
    // Send back the student details and enrollment information
    res.json(studentDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error occurred");
  }
});

router.get("/:id/srsSchedule", async (req, res) => {
  try {
    const studentId = req.params.id; // Corrected variable name for consistency
    // Use the getStudentDetailsWithEnrollment function with the student ID
    console.log(studentId);
    const studentDetails = await getStudentDetailsWithSchedule(studentId);
    if (studentDetails.length === 0) {
      // If no student details are found, send a 404 response
      return res.status(404).send("Student not found");
    }
    console.log(studentDetails);
    // Send back the student details and enrollment information
    res.json(studentDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error occurred");
  }
});

router.get("/user/:userId/book/:bookId", (req, res) => {
  const { userId, bookId } = req.params;
  res.json({ userId, bookId });
});

module.exports = router;
