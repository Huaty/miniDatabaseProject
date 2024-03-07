import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/student";
import Enrollment from "./pages/enrollment";
import Courses from "./pages/courses";
import StudentReport from "./pages/studentReport";
import StudentCourse from "./pages/studentsSrsSchedule";
import Assessment from "./pages/assessment";
import DataEntry from "./pages/dataEntry";
import DataEntry2 from "./pages/dataEntry2";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/studentAssessment" element={<StudentReport />} />
      <Route path="/studentSchedule" element={<StudentCourse />} />
      <Route path="/dataEntry" element={<DataEntry />} />
      <Route path="/dataEntry2" element={<DataEntry2 />} />
    </Routes>
  );
}

export default App;
