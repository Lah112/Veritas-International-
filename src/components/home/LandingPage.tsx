import React from 'react';

const LandingPage = () => {
  return (
    <div className="w-full min-h-screen bg-white p-4 md:p-8 lg:p-12">
      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d503c] mb-12">Welcome to Veritas International Campus</h1>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-2/3 space-y-8">
            <p className="text-[#0d503c]">
              Veritas International Campus, as a bold and passionate start-up in the field of higher education, we are driven by a singular mission: to shape future-ready individuals through academic excellence, innovation, and real-world relevance.
            </p>
            <p className="text-[#0d503c]">
              Founded with a deep belief in the power of education to unlock human potential, Veritas International Campus is going to offer a range of academic programs designed to equip students with the knowledge, skills, and global perspective they need to thrive in a rapidly evolving world. Even being a start up, our programs are built not only to meet the standards of today's educational landscape but to anticipate the demands of tomorrow's industries.
            </p>
            <p className="text-[#0d503c]">
              As a young and evolving institution, we embrace the agility, creativity, and courage that define start-ups. We are not bound by convention – we are inspired by possibility. Every course, every collaboration, and every initiative at Veritas is crafted with purpose, with a commitment to pushing boundaries and nurturing minds that dare to think differently.
            </p>
            <div className="mt-10">
              <a href="/about" className="text-[#0d503c] text-xl font-medium">See More &gt;&gt;&gt;</a>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="rounded-full overflow-hidden w-64 h-64 lg:w-80 lg:h-80">
              <img 
                src="/assets/graduates.png" 
                alt="Graduates in caps and gowns" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;