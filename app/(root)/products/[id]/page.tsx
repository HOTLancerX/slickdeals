import Carousel from "@/components/Carousel";
import Coupons from "@/components/Coupons";
import ReadMore from "@/components/ReadMore";
import Sliders from "@/components/Sliders";
import SocialShare from "@/components/SocialShare";
import Specifications from "@/components/Specifications";
import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
    return (
        <>
            <div className="container mb-4">
                <ol className="hidden lg:flex items-center space-x-2 pt-1 pl-2 flex-wrap bg-white text-sm">
                    <li>
                        <Link
                        href="/"
                        title="Price in Kenya"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate nuxt-link-active"
                        >
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/cat"
                        title="All categories"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate"
                        >
                        Categories
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/cat/1"
                        title="All Smartphones from Price in Kenya"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate"
                        >
                        Smartphones
                        </Link>
                    </li>
                    <li>
                        <Link
                        href="/brand/1"
                        title="Oppo products from Price in Kenya"
                        className="hover:text-gray-600 bg-gray-200 px-3 py-1 rounded max-w-sm inline-block truncate"
                        >
                        Oppo
                        </Link>
                    </li>
                    <li>
                        <p className="hover:text-gray-600 py-1 rounded max-w-sm inline-block truncate">
                        Oppo A78, 8GB/256GB
                        </p>
                    </li>
                </ol>
            </div>

            <div className="container my-4">
                <div className="rounded-md border p-2 my-3 bg-white">
                    <Link
                        href="/"
                    >
                        <Image
                            src="/ads/900.png"
                            width={900}
                            height={90}
                            alt=""
                            className="rounded-md hidden md:block w-full h-auto"
                        />
                        <Image
                            src="/ads/300.png"
                            width={300}
                            height={300}
                            alt=""
                            className="rounded-md md:hidden block w-full h-auto"
                        />
                    </Link>
                </div>
            </div>

            <div className="container my-4">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-[75%]">
                        <div className="flex flex-col md:items-center md:flex-row bg-white gap-4">
                            <div className="w-full md:w-[40%] p-2">
                                <Sliders
                                    slides={[
                                        {
                                        id: 1,
                                        image: '/product/1.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 2,
                                        image: '/product/2.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 3,
                                        image: '/product/3.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 4,
                                        image: '/product/4.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 5,
                                        image: '/product/5.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 6,
                                        image: '/product/6.jpg',
                                        link: '/',
                                        },
                                        {
                                        id: 7,
                                        image: '/product/7.jpg',
                                        link: '/',
                                        },
                                    ]}
                                />
                            </div>
                            <div className="w-full md:w-[60%] p-2 md:p-4">
                                <h1 className="text-xl md:text-3xl font-light line-clamp-3">
                                Ace Hardware Stores: 5-Gallon Bucket + 20% Off Select Items Fitting in Bucket
                                </h1>
                                
                                <div className="flex items-center my-4 text-xl md:text-3xl">
                                    <h1 className=" font-bold">
                                        $100
                                    </h1>
                                    <del className="text-gray-500 mx-4">$150</del>
                                    <p className="text-green-700 font-bold">
                                    41% off
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2 text-xl p-2">
                                    <Link
                                        href="/"
                                        className=" bg-secondary p-2 rounded-full text-white font-bold text-center w-full block my-4"
                                    >
                                        Get Deal at SIERRA
                                    </Link>
                                    
                                </div>
                                <SocialShare link="https://jqdeal.vercel.app/products/1" />
                            </div>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold mb-1 mt-4">
                            Specifications
                            </h1>
                            <div className="bg-white mt-2">
                                <Specifications
                                    items={[
                                    {
                                        title: "GENERAL",
                                        content: 
                                        <>
                                        <table className="w-full">
                                            <tbody className="w-full">
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                        Screen size
                                                    </td>
                                                    <td className="w-auto p-2">75 inch</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                    Display Resolution
                                                    </td>
                                                    <td className="w-auto p-2">4K Ultra HD (3,840 x 2,160)</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                    Refresh rate
                                                    </td>
                                                    <td className="w-auto p-2">60 Hz</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                        Backlight type
                                                    </td>
                                                    <td className="w-auto p-2">Direct</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </>,
                                    },
                                    {
                                        title: "PLATFORM",
                                        content:
                                        <>
                                        <table className="w-full">
                                            <tbody className="w-full">
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">
                                                        Screen size</td>
                                                    <td className="w-auto p-2">75 inch</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">Display Resolution</td>
                                                    <td className="w-auto p-2">4K Ultra HD (3,840 x 2,160)</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">Refresh rate</td>
                                                    <td className="w-auto p-2">60 Hz</td>
                                                </tr>
                                                <tr className="w-full flex md:items-center flex-col md:flex-row">
                                                    <td className="md:w-96 p-2 font-bold">Backlight type&nbsp;</td>
                                                    <td className="w-auto p-2">Direct&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        </>,
                                    },
                                    ]}
                                />
                            </div>
                        </div>

                        <Link
                        href="/"
                        className="bg-white p-1 md:p-2 mt-2 shadow border block"
                        >
                        <Image
                            src="/ads/720.png"
                            width={720}
                            height={90}
                            alt="ads"
                            className="h-min w-full"
                        />
                        </Link>

                        <div className="my-3">
                            <h1 className="text-xs md:text-sm font-bold bg-white p-2 border-b">
                                Description
                            </h1>
                            <div className="bg-white text-sm md:text-base leading-normal">
                            <ReadMore height="h-40">
                                <p className="mb-2">
                                    It is a long established fact that a reader will be distracted by the
                                    readable content of a page when looking at its layout. The point of using
                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
                                    opposed to using Content here, content here, making it look like readable
                                    English.
                                </p>
                                <p className="mb-2">
                                    Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                    their default model text, and a search for lorem ipsum will uncover many
                                    web sites still in their infancy. Various versions have evolved over the
                                    years, sometimes by accident, sometimes on purpose (injected humour and the
                                    like).
                                </p>
                                <h4 className="mb-2 font-bold">
                                    Key Responsibilities
                                </h4>
                                <ul className="list-disc ml-8">
                                    <li>
                                        Be involved in every step of the product design cycle from discovery to
                                        developer handoff and user acceptance testing.
                                    </li>
                                    <li>
                                        Work with BAs, product managers and tech teams to lead the Product
                                        Design
                                    </li>
                                    <li>
                                        Maintain quality of the design process and ensure that when designs are
                                        translated into code they accurately reflect the design specifications.
                                    </li>
                                    <li>
                                        Accurately estimate design tickets during planning sessions.
                                    </li>
                                    <li>
                                        Contribute to sketching sessions involving non-designersCreate, iterate
                                        and maintain UI deliverables including sketch files, style guides, high
                                        fidelity prototypes, micro interaction specifications and pattern
                                        libraries.
                                    </li>
                                    <li>
                                        Ensure design choices are data led by identifying assumptions to test
                                        each sprint, and work with the analysts in your team to plan moderated
                                        usability test sessions.
                                    </li>
                                    <li>
                                        Design pixel perfect responsive UI’s and understand that adopting common
                                        interface patterns is better for UX than reinventing the wheel
                                    </li>
                                    <li>
                                        Present your work to the wider business at Show &amp; Tell sessions.
                                    </li>
                                </ul>
                                <h4 className="mb-2 font-bold">
                                    Work &amp; Experience
                                </h4>
                                
                                <ul className="list-disc ml-8">
                                    <li>
                                    You have at least 3 years experience working as a Product Designer.
                                    </li>
                                    <li>You have experience using Sketch and InVision or Framer X</li>
                                    <li>
                                    You have some previous experience working in an agile environment – Think
                                    two-week sprints.
                                    </li>
                                    <li>You are familiar using Jira and Confluence in your workflow</li>
                                </ul>
                            </ReadMore>
                            </div>
                        </div>
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
                    </div>
                    <div className="w-full md:w-[25%] hidden md:block">
                        <div className="sticky top-0">
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

            <div className=" container my-4">
                <Carousel
                    title="Best Deal Posted"
                    img=""
                    link="/"
                    left={0}
                    desktops={4}
                    tablets={3}
                    mobile={2}
                    slider={2}
                    limit={4}
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
        </>
    );
};
  
export default IndexPage;