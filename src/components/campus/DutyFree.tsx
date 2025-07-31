import React from 'react';

interface DutyFreeProps {
  onNext: () => void;
}

const DutyFree: React.FC<DutyFreeProps> = ({ onNext }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto p-6 md:p-9 gap-9">
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src="/assets/logo.jpeg" 
              alt="Veritas Logo" 
              className="w-16 h-16 object-contain" 
            />
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              VERITAS INTERNATIONAL<br />(PVT) LTD
            </h1>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Veritas International (PVT) Ltd
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Premium duty-free wine store located in the prestigious Colombo Port.<br /><br />
            Experience our exclusive duty-free wine store at Colombo Port, offering a curated selection of premium wines and spirits from around the world. Perfect for travelers seeking quality beverages at competitive prices.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="w-20 h-20">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="#67c3a5" />
                <g transform="translate(5,-5)">
                  <path d="M50,50 L50,10 A40,40 0 0,1 90,50 Z" fill="#235d4e" />
                </g>
              </svg>
            </div>
            
            <button 
              onClick={onNext} 
              className="px-6 py-3 bg-teal-700 text-white font-bold rounded-md hover:bg-teal-800 transition-colors"
            >
              Next &gt;&gt;&gt;
            </button>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md h-96 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/assets/wineShelf.jpeg" 
              alt="Wine Shelf" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-0 right-0 w-16 h-16 bg-teal-800"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-teal-800"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DutyFree;