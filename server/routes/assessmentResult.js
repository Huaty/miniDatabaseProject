const express = require("express");
// Adjust the path to where your getStudentDetailsWithEnrollment function is defined
const {
  getStudentDetailsWithEnrollment,
} = require("../queries/assessmentResult");

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const studentId = req.params.id; // Corrected variable name for consistency
    // Use the getStudentDetailsWithEnrollment function with the student ID
    const studentDetails = await getStudentDetailsWithEnrollment(studentId);
    if (studentDetails.length === 0) {
      // If no student details are found, send a 404 response
      return res.status(404).send("Student not found");
    }
    // Send back the student details and enrollment information
    res.json(studentDetails);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error occurred");
  }
});

module.exports = router;
