import React from 'react';
import { useNavigate } from 'react-router-dom';

const Veritas = () => {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate("/academics");
  };

  return (
    <div className="bg-white text-gray-800 font-serif relative">
      <div className="absolute top-0 right-0 pt-0 pr-1 z-10 flex flex-col items-end gap-4">
        <img src="/assets/graduates.png" alt="Graduates" className="h-60 w-80 object-cover rounded-md" />
        <img src="/assets/books.png" alt="Books" className="h-36 w-60 object-cover rounded-md shadow-md" />
      </div>
      <div className="p-6 border-b flex items-center justify-between">
        <div className="flex items-center">
          <img src="/assets/veritas-logo.png" alt="Veritas Logo" className="h-40 mr-3" />
        </div>
      </div>
      <div className="relative bg-[#145A4E] text-white py-20 px-6 md:px-20">
        <h1 className="text-3xl font-bold">Why Choose Veritas International?</h1>
      </div>
      <div className="py-3 px-8 md:px-20">
        <h2 className="text-3xl text-green-700 font-extrabold mb-2 text-center">Excellence in Every Aspect</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Discover what makes Veritas the preferred choice for ambitious students<br />
          seeking world-class education and transformative experiences.
        </p>
      </div>
      <div className="px-6 md:px-40 space-y-6 pb-16">
        {[
          { title: "Accredited Programs", desc: "Programs recognized globally for quality and impact." },
          { title: "Experienced Faculty", desc: "Learn from professionals with real-world expertise." },
          { title: "Holistic Development", desc: "We focus on academic, professional, and personal growth." },
          { title: "Prime Location", desc: "A vibrant campus in Panadura, close to opportunities." },
          { title: "Future-Focused", desc: "Stay ahead in an evolving educational world." },
        ].map((item, index) => (
          <div
            key={index}
            className={`border-2 ${index % 2 === 0 ? 'border-green-600' : 'border-[#145A4E]'} p-6 rounded-tl-3xl rounded-br-3xl bg-white shadow-sm`}
          >
            <h3 className="text-lg font-bold text-green-800 mb-1">{item.title}</h3>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-sm text-blue-600 text-left px-6 md:px-40 pb-8">
        <button onClick={handleNextClick} className="px-4 py-2 text-gray-600 hover:text-green-800">Next &gt;&gt;</button>
      </div>
    </div>
  );
};

export default Veritas;