import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <section className="flex justify-between items-start max-w-1200 mx-auto bg-white rounded-2xl shadow-sm p-9 gap-9">
        <div className="flex-1 flex flex-col justify-between h-full relative">
          <div>
            <div className="flex items-center gap-10 mb-12">
              <img src="/assets/logo.jpeg" alt="Veritas Logo" className="w-20 h-auto" />
              <h3 className="text-xl font-bold text-black">VERITAS INTERNATIONAL<br />(PVT) LTD</h3>
            </div>
            <h2 className="text-6xl text-[#235d4e] font-bold mb-12">Contact Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Join Veritas International Campus today and start shaping your future with knowledge, innovation, and leadership.
            </p>
            <div className="space-y-3">
              <p className="text-lg"><strong>📞</strong> 0777897901 | 0774795371</p>
              <p className="text-lg"><strong>📧</strong> info.veritascampus@gmail.com</p>
            </div>
          </div>
          <div className="ml-auto mt-20">
            <img 
              src="/assets/contactImage.jpeg" 
              alt="Contact" 
              className="w-200 h-auto" 
            />
          </div>
        </div>
        <div className="flex-1 flex justify-end items-end">
          <div className="relative w-100 h-200 rounded-2xl overflow-hidden bg-[#fafafa]">
            <img 
              src="/assets/logo.jpeg" 
              alt="Veritas Logo" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute top-0 right-0 w-14 h-14 bg-[#235d4e] rounded-br-3xl"></div>
            <div className="absolute bottom-0 left-0 w-14 h-14 bg-[#235d4e] rounded-tr-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;