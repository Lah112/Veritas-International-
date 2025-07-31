import React from 'react';
import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import LandingPage from '../components/home/LandingPage';
import VisionMission from '../components/vision/VisionMission';

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <Hero />
      <LandingPage />
       <VisionMission />
    </div>
  );
};

export default HomePage;