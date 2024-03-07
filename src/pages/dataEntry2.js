import React, { useState, useEffect } from "react";
import axios from "axios";

const EnrollmentForm = () => {
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await axios.get(
          "http://localhost:8080/students"
        );
        setStudents(studentsResponse.data);
        const coursesResponse = await axios.get(
          "http://localhost:8080/courses/course"
        );
        setCourses(coursesResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsEnrolled(false);
    try {
      const response = await axios.post(
        "http://localhost:8080/enrollments/createEnrollment",
        {
          studentId: selectedStudentId,
          courseId: selectedCourseId,
        }
      );
      console.log(response.data);
      setIsEnrolled(true);
      // Reset form or show success message
    } catch (error) {
      console.error(error);
      setIsEnrolled(false);
      // Handle error, show error message
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto my-10 bg-white p-6 rounded-lg shadow-md"
    >
      {isEnrolled && (
        <div
          className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          Enrollment successful!
        </div>
      )}
      <div>
        <label
          htmlFor="student"
          className="block text-sm font-medium text-gray-700"
        >
          Student
        </label>
        <select
          id="student"
          name="studentId"
          value={selectedStudentId}
          onChange={(e) => setSelectedStudentId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.firstName} {student.lastName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="course"
          className="block text-sm font-medium text-gray-700"
        >
          Course
        </label>
        <select
          id="course"
          name="courseId"
          value={selectedCourseId}
          onChange={(e) => setSelectedCourseId(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.courseName}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Enroll
      </button>
    </form>
  );
};

export default EnrollmentForm;
