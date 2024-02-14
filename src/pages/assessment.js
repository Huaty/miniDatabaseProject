import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";

import HomeButton from "../components/homeButton";

function AssessmentList() {
  const [assessments, setAsessments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAssessment = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "http://localhost:8080/studentAssessments"
        );
        setAsessments(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssessment();
  }, []);
  assessments.map((assessment) => {
    console.log(assessment.assessments_id);
  });

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
                <th className="border-[2px] ">Enrollment Id</th>
                <th className="border-[2px] ">Assessment Id</th>
                <th className="border-[2px] ">Completed</th>
                <th className="border-[2px] ">Mark</th>
              </tr>
            </thead>
            <tbody>
              {assessments.map((assessment) => (
                <tr key={assessment.id} className="border-2">
                  <td className="border-2">{assessment.enrollment_id}</td>
                  <td className="border-2">{assessment.assessments_id}</td>
                  <td className="border-2">
                    {assessment.completed == 1 ? "True" : "False"}
                  </td>
                  <td className="border-2">{assessment.MARK}</td>
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

export default AssessmentList;
