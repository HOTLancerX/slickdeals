"use client";
import { useState, isValidElement, Children, ReactNode } from 'react';

interface ReadMoreProps {
  height: string;
  children: ReactNode;
}

const ReadMore = ({ height, children }: ReadMoreProps) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const text = Children.toArray(children)
  .filter(Boolean)
  .map((child) => {
    if (isValidElement(child) && child.type) {
      return child.props.children;
    }
    return null;
  })
  .filter(Boolean)
  .join(' ');

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='relative'>
      <div className={`overflow-hidden ${isExpanded ? '' : height}`}>
        <div className="black p-2 space-y-1">
          {children}
        </div>
      </div>
      {text.length > 100 && (
        <>
          <span className='from-white/80 bg-gradient-to-t h-5 w-full block absolute bottom-5 left-0 right-0'></span>
          <button
            onClick={toggleReadMore}
            className="text-main flex justify-end w-full text-xs pb-1 pr-2"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        </>
      )}
    </div>
  );
};

export default ReadMore;
