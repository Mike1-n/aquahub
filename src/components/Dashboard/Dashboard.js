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
            <p className="dashboard-title">Current Orders</p>
            <h1 className="dashboard-heading">10</h1>
          </div>
          <div className="dashboard-box">
            <p className="dashboard-title">Installations in Progress</p>
            <h1 className="dashboard-heading">5</h1>
          </div>
          <div className="dashboard-box">
            <p className="dashboard-title">Completed Projects</p>
            <h1 className="dashboard-heading">20</h1>
          </div>
          <div className="dashboard-box">
            <p className="dashboard-title">Pending Tasks</p>
            <h1 className="dashboard-heading">3</h1>
          </div>
        </div>
      </div>

      {/* Analytics & Reports Section */}
      <div className="dashboard-section">
        <h3>Analytics & Reports</h3>
        <div className="dashboard-content">
          <div className="dashboard-box">
            <p>Graph 1</p>
            {/* Add graph component or placeholder here */}
          </div>
          <div className="dashboard-box">
            <p>Graph 2</p>
            {/* Add graph component or placeholder here */}
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="dashboard-section">
        <h3>Notifications</h3>
        <div className="dashboard-content">
          <div className="dashboard-box">
            <p>New service booking received.</p>
          </div>
          <div className="dashboard-box">
            <p>Customer inquiry pending response.</p>
          </div>
          <div className="dashboard-box">
            <p>System update available.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
