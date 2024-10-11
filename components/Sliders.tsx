"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type Slide = {
  id: number;
  image: string;
  link: string;
};

type SliderProps = {
  slides: Slide[];
};

const Sliders: React.FC<SliderProps> = ({ slides }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Auto-play functionality
    const intervalId = setInterval(() => {
      nextImage();
    }, 10000); // Change the interval time (in milliseconds) as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImage]); // Reset the interval whenever the currentImage changes

  return (
    <div className="flex flex-col group items-start p-2">
      {slides.length > 1 && (
        <div className="w-full bg-gray-200 relative h-72 md:h-80 flex items-center justify-center">
          <Image
            width={600}
            height={600}
            src={slides[currentImage].image  || "/default.jpg"}
            alt={`Slide ${currentImage + 1}`}
            className="h-full w-min object-cover"
          />
          <div className="absolute group-hover:flex hidden justify-between w-full items-center gap-2">
            <div
              onClick={prevImage}
              className='absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/50 text-black py-2 rounded-r-md'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"></path></svg>
            </div>
            <div
              onClick={nextImage}
              className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/50 text-black py-2 rounded-l-md'
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l2 2.333M9 19l6-7l-1.5-1.75"></path></svg>
            </div>
          </div>
        </div>
      )}
      {slides.length <= 1 && (
        <div className="w-full bg-white p-4 relative h-72 md:h-[550px] flex items-center justify-center">
          <Image
            src={slides[0]?.image || "/default.jpg"}
            alt={slides[0]?.link}
            width={500}
            height={500}
            className="h-full w-min object-cover"
          />
        </div>
      )}
      {slides.length > 1 && (
        <div className="flex flex-row gap-1 overflow-x-auto w-full mt-2">
          {slides.map((slide, index) => (
            <Image
                width={100}
                height={100}
                key={index}
                src={slide.image || "/default.jpg"}
                alt={`Thumbnail ${index + 1}`}
                className={`flex-none cursor-pointer w-16 h-16 object-cover bg-white border ${
                    currentImage === index ? 'border-main' : 'border-white'
                }`}
                onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sliders;
