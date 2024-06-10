import { cn } from '@/lib/utils';
import React from 'react';

function StatisticCard({ title, value, icon, classBackgroundIcon }) {
  return (
    <div className="border rounded-md px-4 py-6 flex items-center gap-8 shadow">
      <div
        className={cn(
          'w-16 h-16 grid place-content-center rounded-full',
          classBackgroundIcon
        )}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-gray-400 mb-4">{title}</h2>
        <span className="font-bold text-2xl">{value}</span>
      </div>
    </div>
  );
}

export default StatisticCard;
