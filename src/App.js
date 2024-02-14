import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/student";
import Enrollment from "./pages/enrollment";
import Assessment from "./pages/assessment";
import StudentReport from "./pages/studentReport";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Student />} />
      <Route path="/enrollment" element={<Enrollment />} />
      <Route path="/assessment" element={<Assessment />} />
      <Route path="/studentReport" element={<StudentReport />} />
    </Routes>
  );
}

export default App;
