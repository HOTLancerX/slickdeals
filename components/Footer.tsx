import Image from "next/image";
import Link from "next/link";
import FooterMenu from "./FooterMenu";
interface FooterProps {
  menu: number;
}

const Footer: React.FC<FooterProps> = ({ menu }) => {
  
    return (
      <>
        <FooterMenu
          items={
          [
            {
              icon: <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
              title: "Home",
              link: "/"
            },
            {
              icon: <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
              title: "Ctgy",
              link: "/cat"
            },
            {
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 3.75A3.75 3.75 0 0 1 7.5 0c1.455 0 3.436.901 4.5 3.11C13.064.901 15.044 0 16.5 0a3.75 3.75 0 0 1 3 6h1.75c.966 0 1.75.784 1.75 1.75v2.5c0 .698-.409 1.301-1 1.582v8.418A1.75 1.75 0 0 1 20.25 22H3.75A1.75 1.75 0 0 1 2 20.25v-8.418c-.591-.282-1-.884-1-1.582v-2.5C1 6.784 1.784 6 2.75 6H4.5a3.733 3.733 0 0 1-.75-2.25ZM20.5 12h-7.75v8.5h7.5a.25.25 0 0 0 .25-.25Zm-9.25 8.5V12H3.5v8.25c0 .138.112.25.25.25Zm10-10a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-8.5v3Zm-18.5 0h8.5v-3h-8.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25Zm16-6.75A2.25 2.25 0 0 0 16.5 1.5c-1.15 0-3.433 1.007-3.72 4.5h3.72a2.25 2.25 0 0 0 2.25-2.25ZM11.22 6c-.287-3.493-2.57-4.5-3.72-4.5a2.25 2.25 0 1 0 0 4.5Z"></path></svg>,
              title: "Offers",
              link: "/offers"
            },
            {
              icon: <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
              title: "Search",
              link: "/search"
            },
            {
              icon: <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="25" width="25" xmlns="http://www.w3.org/2000/svg"><path d="M228.61,60.16A6,6,0,0,0,224,58H61L54.63,22.93A6,6,0,0,0,48.73,18H24a6,6,0,0,0,0,12H43.72L69.53,171.94a21.93,21.93,0,0,0,6.24,11.77A26,26,0,1,0,113.89,190h52.22A26,26,0,1,0,188,178H91.17a10,10,0,0,1-9.84-8.21L77.73,150H196.1a22,22,0,0,0,21.65-18.06L229.9,65.07A6,6,0,0,0,228.61,60.16ZM106,204a14,14,0,1,1-14-14A14,14,0,0,1,106,204Zm96,0a14,14,0,1,1-14-14A14,14,0,0,1,202,204Zm3.94-74.21A10,10,0,0,1,196.1,138H75.55L63.19,70H216.81Z"></path></svg>,
              title: "Cart",
              link: "/checkout"
            },
            {
              icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
              title: "Account",
              link: "/dashboard"
            }
          ]}
        />
        {menu === 1 && (
          <div className="bg-main py-4">
            <div className="container">
              <div className="text-white grid grid-cols-2 md:grid-cols-5 gap-2 px-2 py-6">
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Follow Us
                  </h1>
                  <Link
                    href="/"
                  >
                    Twitter
                  </Link>
                  <Link
                    href="/"
                  >
                    Facebook
                  </Link>
                  <Link
                    href="/"
                  >
                    Instagram
                  </Link>
                  <Link
                    href="/"
                  >
                    YouTube
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  About
                  </h1>
                  <Link
                    href="/"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/"
                  >
                    Help Center
                  </Link>
                  <Link
                    href="/"
                  >
                    Advertising Opportunities
                  </Link>
                  <Link
                    href="/"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  More
                  </h1>
                  <Link
                    href="/"
                  >
                    Deal Alerts
                  </Link>
                  <Link
                    href="/"
                  >
                    JQDeals Live
                  </Link>
                  <Link
                    href="/"
                  >
                    Black Friday Deals 2024
                  </Link>
                  <Link
                    href="/"
                  >
                    JQDeals Cashback Rewards
                  </Link>
                </div>
                <div className="flex flex-col space-y-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Legal
                  </h1>
                  <Link
                    href="/"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/"
                  >
                    Other Terms and Policies
                  </Link>
                  <Link
                    href="/"
                  >
                    Interest-Based Ads
                  </Link>
                  <Link
                    href="/"
                  >
                    Do Not Sell or Share My Personal Information
                  </Link>
                  <Link
                    href="/"
                  >
                    Website Accessibility
                  </Link>
                </div>
                <div className="flex flex-col space-y-3 col-span-2 md:col-span-1 text-sm font-normal">
                  <h1 className="text-xl">
                  Legal
                  </h1>
                  <Link
                    href="/"
                    className="bg-gray-500 rounded-full p-1 mb-3 flex justify-center"
                  >
                    <Image
                      src="/g.png"
                      width={147}
                      height={30}
                      alt='logo'
                      className='p-2 h-12 w-min'
                    />
                  </Link>
                  <Link
                    href="/"
                    className="bg-gray-500 rounded-full p-1 flex justify-center"
                  >
                    <Image
                      src="/a.png"
                      width={147}
                      height={30}
                      alt='logo'
                      className='p-2 h-12 w-min'
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="bg-main text-white py-4">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <Link
                href="/"
                className='flex items-center mb-2 md:mb-0'
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
              <div>
              Copyright © 2024 JQDeals. All rights reserved.
              </div>              
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Footer;