import React from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link to create links to individual report details
import './Reports.css';

const ReportList = () => {
  // Sample data for the reports
  const reports = [
    { id: 1, title: 'Sales Report' },
    { id: 2, title: 'Inventory Report' },
    { id: 3, title: 'Customer Feedback Report' }
  ];

  return (
    <div className="report-list">
      <h1>Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            {/* Link to the specific report detail page */}
            <Link to={`/reports/details/${report.id}`}>{report.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
