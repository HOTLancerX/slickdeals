"use client";
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
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border p-4 rounded-lg shadow-lg flex flex-col justify-between"
          >
            <img src={item.img} alt={item.name} className="h-32 w-full object-cover" />
            <div className="mt-4">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-600">{item.type}</p>
              <p className="mt-2">{item.title}</p>
              <div className="flex justify-between items-center mt-2">
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
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => handleButtonClick(item)}
            >
              {item.type === "sele" ? "Get Offer" : "Get Coupon Code"}
            </button>
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
            <img
              src={selectedCoupon.img}
              alt={selectedCoupon.name}
              className="h-40 w-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedCoupon.title}</h2>

            {selectedCoupon.type === "sele" && selectedCoupon.link && (
              <a
                href={selectedCoupon.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-center"
              >
                Visit Store
              </a>
            )}

            {selectedCoupon.type === "coupon" && (
              <div className="flex items-center mt-4">
                <span className="px-4 py-2 border rounded-lg text-lg font-mono">
                  {selectedCoupon.code}
                </span>
                <button
                  onClick={handleCopyCode}
                  className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg"
                >
                  Copy Code
                </button>
              </div>
            )}
            {copyMessage && (
              <p className="text-green-600 mt-2">{copyMessage}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Coupon;
