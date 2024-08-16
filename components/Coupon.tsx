"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface CouponItem {
  type: "sele" | "coupon";
  img: string;
  name: string;
  title: string;
  verified: number;
  note: string;
  link?: string;
  code?: string;
}

interface CouponProps {
  items: CouponItem[];
}

const Coupon: React.FC<CouponProps> = ({ items }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<CouponItem | null>(null);
  const [copyMessage, setCopyMessage] = useState("");

  const handleButtonClick = (item: CouponItem) => {
    setSelectedCoupon(item);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedCoupon(null);
    setCopyMessage("");
  };

  const handleCopyCode = () => {
    if (selectedCoupon && selectedCoupon.code) {
      navigator.clipboard.writeText(selectedCoupon.code);
      setCopyMessage("Code copied to clipboard!");
      setTimeout(() => setCopyMessage(""), 2000); // Clear message after 2 seconds
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        {items.map((item, index) => (
          <div
            key={index}
            className="border flex items-center justify-between w-full p-2 bg-white mb-2"
          >
            <div className="md:w-40 w-20 text-center">
              <h3 className="font-bold text-sm md:text-base">{item.name}</h3>
              <p className="bg-secondary/20 rounded-md inline-flex px-2 text-xs font-light">{item.type}</p>
            </div>
            <div className="w-full">
              <h1 onClick={() => handleButtonClick(item)} className="font-bold text-xs md:text-lg">{item.title}</h1>
              <div className="flex items-center space-x-2 text-xs">
                <span
                  className={`${
                    item.verified ? "text-green-600" : "text-red-600"
                  } font-semibold`}
                >
                  {item.verified ? "Verified" : "Not Verified"}
                </span>
                <span className="text-gray-500">{item.note}</span>
              </div>
            </div>
            <div className="md:w-1/4 w-8">
            <button
              className="md:px-4 py-2 bg-secondary block w-full text-white rounded-lg"
              onClick={() => handleButtonClick(item)}
            >
              <svg className="md:hidden" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                <path fill="currentColor" d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.55.55 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.55.55 0 0 1 0-.771" />
              </svg>
              <span className="hidden md:block text-nowrap whitespace-nowrap">
                {item.type === "sele" ? "Get Offer" : "Get Coupon Code"}
              </span>
            </button>
            </div>
          </div>
        ))}
      </div>

      {showPopup && selectedCoupon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            <Image
              src={selectedCoupon.img}
              width={300}
              height={300}
              alt={selectedCoupon.name}
              className="h-20 w-min mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold text-center mb-2">{selectedCoupon.title}</h2>

            {selectedCoupon.type === "sele" && selectedCoupon.link && (
              <Link
                href={selectedCoupon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-center"
              >
                Visit Store
              </Link>
            )}

            {selectedCoupon.type === "coupon" && (
              <div className="flex items-center justify-center mt-4">
                <span className="px-4 py-2 border text-md font-mono">
                  {selectedCoupon.code}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2 bg-secondary border text-white"
                >
                  Copy Code
                </button>
              </div>
            )}
            {copyMessage && (
              <p className="text-main flex justify-center mx-auto mt-2">{copyMessage}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
