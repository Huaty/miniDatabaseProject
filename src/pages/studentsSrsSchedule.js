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
          `http://localhost:8080/studentResult/${state.studentID}/srsSchedule`
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
        Student Next Review Date Report
      </div>
      <div className="w-[100vw] flex justify-center items-center mt-[20px] flex-col pb-[20px]">
        {" "}
        <p>Student Id: {state.studentID}</p>
      </div>
      {results.length > 0 ? (
        <div className="flex justify-center items-center ">
          {" "}
          <table className=" leading-normal">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Lesson title
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Current Level
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Completed
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Next Review Date
                </th>
              </tr>
            </thead>
            <tbody>
              {results.map((value, key) => (
                <tr
                  key={key}
                  className="border-b border-gray-200  hover:bg-black hover:text-white"
                >
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          {value.lesson_title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap text-center">
                      {value.currentLevel}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {value.completed == 0 ? "Not Completed" : "Completed"}
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {value.nextReviewDate == null
                        ? "No Date"
                        : value.nextReviewDate}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        "Nothing"
      )}

      <div className="mb-[100px]"></div>
    </div>
  );
};

export default StudentReport;
