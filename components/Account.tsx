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