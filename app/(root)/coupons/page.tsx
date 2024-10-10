import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
    const items = [
        { img: '/coupons/1.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/2.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/3.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/4.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/5.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/6.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/7.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/8.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
        { img: '/coupons/9.png', name: 'Take Up to 50% Off Fees with Code', title: 'eBay', sub: 'Used 68979 times today', link: '/coupons/1' },
    ];
    return (
        <>
            <div className="container my-4">
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="w-full md:w-2/3">
                        <h1 className="my-4 font-bold text-lg">
                            Friday Top Coupons & Promo Codes
                        </h1>
                        <div className="grid md:grid-cols-3 grid-cols-0 md:gap-3 gap-2 w-full">
                            {items.map((item, index) => (
                                <Link href={item.link} key={index}>
                                    <div className="bg-white border shadow relative">
                                        <span className="bp">Today Top Pick</span>
                                        <Image
                                            src={item.img}
                                            width={200}
                                            height={200}
                                            alt={item.title}
                                            className="block w-min h-40 pt-8 mx-auto"
                                        />
                                        <div className="p-2 md:p-4">
                                            <div className="flex items-center justify-between">
                                                <span className="text-nowrap font-bold whitespace-nowrap text-xs md:text-sm leading-none text-main">
                                                    {item.title}
                                                </span>
                                                <span className="text-nowrap whitespace-nowrap text-xs leading-none text-main">
                                                    {item.sub}
                                                </span>
                                            </div>
                                            <h2 className="text-center font-bold text-sm mt-2 line-clamp-1">
                                                {item.name}
                                            </h2>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-1/3">
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
                        </div> 
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default IndexPage;