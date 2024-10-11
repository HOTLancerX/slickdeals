import Coupons from "@/components/Coupons";

const IndexPage: React.FC = () => {
  return (
      <>
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
      </>
  );
};

export default IndexPage;