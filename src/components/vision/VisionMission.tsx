import React from 'react';
import { useNavigate } from 'react-router-dom';
import './VisionMission.css';

const VisionMission = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/about");
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-green-700 text-white flex items-center justify-center clip-left relative p-6">
        <div className="text-center max-w-md">
          <h2 className="text-4xl font-bold mb-6">Vision</h2>
          <p className="text-lg leading-relaxed">
            To become a global center of academic excellence, cultivating innovative minds that drive change and contribute meaningfully to society
          </p>
        </div>
        <div className="absolute bottom-6 left-6 text-white font-semibold">
          <button 
            onClick={handleNextClick} 
            className="hover:underline px-4 py-2 bg-white bg-opacity-20 rounded-md"
          >
            Next &gt;&gt;&gt;
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white text-black flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <h2 className="text-4xl font-bold text-green-900 mb-6">Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide a transformative educational experience that empowers students to realize their full potential, prepares them for professional success, and instills values of integrity, responsibility, and compassion
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;