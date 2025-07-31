import React from 'react';

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconPosition: 'left' | 'right';
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description, icon, iconPosition }) => {
  return (
    <div className="flex border border-emerald-500 rounded overflow-hidden">
      {iconPosition === 'left' && (
        <div className="bg-emerald-500 w-1/4 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-2">{icon}</div>
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      )}
      <div className={`${iconPosition === 'left' ? 'w-3/4' : 'w-3/4'} p-6 flex items-center`}>
        <p className="text-gray-800 leading-relaxed">{description}</p>
      </div>
      {iconPosition === 'right' && (
        <div className="bg-emerald-500 w-1/4 flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-2">{icon}</div>
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      )}
    </div>
  );
};

export default ValueCard;