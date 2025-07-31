import React from 'react';
import CompanyHistory from '../components/about/CompanyHistory';
import TargetMarket from '../components/about/TargetMarket';
import CompanyValues from '../components/about/CompanyValues';
import Veritas from '../components/about/Veritas';

const AboutPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        <Veritas />
        <CompanyHistory />
        <TargetMarket />
        <CompanyValues />
      </main>
    </div>
  );
};

export default AboutPage;