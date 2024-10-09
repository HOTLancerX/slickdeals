import Table from "@/components/Table";

const demoData = [
    {
      title: "Prime Members: 34\" Samsung ViewFinity S50GC 100Hz 1440p",
      link: "/",
      img: "/product/2.jpg",
      price: "$200",
      originalPrice: "$350",
      discount: "42% off",
      merchant: "Amazon + Free Shipping",
      activity: { likes: 13, comments: 2, views: 2900 },
    },
    {
      title: "Prime Members: 4-Pack 75-Count Lysol Dual Action Disinfectant Wipes",
      link: "/",
      img: "/product/3.jpg",
      price: "$9.45",
      originalPrice: "$23",
      discount: "58% off",
      merchant: "Amazon + Free Shipping",
      activity: { likes: 12, comments: 1, views: 1100 },
    },
    {
      title: "Walmart+ Members: 3-Mo. Apple News+, 5-Mo. Apple Arcade, 6-Mo. Spotify Premium",
      link: "/",
      img: "/product/7.jpg",
      price: "Free",
      merchant: "Walmart & More",
      activity: { likes: 17, comments: 8, views: 6200 },
    },
    // ... Add more items if needed
  ]

const IndexPage: React.FC = () => {
    return (
        <Table title="Coupons list" items={demoData} />
    );
};
export default IndexPage;