import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full bg-white py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between border-b">
      <div className="flex items-center mb-4 md:mb-0">
        <img src="/assets/logo.jpeg" alt="Veritas Logo" className="h-20 mr-4" />
        <div>
          <h1 className="text-xl font-bold text-black">VERITAS INTERNATIONAL</h1>
          <p className="text-sm text-black">(PVT) LTD</p>
        </div>
      </div>
      <nav className="flex flex-wrap justify-center">
        <Link to="/" className="mx-2 md:mx-4 text-black hover:text-green-700 font-medium">Home</Link>
        <Link to="/about" className="mx-2 md:mx-4 text-black hover:text-green-700 font-medium">WhyUs</Link>
        <Link to="/academics" className="mx-2 md:mx-4 text-black hover:text-green-700 font-medium">Programs</Link>
        <Link to="#" className="mx-2 md:mx-4 text-black hover:text-green-700 font-medium">Subsidiaries</Link>
        <Link to="/campus" className="mx-2 md:mx-4 text-black hover:text-green-700 font-medium">Campus Life</Link>
        <Link to="/contact" className="mx-2 md:mx-4 text-black hover:text-green-700 font-medium">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;