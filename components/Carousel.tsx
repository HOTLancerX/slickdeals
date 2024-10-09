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
                  className="transition-opacity duration-500 h-full pr-2"
                  style={{ flex: `0 0 ${itemWidth}%` }}
                >
                  <div className='block border p-2 shadow h-full bg-white rounded-md'>
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
                    <div className='flex items-center justify-around border-t pt-1 mt-2'>
                      <div
                        className='text-sm text-gray-400 flex space-x-1 items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" d="M1.36 9.495v7.157h3.03l.153.018c2.813.656 4.677 1.129 5.606 1.422c1.234.389 1.694.484 2.531.54c.626.043 1.337-.198 1.661-.528c.179-.182.313-.556.366-1.136a.68.68 0 0 1 .406-.563c.249-.108.456-.284.629-.54c.16-.234.264-.67.283-1.301a.68.68 0 0 1 .339-.57c.582-.337.87-.717.93-1.163c.066-.493-.094-1.048-.513-1.68a.683.683 0 0 1 .176-.936c.401-.282.621-.674.676-1.23c.088-.886-.477-1.541-1.756-1.672a9.4 9.4 0 0 0-3.394.283a.68.68 0 0 1-.786-.95c.5-1.058.778-1.931.843-2.607c.085-.897-.122-1.547-.606-2.083c-.367-.406-.954-.638-1.174-.59c-.29.062-.479.23-.725.818c-.145.348-.215.644-.335 1.335c-.115.656-.178.952-.309 1.34c-.395 1.176-1.364 2.395-2.665 3.236a12 12 0 0 1-2.937 1.37a.7.7 0 0 1-.2.03zm-.042 8.52c-.323.009-.613-.063-.856-.233c-.31-.217-.456-.559-.459-.953l.003-7.323c-.034-.39.081-.748.353-1.014c.255-.25.588-.368.94-.36h2.185A10.5 10.5 0 0 0 5.99 6.95c1.048-.678 1.82-1.65 2.115-2.526c.101-.302.155-.552.257-1.14c.138-.789.224-1.156.422-1.628c.41-.982.948-1.462 1.69-1.623c.73-.158 1.793.263 2.465 1.007c.745.824 1.074 1.855.952 3.129q-.079.82-.454 1.844a10.5 10.5 0 0 1 2.578-.056c2.007.205 3.134 1.512 2.97 3.164c-.072.712-.33 1.317-.769 1.792c.369.711.516 1.414.424 2.1c-.106.79-.546 1.448-1.278 1.959c-.057.693-.216 1.246-.498 1.66a2.9 2.9 0 0 1-.851.834c-.108.684-.335 1.219-.706 1.595c-.615.626-1.714.999-2.718.931c-.953-.064-1.517-.18-2.847-.6c-.877-.277-2.693-.737-5.43-1.377zm1.701-8.831a.68.68 0 0 1 .68-.682a.68.68 0 0 1 .678.682v7.678a.68.68 0 0 1-.679.681a.68.68 0 0 1-.679-.681z"/></svg>
                        <p>100</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20"><path fill="currentColor" fill-opacity="0.89" fill-rule="evenodd" d="M15.807.939c.396.367.655 1.133.706 1.595c.59.366 1.288 1.104 1.349 2.494c1.053.731 1.853 2.083.854 4.06c.58.54 1.227 2.188.395 3.516c-.969 1.552-3.075 1.66-5.174 1.383c.56 1.565.77 3.009-.116 4.488C12.94 19.787 11.724 20 11.308 20c-1.138 0-1.918-.979-2.234-2.283c-.115-.364-.246-1.224-.297-1.45q-.398-2.16-2.67-3.453a11.4 11.4 0 0 0-2.123-.946h-2.34c-.521 0-1.144-.527-1.144-1.165V3.067q.111-1.083 1.202-1.082h3.11Q6.857 1.52 8.89.99C10.2.637 10.487.52 11.403.268c2.053-.532 3.478-.24 4.404.67m-2.382.424c-.819 0-1.856.252-2.316.399c-.162.051-.446.135-.745.221l-.3.087l-.288.082l-.56.158s-1.41.378-4.173 1.02q-.154.018-.166.022v7.38q2.267.873 3.53 2.118c1.264 1.244 1.615 2.368 1.822 3.807c.118.723.309 1.306.597 1.705a.65.65 0 0 0 .342.251c.147.047.35.05.783-.184c.433-.236.99-.853 1.095-1.772c.07-.893-.17-1.667-.492-2.481a16 16 0 0 0-.357-.822c-.218-.413.11-1.099.786-.95c.906.255 3.154.6 4.422 0q1.106-.64.547-2.066a1.7 1.7 0 0 0-.495-.553c-.17-.102-.502-.544-.103-1.045c.396-.635.975-1.928-.49-2.734a.66.66 0 0 1-.34-.57c-.02-.274.024-1.29-.73-1.744c-.18-.097-.397-.177-.52-.41c-.078-.154-.103-.528-.103-.528c-.103-.632-.245-1.222-1.746-1.391M3.519 3.348H1.861v7.157h1.658z"/></svg>
                      </div>
                      <div
                        className='text-sm text-gray-400 flex space-x-1 items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.127L3 21l4.873-1c1.236.639 2.64 1 4.127 1"/></svg>
                        <p>100</p>
                      </div>
                      <div
                        className='text-sm text-gray-400 flex space-x-1 items-center'
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.5 3.5L3.5 9l6.5 3l7-5l-5 7l3 6.5z"/></svg>
                      </div>
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
                    <div
                      className='text-sm text-gray-400 flex space-x-1 items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z" />
                      </svg>
                      <p>100</p>
                    </div>
                    <div
                      className='text-sm text-gray-400 flex space-x-1 items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6 14h12v-2H6zm0-3h12V9H6zm0-3h12V6H6zM4 18q-.825 0-1.412-.587T2 16V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v18l-4-4z" />
                      </svg>
                      <p>100</p>
                    </div>
                    <div
                      className='text-sm text-gray-400 flex space-x-1 items-center'
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 12l-6.4-7v3.5C10.4 8.5 4 10.6 4 19c0-1.167 1.92-3.5 9.6-3.5V19z" />
                      </svg>
                    </div>
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