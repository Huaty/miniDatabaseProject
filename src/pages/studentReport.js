import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";

const StudentReport = () => {
  const { state } = useLocation();
  const [results, setResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchResult = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `http://localhost:8080/studentResult/${state.studentID}`
        );
        setResults(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchResult();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-[100vw] flex justify-center items-center">
        ASSSESSMENT REPORT
      </div>
      <div className="w-[100vw] flex justify-center items-center mt-[20px] flex-col">
        {" "}
        <p>Student Id: {state.studentID}</p>
        {results.length > 0 && (
          <div>
            <p>
              Student Name: {results[0].firstName} {results[0].lastName}
            </p>
          </div>
        )}
        <div>
          {results.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Completed</th>
                  <th>Mark</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index}>
                    <td>{result.assessment_title}</td>
                    <td>{result.completed === 1 ? "True" : "False"}</td>
                    <td>{result.mark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Student did not sign up for any courses!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentReport;
