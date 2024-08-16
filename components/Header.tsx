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
        <div className='bg-black text-center text-gray-200 text-xs hidden md:block py-1'>
          <i>
          JQDeals is community-supported. 
          We may get paid by brands or deals, including promoted items.
          </i>
        </div>
        <div className="bg-main bg-bg bg-cover bg-repeat sticky z-50 top-0">
          <div className="container">
            <div className="flex md:items-center flex-row w-full py-0">
              <Link
                href="/"
                className='w-2/12 flex items-center'
              >
                <Image
                  src="/icon.png"
                  width={50}
                  height={50}
                  alt='logo'
                  className='pr-1 md:hidden'
                />
                <Image
                  src="/logo.png"
                  width={200}
                  height={60}
                  alt='logo'
                  className='hidden md:block'
                />
              </Link>
              <div className='flex md:h-12 h-10 max-w-xl md:my-0 md:mx-4 items-center bg-[#555555] rounded md:rounded-full w-full px-2'>
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-2 h-7 w-full outline-none bg-[#555555] text-gray-200"
                />
                <svg className='fill-gray-300' stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="search" x="0px" y="0px" viewBox="0 0 24 24" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><g><path d="M20.031,20.79c0.46,0.46,1.17-0.25,0.71-0.7l-3.75-3.76c1.27-1.41,2.04-3.27,2.04-5.31
                  c0-4.39-3.57-7.96-7.96-7.96s-7.96,3.57-7.96,7.96c0,4.39,3.57,7.96,7.96,7.96c1.98,0,3.81-0.73,5.21-1.94L20.031,20.79z
                  M4.11,11.02c0-3.84,3.13-6.96,6.96-6.96c3.84,0,6.96,3.12,6.96,6.96c0,3.84-3.12,6.96-6.96,6.96C7.24,17.98,4.11,14.86,4.11,11.02
                  z"></path></g>
                </svg>
              </div>
              <div className='flex items-center justify-end space-x-1 md:w-1/3'>
                <Link
                  href="/coupons"
                  className='hidden md:flex flex-col items-center px-2 text-white'
                >
                  <span className='bg-red-700 rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
                    </svg>
                  </span>
                  <p className='text-xs mt-1'>Coupons</p>
                </Link>
                
                <Link
                  href="/post-a-deal"
                  className='hidden md:flex flex-col items-center px-2 text-white'
                >
                  <span className='bg-secondary rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                    </svg>
                  </span>
                  <p className='text-xs mt-1'>Post a Deal</p>
                </Link>
                <Link
                  href="/mobile"
                  className='hidden md:flex flex-col items-center px-2 text-white'
                >
                  <span className='bg-yellow-500 rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36">
                      <path fill="currentColor" d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 26h-2v-2h2Zm-8-4V6h14v20Z" />
                      <path fill="none" d="M0 0h36v36H0z" />
                    </svg>
                  </span>
                  <p className='text-xs mt-1'>Go Mobile</p>
                </Link>
                <Account
                  title={
                    <div className="flex flex-col items-center px-2 text-white">
                      <span className='bg-red-600 rounded-full p-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
                        <path fill="currentColor" d="M229.19 213c-15.81-27.32-40.63-46.49-69.47-54.62a70 70 0 1 0-63.44 0C67.44 166.5 42.62 185.67 26.81 213a6 6 0 1 0 10.38 6c19.21-33.19 53.15-53 90.81-53s71.6 19.81 90.81 53a6 6 0 1 0 10.38-6M70 96a58 58 0 1 1 58 58a58.07 58.07 0 0 1-58-58" />
                      </svg>
                      </span>
                      <p className='text-xs mt-1'>Sign Up</p>
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
            <div className='flex space-x-4 items-center overflow-x-auto no-ber text-secondary text-sm font-semibold'>
              <div className='flex-none'>
                <h4 className='flex items-center text-main'>
                  <span className="text-nowrap mr-1 whitespace-nowrap text-xs md:text-sm leading-none font-medium">Trending</span>
                  <svg width={20} height={20}  viewBox="0 0 18 18" fill="currentColor" preserveAspectRatio="xMinYMin meet" role="img" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9814 8.45558C16.9814 6.48467 17 5.54807 16.5281 4.70604C16.2423 4.19619 15.6099 4.08111 15.1682 4.08111C14.2915 4.08111 13.4159 4.12919 12.5391 4.12919C10.182 4.12919 8.36883 3.55233 8.36883 5.47517C8.36883 7.34995 10.0913 7.15766 12.4031 7.15766C11.9045 7.68644 11.3152 8.40751 10.59 9.17665C10.1445 9.60614 9.73515 10.0356 9.36202 10.3966C9.2877 10.4685 9.17069 10.4703 9.09508 10.3998C8.86701 10.187 8.63371 9.9462 8.36883 9.70543C7.59784 8.88781 6.77668 8.08296 6.25079 7.57706C5.94136 7.2794 5.45365 7.28627 5.1494 7.58922C4.55243 8.18363 3.61846 9.11882 3.15598 9.60929C1.70544 11.1476 0.209578 11.9167 1.4788 13.2627C2.79334 14.6567 3.51861 13.0704 4.96914 11.5321C5.24112 11.2918 5.46776 11.0514 5.69441 10.8111C5.96638 11.0514 6.23836 11.3398 6.55566 11.6763C7.01401 12.1624 8.06969 13.0709 8.70911 13.6114C9.00875 13.8647 9.44659 13.8586 9.74055 13.5987C10.508 12.9202 11.9206 11.6593 12.4031 11.1476C13.0118 10.5021 13.6205 9.93362 14.1316 9.44221C14.1961 9.38022 14.3034 9.4276 14.3009 9.51701C14.2465 11.5017 14.0915 12.8781 15.4855 12.8781C17.1174 12.8781 17.0267 11.9167 16.9814 8.45558Z" fill="inherit"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.9814 8.45558C16.9814 6.48467 17 5.54807 16.5281 4.70604C16.2423 4.19619 15.6099 4.08111 15.1682 4.08111C14.2915 4.08111 13.4159 4.12919 12.5391 4.12919C10.182 4.12919 8.36883 3.55233 8.36883 5.47517C8.36883 7.34995 10.0913 7.15766 12.4031 7.15766C11.9045 7.68644 11.3152 8.40751 10.59 9.17665C10.1445 9.60614 9.73515 10.0356 9.36202 10.3966C9.2877 10.4685 9.17069 10.4703 9.09508 10.3998C8.86701 10.187 8.63371 9.9462 8.36883 9.70543C7.59784 8.88781 6.77668 8.08296 6.25079 7.57706C5.94136 7.2794 5.45365 7.28627 5.1494 7.58922C4.55243 8.18363 3.61846 9.11882 3.15598 9.60929C1.70544 11.1476 0.209578 11.9167 1.4788 13.2627C2.79334 14.6567 3.51861 13.0704 4.96914 11.5321C5.24112 11.2918 5.46776 11.0514 5.69441 10.8111C5.96638 11.0514 6.23836 11.3398 6.55566 11.6763C7.01401 12.1624 8.06969 13.0709 8.70911 13.6114C9.00875 13.8647 9.44659 13.8586 9.74055 13.5987C10.508 12.9202 11.9206 11.6593 12.4031 11.1476C13.0118 10.5021 13.6205 9.93362 14.1316 9.44221C14.1961 9.38022 14.3034 9.4276 14.3009 9.51701C14.2465 11.5017 14.0915 12.8781 15.4855 12.8781C17.1174 12.8781 17.0267 11.9167 16.9814 8.45558Z" fill="inherit"></path>
                  </svg>
                </h4>
              </div>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Tool Deals</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Tech Deals</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Video Games</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Laptops &amp; Computers</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Credit Card Offers</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Best Savings Accounts</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Sneaker Deals</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Home Deals</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Grocery Deals</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Toy Deals</Link>
              <Link className="flex-none p-2 text-nowrap whitespace-nowrap text-xs md:text-sm leading-none font-medium" href="/cat/apple">Clothing Deals</Link>
            </div>
          </div>
        </div>
        )}
      </div>
    </>
  );
};

export default Header;

