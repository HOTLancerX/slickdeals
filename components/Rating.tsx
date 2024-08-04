"use client";
import React, { useState } from 'react';

interface RatingProps {
  title: string;
  items: string[];
}

const Rating: React.FC<RatingProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedRating, setSelectedRating] = useState<string | null>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRating(event.target.value);
  };

  return (
    <div className="bg-white my-4">
      <div
        className="p-2 flex justify-between items-center cursor-pointer border-b"
        onClick={toggleAccordion}
      >
        <h2 className="text-md font-semibold">{title}</h2>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-2">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`rating-${index}`}
                name="rating"
                value={item}
                checked={selectedRating === item}
                onChange={handleRadioChange}
                className="form-radio text-blue-600"
              />
              <label htmlFor={`rating-${index}`} className="text-gray-700">
                {item}
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rating;
