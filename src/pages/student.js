import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import HomeButton from "../components/homeButton";
import StudentButton from "../components/studentButton";

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

  const handleNavigation = {
    assessment: {
      navigate: "/studentAssessment",
      label: "Student Assessment",
    },
    schedule: {
      navigate: "/studentSchedule",
      label: "Student Schedule",
    },
  };

  return (
    <div>
      <Navbar />

      {isLoading && <p>Loading students...</p>}
      {error && <p>Error: {error}</p>}
      <div className="w-[100vw] flex justify-center items-center mt-[20px] flex-col">
        <div className="text-[30px] mb-[10px]">Student List</div>{" "}
        {!isLoading && !error && (
          <table className=" leading-normal shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  ID
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  First Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Last Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Date of Birth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-gray-100">
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {student.id}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {student.firstName}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {student.lastName}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {student.email}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {new Date(student.dateofBirth).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <div className="flex items-start m-[10px]">
          <HomeButton />
        </div>
      </div>
      <div className="flex flex-row  justify-center items-center space-x-[10vw] mb-[10vh]">
        {Object.values(handleNavigation).map((value, key) => (
          <div key={key}>
            {" "}
            <StudentButton route={value.navigate} label={value.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
