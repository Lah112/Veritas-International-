import React from 'react';

const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div className="flex flex-col md:flex-row h-[600px]">
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">VERITAS<br />INTERNATIONAL</h2>
          <p className="text-green-700 text-lg mb-8 max-w-lg">Shaping Tomorrow's Leaders Today through academic excellence, innovation, and real-world relevance</p>
          <div className="mb-8">
            <button className="bg-green-800 hover:bg-green-900 text-white py-3 px-8 rounded-md font-medium">Apply Now</button>
          </div>
          <a href="/about" className="text-green-700 font-medium hover:underline">See More &gt;&gt;&gt;</a>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
          <div className="relative w-full h-full max-w-lg">
            <img 
              src="/assets/image.jpg"
              alt="Veritas International Campus" 
              className="w-full h-full object-cover rounded-xl shadow-xl border-4 border-white"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-800 rounded-lg z-0"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-green-600 rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;