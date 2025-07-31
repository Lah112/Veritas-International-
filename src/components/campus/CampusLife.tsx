import React from 'react';

interface CampusLifeProps {
  onNext: () => void;
  onPrev: () => void;
}

const CampusLife: React.FC<CampusLifeProps> = ({ onNext, onPrev }) => {
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
            <h5 className="text-xl md:text-2xl font-bold text-gray-800">
              VERITAS INTERNATIONAL<br />(PVT) LTD
            </h5>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Campus Life At Veritas
          </h2>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Live the Veritas Life
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Veritas International Campus is more than just a place to learn – it's a community that values collaboration, creativity, and personal growth.<br /><br />
            Our students are encouraged to engage in extracurricular activities that complement their studies, develop leadership skills, and network with industry professionals.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onPrev}
              className="px-6 py-3 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-700 transition-colors"
            >
              &lt;&lt;&lt; Previous
            </button>
            
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
              src="/assets/campusLife.jpeg" 
              alt="Campus Life" 
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

export default CampusLife;