import Coupon from "@/components/Coupon";
import Image from "next/image";
import Link from "next/link";

const IndexPage: React.FC = () => {
    return (
        <>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 my-4">
                        <Image
                            src="/coupons/9.png"
                            width={50}
                            height={50}
                            alt="eBay"
                            className="w-min h-12"
                        />
                        <h1 className="font-bold text-lg">
                        eBay
                        </h1>
                    </div>
                    <Link
                        href="/coupons/ads"
                        className="bg-secondary py-2 px-4 text-white font-bold rounded-xl"
                    >
                        Coupons ads
                    </Link>
                </div>
                <Coupon
                    items={[
                        {
                        type: "sele",
                        img: "/coupons/1.png",
                        name: "80% OFF",
                        title: "Up to 80% Off Select Items with this 30% Off Coupon Code",
                        verified: 1,
                        note: "2608 Used Today",
                        link: "https://jqdeal.vercel.app/",
                        },
                        {
                        type: "coupon",
                        img: "/coupons/2.png",
                        name: "50% OFF",
                        title: "Half Price on Your Next Order with This Exclusive Code",
                        verified: 1,
                        note: "1453 Used Today",
                        code: "HALFPRICE50",
                        },
                        {
                        type: "sele",
                        img: "/coupons/3.png",
                        name: "30% OFF",
                        title: "Save 30% on All Electronics with This Offer",
                        verified: 0,
                        note: "987 Used Today",
                        link: "https://jqdeal.vercel.app/electronics",
                        },
                        {
                        type: "coupon",
                        img: "/coupons/4.png",
                        name: "20% OFF",
                        title: "20% Off Your Purchase with This Code",
                        verified: 1,
                        note: "569 Used Today",
                        code: "SAVE20NOW",
                        },
                        {
                        type: "sele",
                        img: "/coupons/5.png",
                        name: "70% OFF",
                        title: "Get 70% Off Select Fashion Items",
                        verified: 1,
                        note: "2341 Used Today",
                        link: "https://jqdeal.vercel.app/fashion",
                        },
                        {
                        type: "coupon",
                        img: "/coupons/6.png",
                        name: "Free Shipping",
                        title: "Free Shipping on Orders Over $50",
                        verified: 0,
                        note: "842 Used Today",
                        code: "FREESHIP50",
                        },
                        {
                        type: "sele",
                        img: "/coupons/7.png",
                        name: "10% OFF",
                        title: "10% Off Your First Order",
                        verified: 1,
                        note: "1123 Used Today",
                        link: "https://jqdeal.vercel.app/firstorder",
                        },
                    ]}
                />
            </div>
                    
        </>
    );
};

export default IndexPage;