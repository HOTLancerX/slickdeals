"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';

interface CarouselItem {
  img: string;
  link: string;
  title: string;
  featured: string;
  sele: string;
  price: string;
}

interface CarouselProps {
  items: CarouselItem[];
  title: string;
  img: string;
  link: string;
  left: number;
  desktops: number;
  tablets: number;
  mobile: number;
  slider: number;
  limit: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, title, img, link, left, desktops, tablets, slider, limit, mobile }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(desktops);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(handleNext, 30000); // Change every 9 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Update the number of items to show based on the screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) setItemsToShow(mobile); // Mobile
      else if (window.innerWidth < 768) setItemsToShow(tablets); // Small tablets
      else setItemsToShow(desktops); // Desktops
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [desktops, tablets, mobile]);

  const displayedItems = items
    .slice(startIndex, startIndex + itemsToShow)
    .concat(items.slice(0, Math.max(0, startIndex + itemsToShow - items.length)));

  const itemWidth = 100 / itemsToShow;

  return (
    <>
      <div className={`flex items-stretch ${left === 1 ? 'flex-row-reverse' : ''} my-3`}>
        <div className="w-full relative group">
          <div className='flex items-center justify-between pb-2'>
            <h1 className='text-md font-bold'>
              {title}
            </h1>
            <div className='flex items-center space-x-2'>
              <Link
                href="/"
                className='text-xs'
              >
                See all
              </Link>
              {slider === 1 && (
                <>
                  <button
                    onClick={handlePrevious}
                    className="border rounded-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={handleNext}
                    className="border rounded-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
          {slider === 1 && (
            <div ref={containerRef} className="flex overflow-hidden transition-transform duration-500">
              {displayedItems.slice(0, limit).map((item, index) => (
                <div
                  key={index}
                  className="transition-opacity duration-500 pr-2"
                  style={{ flex: `0 0 ${itemWidth}%` }}
                >
                  <Link href={item.link} className='p-2 block border shadow bg-white rounded-md'>
                    <div className='flex items-center justify-center relative h-44 md:h-60'>
                      <Image
                        src={item.img}
                        width={600}
                        height={600}
                        alt={item.title}
                        className="w-min h-full object-cover"
                      />
                      <p className='bg-main/50 text-[8px] md:rotate-0 -rotate-90 absolute md:right-0 -right-6 top-1 md:top-0 md:text-xs px-2 py-0.5 inline-flex rounded text-white'>
                        50% off
                      </p>
                    </div>
                    <div className="mt-1 flex flex-col items-start space-y-1">
                      <h3 className="text-md line-clamp-3">
                        {item.title}
                      </h3>
                      <div className='flex items-center space-x-2 my-2'>
                        <strong className='text-md'>$500</strong>                      
                        <del className='text-red-500'>$1000</del>
                      </div>
                      <p>
                        Amazon
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
          {slider === 2 && (
            <div className={`grid grid-cols-1 md:grid-cols-${desktops} gap-3`}>
              {items.slice(0, limit).map((item, index) => (
                <Link key={index} href={item.link} className="flex flex-row md:flex-col border bg-white p-1 rounded-md">
                  <div className='w-1/3 md:w-full flex items-center justify-center relative h-28 md:h-60'>
                    <Image
                      src={item.img}
                      width={600}
                      height={600}
                      alt={item.title}
                      className="w-min h-min max-h-full object-cover"
                    />
                    <p className='bg-main/50 text-[8px] md:rotate-0 -rotate-90 absolute md:right-0 -right-3 top-4 md:top-0 md:text-xs px-2 py-0.5 inline-flex rounded text-white'>
                      50% off
                    </p>
                  </div>
                  <div className="w-2/3 md:w-full md:mt-1 pl-2 md:pl-0 flex flex-col items-start space-y-1">
                    <h3 className="text-md leading-tight md:line-clamp-3 line-clamp-2">{item.title}</h3>
                    <div className='flex items-center space-x-2 my-2'>
                      <strong className='text-md'>$500</strong>                      
                      <del className='text-red-500'>$1000</del>
                    </div>
                    <p>
                      Amazon
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
        {img &&
        <Link
          href={link}
          className='hidden md:block md:w-80'
        >
          <Image
            src={img}
            width={250}
            height={300}
            alt={title}
            className='w-full h-full object-cover'
          />
        </Link>
        }
      </div>
    </>
  );
};

export default Carousel;