"use client";
import React from 'react';

interface ViewsProps {
  view: number;
}

const Views: React.FC<ViewsProps> = ({ view }) => {
    const formatNumber = (num: number) => {
      if (num >= 1e12) return (num / 1e12).toFixed(1) + 'T'; // Trillion
      if (num >= 1e9) return (num / 1e9).toFixed(1) + 'B';   // Billion
      if (num >= 1e6) return (num / 1e6).toFixed(1) + 'M';   // Million
      if (num >= 1e3) return (num / 1e3).toFixed(1) + 'K';   // Thousand
      return num.toString();                                 // Less than 1000
    };
  
    // Function to determine the icon color based on the value
    const getIconColor = (num: number) => {
      if (num >= 1e12) return 'text-red-500';  // Red for trillions
      if (num >= 1e9) return 'text-yellow-500'; // Yellow for billions
      if (num >= 1e6) return 'text-green-500';  // Green for millions
      if (num >= 1e3) return 'text-blue-500';   // Blue for thousands
      return 'text-gray-600';                   // Default color
    };

  return (
    <div className="flex items-center space-x-2">
      <svg className={`${getIconColor(view)}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" d="M9 4.46A9.8 9.8 0 0 1 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20s-7.028-2.5-8.725-4.704C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296A14.5 14.5 0 0 1 5 6.821"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g></svg>
      <span>{formatNumber(view)}</span>
      <span>Views</span>
    </div>
  );
};

export default Views;