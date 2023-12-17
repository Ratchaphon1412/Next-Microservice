import React, { ReactNode } from 'react';

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-md">
      <div className="flex h-11.5 w-11.5 items-center justify-start rounded-full">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-xl font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-semibold">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-green-500'
          } ${levelDown && 'text-red-500'} `}
        >
          {rate}
          {(levelUp) && (
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#22C55E" className="w-3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11 17V5.414l3.293 3.293a.999.999 0 101.414-1.414l-5-5a.999.999 0 00-1.414 0l-5 5a.997.997 0 000 1.414.999.999 0 001.414 0L9 5.414V17a1 1 0 102 0z" fill="#22C55E"></path></g></svg>          )}
          {(levelDown) && (
            <svg fill="#EF4444" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.293,16.707a1,1,0,0,1,1.414-1.414L11,19.586V2a1,1,0,0,1,2,0V19.586l4.293-4.293a1,1,0,0,1,1.414,1.414l-6,6a1,1,0,0,1-1.414,0Z"></path></g></svg>
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
