// src/components/Dashboard/Overview.js
import React from 'react';

function Overview() {
  return (
    <div className="overview">
      <h2>Overview of Activities</h2>
      <div className="activity-summary">
        <div>Current Orders: 10</div>
        <div>Installations in Progress: 5</div>
        <div>Completed Projects: 20</div>
        <div>Pending Tasks: 3</div>
      </div>
    </div>
  );
}

export default Overview;
