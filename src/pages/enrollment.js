import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

import HomeButton from "../components/homeButton";

function EnrollmenttList() {
  const [enrollments, setEnrollments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrollments = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:8080/enrollments");
        setEnrollments(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEnrollments();
  }, []);

  return (
    <div>
      <Navbar />
      {isLoading && <p>Loading students...</p>}
      {error && <p>Error: {error}</p>}
      <div className="w-[100vw] flex justify-center items-center mt-[50px]">
        {" "}
        {!isLoading && !error && (
          <table className="border-[2px]">
            <thead className="border-[2px]">
              <tr className="border-[2px] ">
                <th className="border-[2px] ">First Name</th>
                <th className="border-[2px] ">Last Name</th>
                <th className="border-[2px] ">Email</th>
                <th className="border-[2px] ">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="border-2">
                  <td className="border-2">{enrollment.id}</td>
                  <td className="border-2">{enrollment.student_id}</td>
                  <td className="border-2">{enrollment.course_id}</td>
                  <td className="border-2">
                    {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                  </td>
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

export default EnrollmenttList;
