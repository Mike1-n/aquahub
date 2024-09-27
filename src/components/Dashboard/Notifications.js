// src/components/Dashboard/Notifications.js
import React from 'react';

function Notifications() {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        <li>New service booking received.</li>
        <li>Customer inquiry pending response.</li>
        <li>System update available.</li>
      </ul>
    </div>
  );
}

export default Notifications;
