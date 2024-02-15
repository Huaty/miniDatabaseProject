import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const MarksPieChart = ({ marks, title }) => {
  return (
    <div>
      <div className="m-[1vw]">
        {" "}
        {/* Adjust layout as needed */}
        <Doughnut
          data={{
            labels: ["Mark", "Remaining"],
            datasets: [
              {
                data: [marks, 100 - marks],
                backgroundColor: ["#FF6384", "#FFFFFF"],
                hoverBackgroundColor: ["#FF406C", "#FFFFFF"],
              },
            ],
            border: 1,
          }}
          options={{
            maintainAspectRatio: false, // Prevent automatic squishing
            plugins: {
              legend: { display: false }, // Omit legend for individual charts
              title: { display: true, text: ` ${title}: ${marks}` }, // Display mark and percentage as title
            },
          }}
        />
      </div>
    </div>
  );
};

export default MarksPieChart;
