import Image from "next/image";
import React from "react";
type CouponItem = {
  img: string;
  sub: string;
  title: string;
};
interface CouponsProps {
  title: string;
  items: CouponItem[];
}

const Coupons: React.FC<CouponsProps> = ({ title, items }) => {
  return (
    <div className="mb-2 w-full">
      {title &&
        <h2 className="text-sm p-2 mt-2 bg-white">{title}</h2>
      }
      <div className="flex flex-col items-center w-full">
        {items.map((item, index) => (
          <div key={index} className="border flex items-center bg-white mb-2 w-full">
            <div className="w-1/3 md:w-1/5">
              <Image width={100} height={50} src={item.img} alt={item.title} className="object-cover p-1 mx-auto" />
              <p className=" bg-[#b7527c] text-white uppercase text-xs text-center">
              Coupon
              </p>
            </div>
            <div className="pl-2 text-xs w-2/3 md:w-4/5">
              <p className="text-red-500">{item.sub}</p>
              <h1 className="line-clamp-2">
                Take Up to 50% Off Women Boots, Loafers, and More
              </h1>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupons;