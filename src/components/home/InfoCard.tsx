import React, { ReactNode } from 'react';

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  plainCard?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, plainCard = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
      {!plainCard && icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
};

export default InfoCard;