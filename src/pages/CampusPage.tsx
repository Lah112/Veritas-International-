import React, { useRef } from 'react';
import DutyFree from '../components/campus/DutyFree';
import CampusLife from '../components/campus/CampusLife';
import ContactUs from '../components/contact/ContactUs';

const CampusPage = () => {
  const sections = useRef<HTMLDivElement[]>([]);
  
  const scrollToSection = (index: number) => {
    sections.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pdf-viewer-app">
      <div ref={el => el && (sections.current[0] = el)} className="pdf-page">
        <DutyFree onNext={() => scrollToSection(1)} />
      </div>
      <div ref={el => el && (sections.current[1] = el)} className="pdf-page">
        <CampusLife 
          onNext={() => scrollToSection(2)} 
          onPrev={() => scrollToSection(0)} 
        />
      </div>
      <div ref={el => el && (sections.current[2] = el)} className="pdf-page">
        <ContactUs />
      </div>
    </div>
  );
};

export default CampusPage;