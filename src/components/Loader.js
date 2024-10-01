// src/components/Loader.js

import React from 'react';
import "./Loader.css"

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Full height
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional: semi-transparent background
  };

  const spinnerStyle = {
    border: '8px solid #f3f3f3', // Light grey
    borderTop: '8px solid #3498db', // Blue
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
  };

  const textStyle = {
    marginTop: '10px',
    fontSize: '18px',
    color: '#3498db', // Blue
  };


  return (
    <div className='loader-wrapper'>
      <div class="loader"></div>
    </div>
  );
};

export default Loader;
