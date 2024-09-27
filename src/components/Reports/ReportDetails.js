import React from 'react';
import { useParams } from 'react-router-dom'; // <-- Import useParams here
import './Reports.css';

const ReportDetails = () => {
  const { id } = useParams();

  // Sample detailed data based on ID
  const reportDetails = {
    1: { title: 'Sales Report', content: 'Detailed sales report content here...' },
    2: { title: 'Inventory Report', content: 'Detailed inventory report content here...' },
    3: { title: 'Customer Feedback Report', content: 'Detailed customer feedback report content here...' }
  };

  const report = reportDetails[id] || { title: 'Report Not Found', content: '' };

  return (
    <div className="report-details">
      <h1>{report.title}</h1>
      <p>{report.content}</p>
    </div>
  );
};

export default ReportDetails;
