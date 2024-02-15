import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar";
import Piechart from "../components/pieChart";
import HomeButton from "../components/homeButton";
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
    <div className="">
      <Navbar />
      <div className="m-[10px]">
        <HomeButton />
      </div>
      <div className="w-[100vw] flex justify-center items-center">
        ASSSESSMENT REPORT
      </div>
      <div className="w-[100vw] flex justify-center items-center mt-[20px] flex-col">
        {" "}
        <p>Student Id: {state.studentID}</p>
        {results.length > 0 && (
          <div className="mb-[1vh] mt-[1vh]">
            <p>
              Student Name: {results[0].firstName} {results[0].lastName}
            </p>
          </div>
        )}
        <div>
          {results.length > 0 ? (
            <table className="border-[2px] border-black ">
              <thead className="border-[2px] border-black ">
                <tr className="border-[2px] border-black ">
                  <th className="border-[2px] border-black ">Title</th>
                  <th className="border-[2px] border-black ">Completed</th>
                  <th className="border-[2px] border-black ">Mark</th>
                </tr>
              </thead>
              <tbody className="">
                {results.map((result, index) => (
                  <tr key={index} className="border-[2px] border-black ">
                    <td className="border-[2px] border-black text-center p-[1vw]">
                      {result.assessment_title}
                    </td>
                    <td className="border-[2px] border-black text-center">
                      {result.completed === 1 ? "True" : "False"}
                    </td>
                    <td className="border-[2px] border-black text-center p-[1vw]">
                      {result.mark}
                    </td>
                    <td className="border-[2px] border-black ">
                      <div className="w-[10vw] ">
                        <Piechart
                          marks={result.mark}
                          title={result.assessment_title}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Student did not sign up for any courses!</p>
          )}
        </div>
      </div>
      <div className="mb-[100px]"></div>
    </div>
  );
};

export default StudentReport;
