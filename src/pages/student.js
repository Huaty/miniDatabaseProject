import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

import HomeButton from "../components/homeButton";

import SubmitFromAssessment from "../components/studentResult";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get("http://localhost:8080/students");
        setStudents(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="m-[10px]">
        <HomeButton />
      </div>

      {isLoading && <p>Loading students...</p>}
      {error && <p>Error: {error}</p>}
      <div className="w-[100vw] flex justify-center items-center mt-[50px] flex-col">
        <div className="text-[30px] mb-[10px]">Student List</div>{" "}
        {!isLoading && !error && (
          <table className="border-[2px]">
            <thead className="border-[2px]">
              <tr className="border-[2px] ">
                <th className="border-[2px] ">ID</th>
                <th className="border-[2px] ">First Name</th>
                <th className="border-[2px] ">Last Name</th>
                <th className="border-[2px] ">Email</th>
                <th className="border-[2px] ">Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-2">
                  <td className="border-2">{student.id}</td>
                  <td className="border-2">{student.firstName}</td>
                  <td className="border-2">{student.lastName}</td>
                  <td className="border-2">{student.email}</td>
                  <td className="border-2">
                    {new Date(student.dateofBirth).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="mt-[30px]">
        <SubmitFromAssessment />
      </div>
    </div>
  );
}

export default StudentList;
