import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tab from "@/components/Tab";
import TopUp from "@/components/TopUp";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <Header menu={1} />
        <Tab
          items={[
            { title: "Frontpage", link: '/' },
            { title: "Coupons", link: '/coupons' },
            { title: "For You", link: '/for-you' },
            { title: "Popular", link: '/popular' },
            { title: "Comments", link: '/account/comment' },
            { title: 'Setting', link: '/account/setting' },
          ]}
        />
        <div className="container">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-9/12">
              {children}
            </div>
            <div className="w-full md:w-3/12 hidden md:block">
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
        <Footer menu={1} />
        <TopUp />
      </main>
  );
}