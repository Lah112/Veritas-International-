import React from 'react';
import { Heart, Shield, Star, RefreshCw } from 'lucide-react';
import ValueCard from './ValueCard';

// Define a type for each value item
type Value = {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
};

const CompanyValues = () => {
  // Use the typed array so TS knows iconPosition is only 'left' | 'right'
  const values: Value[] = [
    {
      title: 'Honesty',
      description: 'We maintain transparency and integrity in all our operations, including academic and accreditation practices.',
      icon: <Heart className="h-8 w-8 text-white" />,
      iconPosition: 'right',
    },
    {
      title: 'Dependability',
      description: 'Students and partners can always rely on us to deliver consistent, high quality educational experiences.',
      icon: <Shield className="h-8 w-8 text-white" />,
      iconPosition: 'left',
    },
    {
      title: 'Client Satisfaction',
      description: 'We prioritize student success and satisfaction, ensuring every student achieves their potential.',
      icon: <Star className="h-8 w-8 text-white" />,
      iconPosition: 'right',
    },
    {
      title: 'Ongoing Improvement',
      description: 'We continuously evolve to meet changing educational needs and global academic trends.',
      icon: <RefreshCw className="h-8 w-8 text-white" />,
      iconPosition: 'left',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-serif font-bold text-emerald-800 mb-8">Company Values</h2>
      <div className="space-y-6">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            title={value.title}
            description={value.description}
            icon={value.icon}
            iconPosition={value.iconPosition}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyValues;
