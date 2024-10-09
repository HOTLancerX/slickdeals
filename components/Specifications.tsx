"use client";
import React, { useState } from 'react';

interface SpecificationItem {
  title: string;
  content: React.ReactNode;
}

interface SpecificationsProps {
  items: SpecificationItem[];
}

const Specifications: React.FC<SpecificationsProps> = ({ items }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`${isExpanded ? '' : 'overflow-hidden h-72'}`}>
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-main text-base p-2 font-bold uppercase leading-tight max-w-full">
              {item.title}
            </h3>
            <div className='text-base'>
              {item.content}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={toggleReadMore}
        className="hover:text-main p-2 cursor-pointer uppercase font-bold outline-none text-base"
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </>
  );
};

export default Specifications;