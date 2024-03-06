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
          `http://localhost:8080/studentResult/${state.studentID}/assessments`
        );
        setResults(response.data);
      } catch (error) {
        console.log(error.message);
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
            <table className="leading-normal shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                    Completed
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                    Mark
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold uppercase tracking-wider">
                    Performance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {results.map((result, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border-b border-gray-200 bg-white text-sm text-center">
                      {result.assessment_title}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 bg-white text-sm text-center">
                      {result.completed === 1 ? "Completed" : "Not Completed"}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 bg-white text-sm text-center">
                      {result.mark}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 bg-white text-sm">
                      <div className="flex justify-center items-center ">
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
