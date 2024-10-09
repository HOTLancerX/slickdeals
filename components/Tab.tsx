"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface TabItem {
  name: string;
  info: React.ReactNode;
}

interface TabProps {
  items: TabItem[];
}

const Tab: React.FC<TabProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container">
      <div className="hidden md:block bg-white p-2">
          <Link
            href="/"
          >
            <Image
              src="/12.jpg"
              width={720}
              height={90}
              alt=""
              className="mx-auto"
          />
          </Link>
      </div>
      <div className="md:hidden flex items-center justify-between bg-white p-2">
          <Image
              src="/mp.png"
              width={85}
              height={40}
              alt=""
          />
          <div className="text-center text-xs">
              <h1 className=" text-secondary font-bold">
              Back to School Deals
              </h1>
              <p>
              This August
              </p>
          </div>
          <Link
              href="/"
              className="border p-2 leading-none text-xs"
          >
              Shop Now 
          </Link>
      </div>
      <div className="md:hidden grid grid-cols-4 border-y w-full bg-white">
        {items.map((item, index) => (
          <button
            key={index}
            className={`py-2 border-b-[3px] text-center text-sm cursor-pointer ${
              activeIndex === index
                ? "border-secondary font-bold"
                : "border-white font-normal text-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div>
        {items[activeIndex].info}
      </div>
    </div>
  );
};

export default Tab;
