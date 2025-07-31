import React from 'react';
import InfoCard from '../home/InfoCard';

const TargetMarket = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold text-[#0a5045]">Target Market</h2>
      <p className="text-xl max-w-3xl">We serve diverse sectors within the academic and educational industries, providing specialized solutions for each student segment</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <InfoCard title="School Leavers" description="" plainCard={true} />
        <InfoCard title="Undergraduates" description="" plainCard={true} />
        <InfoCard title="Professionals" description="" plainCard={true} />
      </div>
    </section>
  );
};

export default TargetMarket;