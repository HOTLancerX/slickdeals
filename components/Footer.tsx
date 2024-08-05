import Image from "next/image";
import Link from "next/link";
interface FooterProps {
  menu: number;
}

const Footer: React.FC<FooterProps> = ({ menu }) => {
  
    return (
      <>

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
                    Slickdeals Live
                  </Link>
                  <Link
                    href="/"
                  >
                    Black Friday Deals 2024
                  </Link>
                  <Link
                    href="/"
                  >
                    Slickdeals Cashback Rewards
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