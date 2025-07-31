import React from 'react';
import { GraduationCap, Target, MapPin } from 'lucide-react';
import InfoCard from '../home/InfoCard';

const CompanyHistory = () => {
  return (
    <section className="space-y-6">
      <h2 className="text-4xl font-bold text-[#0a5045]">Company History</h2>
      <p className="text-xl max-w-3xl">Our journey began with a vision to revolutionize higher education through innovation and excellence.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <InfoCard 
          icon={<GraduationCap size={28} className="text-black" />} 
          title="Founded" 
          description="Veritas was established in 2024" 
        />
        <InfoCard 
          icon={<Target size={28} className="text-red-500" />} 
          title="Focus" 
          description="Empower Learning, Inspire Growth" 
        />
        <InfoCard 
          icon={<MapPin size={28} className="text-red-500" />} 
          title="Headquarters" 
          description="Located in Panahura" 
        />
      </div>
    </section>
  );
};

export default CompanyHistory;