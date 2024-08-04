import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Account from './Account';

interface HeaderProps {
  menu: number;
}

const Header: React.FC<HeaderProps> = ({ menu }) => {

  return (
    <>
      <div>
        <div className="bg-main bg-bg bg-cover bg-repeat sticky z-50 top-0">
          <div className="container">
            <div className="flex md:items-center flex-col md:flex-row w-full py-0">
              <Link
                href="/"
              >
                <Image
                  src="/logo.svg"
                  width={150}
                  height={45}
                  alt='logo'
                  className='hidden md:block'
                />
              </Link>
              <div className='flex h-8 my-2 md:my-0 md:mx-4 items-center border bg-white rounded md:rounded-full w-full px-2'>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 h-7 w-full outline-none"
                />
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
                  c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                  M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                  z"></path></g>
                </svg>
              </div>
              <div className='flex items-center justify-end space-x-1'>
                <Link
                  href="/offers"
                  className='hidden md:flex items-center space-x-1 px-2 text-white'
                >
                  <svg className='mr-1' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"></path></svg>
                  Offers
                </Link>
                <Link
                  href="/checkout"
                  className='hidden md:flex items-center space-x-1 px-2 text-white'
                >
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z"></path></svg>
                  <div className='leading-none text-xs'>
                    <p>Cart</p>
                    <span className='text-nowrap text-[10px]'>Item (0)</span>
                  </div>
                </Link>
                <Account
                  title={
                    <div className="flex space-x-3 items-center">
                      <svg className='mr-2' stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      Account
                    </div>
                  }
                  sub={
                    <div>
                      <div className='p-3 border-b'>
                        <Link
                          href="/auth"
                          className='bg-main font-bold uppercase shadow-[0_4px_8px_0_rgba(0,0,0,.2)] text-white block text-center w-full py-2 rounded-md'
                        >
                          Sign In
                        </Link>
                      </div>
                      <Link href="/dashboard" className="flex items-center p-2 hover:bg-gray-200">
                        <svg stroke="currentColor" className='mr-2' fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        My Account
                      </Link>
                      <Link href="/dashboard/orders" className="flex items-center p-2 hover:bg-gray-200">
                        <svg className='mr-2' stroke="currentColor" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z"></path></svg>
                        Orders
                      </Link>
                      <Link href="/dashboard/wishlist" className="flex items-center p-2 hover:bg-gray-200">
                        <svg stroke="currentColor" className='mr-2' fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><g id="Heart"><path d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"></path></g></svg>
                        Saved Items
                      </Link>
                      <div className='p-3 border-t'>
                        <Link
                          href="/auth"
                          className='bg-main font-bold uppercase shadow-[0_4px_8px_0_rgba(0,0,0,.2)] text-white block text-center w-full py-2 rounded-md'
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
        {menu === 1 && (
        <div className="bg-white hidden md:block">
          <div className="container">
            
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Header;

