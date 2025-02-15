import React from "react";
import { Line, Bar } from "react-chartjs-2"; // Import both Line and Bar charts
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js"; // Import necessary modules from chart.js
import "../styles/Monitoring.css";

// Register the components for both Line and Bar charts
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Monitoring = () => {
  // Data for the charts
  const trafficData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Traffic Flow",
        data: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70, 90, 100],
        fill: false,
        borderColor: "#4e56d1",
        tension: 0.1,
        pointBackgroundColor: "#4e56d1",
      },
    ],
  };

  const populationDensityData = {
    labels: ["Population Density", "Others"],
    datasets: [
      {
        label: "Population Density",
        data: [1200000, 8800000], // 1.2M for population density
        backgroundColor: ["#4e56d1", "#e4e8f2"],
        borderColor: "#4e56d1",
        borderWidth: 1,
      },
    ],
  };

  const airQualityData = {
    labels: ["Good", "Moderate", "Poor"],
    datasets: [
      {
        label: "Air Quality",
        data: [85, 10, 5], // Good, Moderate, Poor air quality breakdown
        backgroundColor: ["#4e56d1", "#f6b93b", "#e74c3c"],
        borderColor: "#4e56d1",
        borderWidth: 1,
      },
    ],
  };

  const energyConsumptionData = {
    labels: ["Energy Consumption"],
    datasets: [
      {
        label: "Energy Consumption",
        data: [75], // Percentage of energy consumed
        backgroundColor: "#4e56d1",
        borderColor: "#4e56d1",
        borderWidth: 1,
      },
    ],
  };

  // Options for charts
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "City Monitoring Stats",
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ": " + tooltipItem.raw + "%";
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Percentage / Count",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <section className="monitoring-section">
      <div className="monitoring-header">
        <h2>Real-Time Monitoring</h2>
        <p>Stay updated with the latest real-time data to monitor your city's key performance indicators. View statistics, performance metrics, and more.</p>
      </div>

      <div className="monitoring-dashboard">
        {/* Population Density Section */}
        <div className="monitoring-card">
          <h3>Population Density</h3>
          <div className="monitoring-stat">
            <h4>1.2M</h4>
            <p>People per square km</p>
          </div>
          <div className="monitoring-chart">
            <Bar data={populationDensityData} options={chartOptions} /> {/* Bar chart for population density */}
          </div>
        </div>

        {/* Traffic Flow Section */}
        <div className="monitoring-card">
          <h3>Traffic Flow</h3>
          <div className="monitoring-stat">
            <h4>35%</h4>
            <p>Efficiency of Traffic Flow</p>
          </div>
          <div className="monitoring-chart">
            <Line data={trafficData} options={chartOptions} /> {/* Line chart for traffic flow */}
          </div>
        </div>

        {/* Air Quality Section */}
        <div className="monitoring-card">
          <h3>Air Quality</h3>
          <div className="monitoring-stat">
            <h4>Good</h4>
            <p>Air Quality Index (AQI)</p>
          </div>
          <div className="monitoring-chart">
            <Bar data={airQualityData} options={chartOptions} /> {/* Bar chart for air quality */}
          </div>
        </div>

        {/* Energy Consumption Section */}
        <div className="monitoring-card">
          <h3>Energy Consumption</h3>
          <div className="monitoring-stat">
            <h4>75%</h4>
            <p>Energy Consumption Percentage</p>
          </div>
          <div className="monitoring-chart">
            <Bar data={energyConsumptionData} options={chartOptions} /> {/* Bar chart for energy consumption */}
          </div>
        </div>
      </div>

      <div className="monitoring-cta">
        <button className="cta-button">View Full Reports</button>
      </div>
    </section>
  );
};

export default Monitoring;
