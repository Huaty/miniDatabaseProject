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
  console.log(enrollments);

  return (
    <div>
      <Navbar />
      <div className="m-[10px]">
        <HomeButton />
      </div>
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
                <th className="border-[2px] ">Course Title</th>
                <th className="border-[2px] ">Enrollment Date</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="border-2">
                  <td className="border-2">{enrollment.firstName}</td>
                  <td className="border-2">{enrollment.lastName}</td>
                  <td className="border-2">{enrollment.courseTitle}</td>
                  <td className="border-2">
                    {new Date(enrollment.enrollmentDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default EnrollmenttList;
