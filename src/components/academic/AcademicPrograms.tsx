import React from 'react';

const AcademicPrograms = () => {
  const programs = [
    {
      title: "Diploma in HR Management",
      image: <img src="/assets/hr-management.png" alt="HR Management" className="w-full h-56 object-cover" />,
      description: "Master human resource management with expertise in employee relations, and strategic HR planning.",
    },
    {
      title: "BBA in Marketing Management",
      image: <img src="/assets/marketing-management.png" alt="Marketing Management" className="w-full h-56 object-cover" />,
      description: "Drive brand success with creative and data-driven marketing strategies.",
    },
    {
      title: "Diploma in Technology",
      image: <img src="/assets/technology.png" alt="Technology" className="w-full h-56 object-cover" />,
      description: "Creative design program covering branding, digital design, and visual recommendations.",
    },
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="p-6 border-b flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/veritas-logo.png" alt="Veritas Logo" className="h-40 mr-3" />
        </div>
      </div>
      <div className="relative bg-[#145A4E] text-white py-20 px-6 md:px-20">
        <h1 className="font-serif text-3xl font-bold text-center md:text-left">Shape Your Future With Veritas Education</h1>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-3xl font-bold font-serif text-green-700 mb-6 text-center">Academic Programs</h2>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-4xl mx-auto leading-relaxed">
          Veritas International Campus offers a flexible, comprehensive curriculum with undergraduate programs in Business, Marketing, Technology, and more, along with professional diplomas in HR, Business Management, and Marketing. Students also benefit from skill-focused workshops, development programs, and internships to enhance their career prospects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
              {program.image}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-green-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{program.description}</p>
                <div className="mt-auto text-center">
                  <button className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors w-full sm:w-auto">Enroll</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <button className="px-4 py-2 font-serif text-gray-600 hover:text-green-800">Next &gt;&gt;</button>
          <button className="px-4 py-2 font-serif text-gray-600 hover:text-green-800">More Programs &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AcademicPrograms;