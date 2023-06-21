import React from 'react';
import Navbar from './Navbar';
const Homepage = () => {
  return (
    <div>
    <Navbar />
      <div className='banner_content'>
        <div className='container'>
          <div className='banner_text'>
            <h3>Steganograpghy</h3>
            <h1>Steganographic Secure File Storage System</h1>
            <p>
              Data hiding 
            </p>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Homepage;
