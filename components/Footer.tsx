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
              icon: <svg fill="none" stroke="currentColor" width="30" height="30" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-linecap="round" stroke-linejoin="round"></path></svg>,
              title: "Home",
              link: "/"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6zm-7 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2" />
                    </svg>,
              title: "Coupons",
              link: "/coupons"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32">
                      <path fill="currentColor" d="M19.05 5.06c0-1.68-1.37-3.06-3.06-3.06s-3.07 1.38-3.06 3.06v7.87H5.06C3.38 12.93 2 14.3 2 15.99c0 1.68 1.38 3.06 3.06 3.06h7.87v7.86c0 1.68 1.37 3.06 3.06 3.06c1.68 0 3.06-1.37 3.06-3.06v-7.86h7.86c1.68 0 3.06-1.37 3.06-3.06c0-1.68-1.37-3.06-3.06-3.06h-7.86z" />
                    </svg>,
              title: "Post a Deal",
              link: "/post-a-deal"
            },
            {
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 36">
                      <path fill="currentColor" d="M25 4H11a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-6 26h-2v-2h2Zm-8-4V6h14v20Z" />
                      <path fill="none" d="M0 0h36v36H0z" />
                    </svg>,
              title: "Go Mobile",
              link: "/mobile"
            },
            {
              icon: <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
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
                  src="/logo.png"
                  width={200}
                  height={60}
                  alt='logo'
                  className=''
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