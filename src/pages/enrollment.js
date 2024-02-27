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
          <table className=" leading-normal shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Course Title
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Enrollment Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {enrollments.map((enrollment) => (
                <tr key={enrollment.id} className="hover:bg-gray-100">
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {enrollment.firstName}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {enrollment.lastName}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {enrollment.courseTitle}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
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
