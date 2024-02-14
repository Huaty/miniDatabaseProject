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

  console.log(results);

  return (
    <div>
      <Navbar />
      <div className="w-[100vw] flex justify-center items-center">
        ASSSESSMENT REPORT
      </div>
      <h1>Student Report</h1>
      <p>Student Id: {state.studentID}</p>
      {results.map((result, index) => (
        <div key={index}>
          <div> {result.assessment_title}</div>
          <div> {result.completed == 1 ? "True" : "False"}</div>
          <div> {result.firstName}</div>
          <div> {result.lastName}</div>
          <div> {result.mark}</div>
        </div>
      ))}
    </div>
  );
};

export default StudentReport;
