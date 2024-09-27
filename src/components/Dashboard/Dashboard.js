import React from 'react';
import './Dashboard.css'; // Make sure this path is correct if you have additional styles

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Overview of Activities Section */}
      <div className="dashboard-section">
        <h3>Overview of Activities</h3>
        <div className="dashboard-content">
          <div className="dashboard-box">
            <h4>Current Orders</h4>
            <p>10</p>
          </div>
          <div className="dashboard-box">
            <h4>Installations in Progress</h4>
            <p>5</p>
          </div>
          <div className="dashboard-box">
            <h4>Completed Projects</h4>
            <p>20</p>
          </div>
          <div className="dashboard-box">
            <h4>Pending Tasks</h4>
            <p>3</p>
          </div>
        </div>
      </div>

      {/* Analytics & Reports Section */}
      <div className="dashboard-section">
        <h3>Analytics & Reports</h3>
        <div className="dashboard-content">
          <div className="dashboard-box">
            <h4>Graph 1</h4>
            {/* Add graph component or placeholder here */}
          </div>
          <div className="dashboard-box">
            <h4>Graph 2</h4>
            {/* Add graph component or placeholder here */}
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="dashboard-section">
        <h3>Notifications</h3>
        <div className="dashboard-content">
          <div className="dashboard-box">
            <h4>New service booking received.</h4>
          </div>
          <div className="dashboard-box">
            <h4>Customer inquiry pending response.</h4>
          </div>
          <div className="dashboard-box">
            <h4>System update available.</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
