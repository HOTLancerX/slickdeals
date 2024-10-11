"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface MenuItem {
  title: string;
  link: string;
}

interface MenusProps {
  items: MenuItem[];
}

const Tab: React.FC<MenusProps> = ({ items }) => {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === 'right' ? 100 : -100,
        behavior: 'smooth',
      });
    }
  };

  const updateButtonVisibility = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowPrev(scrollLeft > 0); // Show "Prev" if scrolled right
      setShowNext(scrollLeft + clientWidth < scrollWidth); // Show "Next" if content is cut off
    }
  };

  useEffect(() => {
    updateButtonVisibility(); // Check button visibility on mount

    // Update button visibility on scroll
    const handleScroll = () => updateButtonVisibility();
    containerRef.current?.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container my-4">
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
      <div className='relative w-full mt-4'>
      {/* Previous Button */}
      {showPrev && (
        <button
          className='absolute left-0 top-0 bottom-0 z-10 bg-white text-gray-500 hover:text-gray-700 px-2'
          onClick={() => scroll('left')}
        >
          Prev
        </button>
      )}

      {/* Tab items container */}
      <div
        ref={containerRef}
        className='flex flex-row gap-3 overflow-x-auto no-ber w-full'
      >
        {items.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={`flex-none px-5 py-2 rounded-full hover:bg-secondary ${
              pathname === item.link ? 'bg-main text-white' : 'bg-gray-100 text-black hover:text-white dark:border-dark'
            }`}
          >
            <span className='leading-none whitespace-nowrap font-bold text-xs md:text-sm'>
              {item.title}
            </span>
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {showNext && (
        <button
          className='absolute right-0 top-0 bottom-0 z-10 bg-white text-gray-500 hover:text-gray-700 px-2'
          onClick={() => scroll('right')}
        >
          Next
        </button>
      )}
    </div>
    </div>
  );
};

export default Tab;