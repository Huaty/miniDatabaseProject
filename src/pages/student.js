import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {isLoading && <p>Loading students...</p>}
      {error && <p>Error: {error}</p>}

      {!isLoading && !error && (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.firstName} {student.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentList;
