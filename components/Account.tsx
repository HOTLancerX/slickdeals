"use client";
import { useState, ReactNode } from 'react';

interface AccountProps {
  title: ReactNode;
  sub: ReactNode;
}

const Account: React.FC<AccountProps> = ({ title, sub }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <div className="relative hidden md:block">
      <div
        className="flex items-center space-x-2 text-white p-2 cursor-pointer"
        onClick={toggleSubMenu}
      >
        {title}
        {isSubMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mt-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414 6.707 10.707a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {isSubMenuOpen && (
        <div className="absolute w-52 z-50 right-0 bg-white">
          {sub}
        </div>
      )}
    </div>
  );
};

export default Account;