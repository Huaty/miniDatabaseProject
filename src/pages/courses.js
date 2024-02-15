import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

import HomeButton from "../components/homeButton";

function CoursesList() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssessment = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:8080/courses");
        setCourses(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssessment();
  }, []);
  console.log(courses);
  return (
    <div>
      <Navbar />
      {isLoading && <p>Loading students...</p>}
      {error && <p>Error: {error}</p>}
      <div className="w-[100vw] flex justify-center items-center mt-[50px] flex-col">
        <div>Course List</div>{" "}
        {!isLoading && !error && (
          <table className="border-[2px]">
            <thead className="border-[2px]">
              <tr className="border-[2px] ">
                <th className="border-[2px] ">Courses Title</th>
                <th className="border-[2px] ">Assessment Title</th>
                <th className="border-[2px] ">Content</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr className="border-2">
                  <td className="border-2">{course.courseTitle}</td>
                  <td className="border-2">{course.assessmentTitle}</td>
                  <td className="border-2">{course.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="m-[10px]">
        <HomeButton />
      </div>
    </div>
  );
}

export default CoursesList;
