const express = require("express");
const cors = require("cors");
const studentRoutes = require("./routes/students");
const enrollmentsRoutes = require("./routes/enrollments");
const studentAssessmentRoutes = require("./routes/course");
const studentResultRoutes = require("./routes/studentResult");
const assessmentRoutes = require("./routes/assessment");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/students", studentRoutes);
app.use("/enrollments", enrollmentsRoutes);
app.use("/courses", studentAssessmentRoutes);
app.use("/studentResult", studentResultRoutes);
app.use("/assessment", assessmentRoutes);

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});

app.get("/", (req, res) => {
  res.send("Server Working");
});
