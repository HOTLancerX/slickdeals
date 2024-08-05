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
        {title &&
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
          }
          {slider === 1 && (
            <div ref={containerRef} className="flex overflow-hidden transition-transform duration-500">
              {displayedItems.slice(0, limit).map((item, index) => (
                <div
                  key={index}
                  className="transition-opacity duration-500 pr-2"
                  style={{ flex: `0 0 ${itemWidth}%` }}
                >
                  <div className='block border p-2 shadow bg-white rounded-md'>
                    <div className='pb-2 mb-2 border-b hidden md:flex items-center'>
                      <Image
                        src="/user/1.jpg"
                        width={30}
                        height={30}
                        alt=''
                        className='mr-1 rounded-full object-cover'
                      />
                      <div className='text-xs'>
                        <h1>
                          <span className='font-light mr-1'>found by</span>
                          JQDeals
                        </h1>
                        <p>
                        43 minutes ago
                        </p>
                      </div>
                    </div>
                    <Link href={item.link}>
                      <div className='flex items-center justify-center relative h-20 md:h-48'>
                        <Image
                          src={item.img}
                          width={600}
                          height={600}
                          alt={item.title}
                          className="w-min h-full object-cover"
                        />
                      </div>
                      <div className="mt-1 flex flex-col items-start space-y-1">
                        <h3 className="text-sm md:text-md md:line-clamp-3 line-clamp-2">
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
                    <div className='flex items-center justify-between border-t pt-1 mt-2'>
                      <Link
                        href="/"
                        className='text-sm text-gray-400 flex space-x-1 items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z" />
                        </svg>
                        <p>100</p>
                      </Link>
                      <Link
                        href="/"
                        className='text-sm text-gray-400 flex space-x-1 items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zM4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v18l-4-4z" />
                        </svg>
                        <p>100</p>
                      </Link>
                      <Link
                        href="/"
                        className='text-sm text-gray-400 flex space-x-1 items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                          <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {slider === 2 && (
            <div className={`grid grid-cols-1 md:grid-cols-${desktops} gap-3`}>
              {items.slice(0, limit).map((item, index) => (
                <div key={index} className='border bg-white p-1 rounded-md'>
                  <div className='pb-2 border-b hidden md:flex items-center'>
                    <Image
                      src="/user/1.jpg"
                      width={30}
                      height={30}
                      alt=''
                      className='mr-1 rounded-full object-cover'
                    />
                    <div className='text-xs'>
                      <h1>
                        <span className='font-light mr-1'>found by</span>
                        JQDeals
                      </h1>
                      <p>
                      43 minutes ago
                      </p>
                    </div>
                  </div>
                  <Link href={item.link} className="flex flex-row md:flex-col items-center">
                    <div className='w-1/3 md:w-full flex items-center justify-center relative h-24 md:h-48'>
                      <Image
                        src={item.img}
                        width={600}
                        height={600}
                        alt={item.title}
                        className="w-min h-min max-h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 md:w-full md:mt-1 pl-2 md:pl-0 flex flex-col items-start space-y-1">
                      <h3 className="text-sm leading-tight md:line-clamp-3 line-clamp-2">{item.title}</h3>
                      <div className='flex items-center space-x-2 my-2'>
                        <strong className='text-md'>$500</strong>                      
                        <del className='text-red-500'>$1000</del>
                      </div>
                      <p>
                        Amazon
                      </p>
                      <div className='flex w-full items-center justify-between border-t pt-1 mt-2'>
                    <Link
                      href="/"
                      className='text-sm text-gray-400 flex space-x-1 items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z" />
                      </svg>
                      <p>100</p>
                    </Link>
                    <Link
                      href="/"
                      className='text-sm text-gray-400 flex space-x-1 items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zM4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v18l-4-4z" />
                      </svg>
                      <p>100</p>
                    </Link>
                    <Link
                      href="/"
                      className='text-sm text-gray-400 flex space-x-1 items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z" />
                      </svg>
                    </Link>
                  </div>
                    </div>
                    
                  </Link>
                  
                </div>
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