const express = require("express");
const { getStudents } = require("../queries/student");
const { createStudent } = require("../queries/insertStudent");

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

router.post("/createStudent", async (req, res) => {
  const { firstName, lastName, email, dateOfBirth } = req.body;
  try {
    const newStudent = await createStudent(
      firstName,
      lastName,
      email,
      dateOfBirth
    );
    // Assuming your createStudent function returns the newly created student data or its ID
    res
      .status(201)
      .json({ message: "Student created successfully", student: newStudent });
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).send("An error occurred on the server.");
  }
});

module.exports = router;
