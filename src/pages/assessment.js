import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import HomeButton from "../components/homeButton";
function App() {
  const [mark, setMark] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAssessmentData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://localhost:8080/assessment/minMarks?mark=${mark}`
      );
      setResults(response.data);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAssessmentData();
  };

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-6">
          <label
            htmlFor="mark"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Minimum Mark:
          </label>
          <input
            type="number"
            id="mark"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            min="0"
            max="100"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {results && (
        <div className="flex justify-center items-center flex-col pt-[20px]">
          <h2 className="text-xl font-semibold mb-4">Results:</h2>
          <table className="leading-normal shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Student Name
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Assessment Title
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Mark
                </th>
                <th className="px-5 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold uppercase tracking-wider">
                  Completed
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {results.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {item.firstName} {item.lastName}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {item.assessmentTitle}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {item.MARK}
                  </td>
                  <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                    {item.completed ? "Yes" : "No"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="m-[10px]">
        <HomeButton />
      </div>
    </div>
  );
}

export default App;
