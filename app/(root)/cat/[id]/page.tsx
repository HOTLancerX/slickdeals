import Carousel from "@/components/Carousel";
import Rating from "@/components/Rating";
import Stores from "@/components/Stores";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy Smartphones in @Price in Kenya",
  description: "Order Oppo A78 from Price in Kenya with fast delivery across the country and in-store pickup in Nairobi.",
};

const IndexPage: React.FC = () => {
  const items = [
    { img: '/icon/1.svg', title: "Auto Electronic Accessories", link: '/' },
    { img: '/icon/2.svg', title: "Auto Parts & Supplies", link: '/' },
    { img: '/icon/3.svg', title: "Automotive Tools", link: '/' },
    { img: '/icon/4.svg', title: "Gas", link: '/' },
    { img: '/icon/5.svg', title: "Wheels & Tires", link: '/' },
    { img: '/icon/6.svg', title: "Motor Oil", link: '/' },
    { img: '/icon/7.svg', title: "Motorcycle Gear & Accessories", link: '/' },
  ];
    return (
        <>
          <div className="container my-4">
            <div className="flex overflow-x-auto no-ber gap-2">
              {items.map((item, index) => (
                  <Link href={item.link} key={index} className='w-40 flex-none'>
                      <div className="flex space-y-2 flex-col items-center">
                        <div className="bg-secondary text-white p-4 rounded-full">
                          <Image
                              src={item.img}
                              width={40}
                              height={40}
                              alt={item.title}
                              className="block"
                          />
                        </div>
                          <span className="text-xs md:text-sm leading-none text-main font-medium text-center">{item.title}</span>
                      </div>
                  </Link>
              ))}
            </div>
          </div>
          <div className="container my-4">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="w-full md:w-1/5">
                        <Stores
                            title="Stores"
                            items={[
                            'Home Depot',
                            'Amazon',
                            'Lowe\'s',
                            'Woot!',
                            'Walmart',
                            'Ace Hardware',
                            'Blade HQ',
                            'Blains Farm Fleet',
                            'Menards',
                            'Harbor Freight',
                            ]}
                        />
                        <Rating
                            title="Rating"
                            items={[
                            'Frontpage Deals',
                            'Popular Deals',
                            '5+ Thumbs',
                            '4+ Thumbs',
                            '3+ Thumbs',
                            '2+ Thumbs',
                            '1+ Thumbs',
                            '0+ Thumbs',
                            'All Ratings',
                            ]}
                        />
                    </div>
                    <div className="w-full md:w-4/5">
                        <Carousel
                            title="Best Deal Posted"
                            img=""
                            link="/"
                            left={0}
                            desktops={4}
                            tablets={3}
                            mobile={2}
                            slider={2}
                            limit={12}
                            items={[
                            {
                                img: "/product/1.jpg",
                                link: "/products/1",
                                title: "Supply a Four Piece Set of American Solid Color European and American Style Chemical Fiber Bed Sheets",
                                featured: "Featured!",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/2.jpg",
                                link: "/products/1",
                                title: "China Wholesale Cheap Hand Made Brazilian Virgin Remy Long Human Hair Natural Bone Straight 360 Full HD Transparent Swiss Lace Front Wigs for Black Women",
                                featured: "Featured!",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/3.jpg",
                                link: "/products/1",
                                title: "Natural Bone Straight 360 Full HD Transparent Swiss Lace Front Wigs for Black Women",
                                featured: "",
                                sele: "Sele!",
                                price: "29,500",
                            },
                            {
                                img: "/product/4.jpg",
                                link: "/products/1",
                                title: "Floral Blue Bed Skirt 4-Piece Polyester Bedding Set",
                                featured: "",
                                sele: "Sele!",
                                price: "29,500",
                            },
                            {
                                img: "/product/5.jpg",
                                link: "/products/1",
                                title: "Xuchang Hair Factory Kbeth Straight Kinky Curly Body Wave 613 Bob Wigs Full Lace Front Brazilian 100% Virgin Natural Human Hair Wig China Wholesale",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/6.jpg",
                                link: "/products/1",
                                title: "Straight Kinky Curly Body Wave 613 Bob Wigs Full Lace Front Brazilian 100% Virgin Natural Human Hair Wig China Wholesale",
                                featured: "US$ 5-10 /Piece",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/7.jpg",
                                link: "/products/1",
                                title: "Wigs Full Lace Front Brazilian 100% Virgin Natural Human Hair Wig China Wholesale",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/8.jpg",
                                link: "/products/1",
                                title: "8 Inch to 30 Inch Stw Natural Raw Brazilian Remy Human Hair Weaving",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/9.jpg",
                                link: "/products/1",
                                title: "Natural Raw Brazilian Remy Human Hair Weaving",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/10.jpg",
                                link: "/products/1",
                                title: "Super Soft 300tc 100% Cotton Bedding Set",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/11.jpg",
                                link: "/products/1",
                                title: "Natural Raw Brazilian Remy Human Hair Weaving",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            {
                                img: "/product/13.jpg",
                                link: "/products/1",
                                title: "Super Soft 300tc 100% Cotton Bedding Set",
                                featured: "",
                                sele: "",
                                price: "29,500",
                            },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
export default IndexPage;