import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/student";
import Enrollment from "./pages/enrollment";
import Courses from "./pages/courses";
import StudentReport from "./pages/studentReport";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/studentReport" element={<StudentReport />} />
    </Routes>
  );
}

export default App;
