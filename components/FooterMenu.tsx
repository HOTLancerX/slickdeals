"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FooterMenu = ({ items }: { items: { icon: JSX.Element; title: string; link: string }[] }) => {
    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <div className='md:hidden'>
            <div className={`fixed bottom-0 z-50 w-full bg-main/70 text-xs text-white shadow-inner transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
                <div className="grid grid-cols-5 gap-1 items-center">
                    {items.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className="flex flex-col items-center space-y py-1"
                        >
                            {item.icon}
                            <span className='text-center text-nowrap whitespace-nowrap'>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;
