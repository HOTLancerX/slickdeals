import Carousel from "@/components/Carousel";
import Coupons from "@/components/Coupons";
import Tab from "@/components/Tab";
import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
  return (
      <>
        <div className="container hidden md:block">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-9/12">
              <Carousel
                title="Just For You"
                img=""
                link="/"
                left={0}
                desktops={4}
                tablets={3}
                mobile={2}
                slider={1}
                limit={10}
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
                ]}
              />

              <Link
                href="/"
                className="bg-white p-1 md:p-2 shadow border block"
              >
                <Image
                  src="/ads/720.png"
                  width={720}
                  height={90}
                  alt="ads"
                  className="h-min w-full"
                />
              </Link>

              <Carousel
                title="5G Mobile Phones"
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
            <div className="w-full md:w-3/12 hidden md:block">
              <div className="sticky top-0 mt-4">
                <Link
                  href="/"
                  className="bg-white p-2 shadow border block"
                >
                  <Image
                    src="/ads/600.png"
                    width={300}
                    height={600}
                    alt="ads"
                    className="h-min w-min"
                  />
                </Link>

                <Coupons
                  title="Featured Coupons & Discounts"
                  items={[
                    {
                      img: "/coupons/1.png",
                      sub: "$500 OFF",
                      title: "1408 Redemptions",
                    },
                    {
                      img: "/coupons/2.png",
                      sub: "$300 OFF",
                      title: "1080 Redemptions",
                    },
                    {
                      img: "/coupons/3.png",
                      sub: "10% OFF",
                      title: "758 Redemptions",
                    },
                    {
                      img: "/coupons/4.png",
                      sub: "Buy 1 Get 1 Free",
                      title: "950 Redemptions",
                    },
                    {
                      img: "/coupons/5.png",
                      sub: "$100 OFF",
                      title: "600 Redemptions",
                    },
                    {
                      img: "/coupons/6.png",
                      sub: "20% OFF",
                      title: "1200 Redemptions",
                    },
                    {
                      img: "/coupons/7.png",
                      sub: "Free Shipping",
                      title: "1100 Redemptions",
                    },
                  ]}
                />

                <Link
                  href="/"
                  className="bg-white p-2 shadow border block"
                >
                  <Image
                    src="/ads/300.png"
                    width={300}
                    height={600}
                    alt="ads"
                    className="h-min w-min"
                  />
                </Link>
              </div>              
            </div>
          </div>
        </div>
        <Tab
          items={[
            {
              name: "For You",
              info: 
              <>
                <Carousel
                  title="Top Picks"
                  img=""
                  link="/"
                  left={0}
                  desktops={4}
                  tablets={3}
                  mobile={2}
                  slider={1}
                  limit={10}
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
                  ]}
                />

                <Link
                  href="/"
                  className="bg-white p-1 md:p-2 shadow border block"
                >
                  <Image
                    src="/ads/720.png"
                    width={720}
                    height={90}
                    alt="ads"
                    className="h-min w-full"
                  />
                </Link>

                <Carousel
                  title="Latest Deals"
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
              </>,
            },
            {
              name: "Frontpage",
              info: <>
                <Carousel
                  title=""
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
              </>,
            },
            {
              name: "Popular",
              info: <>
                <Carousel
                  title=""
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
                  ]}
                />
              </>,
            },
            {
              name: "Coupons",
              info: <>
                <Coupons
                  title=""
                  items={[
                    {
                      img: "/coupons/1.png",
                      sub: "$500 OFF",
                      title: "1408 Redemptions",
                    },
                    {
                      img: "/coupons/2.png",
                      sub: "$300 OFF",
                      title: "1080 Redemptions",
                    },
                    {
                      img: "/coupons/3.png",
                      sub: "10% OFF",
                      title: "758 Redemptions",
                    },
                    {
                      img: "/coupons/4.png",
                      sub: "Buy 1 Get 1 Free",
                      title: "950 Redemptions",
                    },
                    {
                      img: "/coupons/5.png",
                      sub: "$100 OFF",
                      title: "600 Redemptions",
                    },
                    {
                      img: "/coupons/6.png",
                      sub: "20% OFF",
                      title: "1200 Redemptions",
                    },
                    {
                      img: "/coupons/7.png",
                      sub: "Free Shipping",
                      title: "1100 Redemptions",
                    },
                  ]}
                />
              </>,
            }
          ]}
        />
      </>
  );
};

export default IndexPage;