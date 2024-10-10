import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopUp from "@/components/TopUp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <Header menu={1} />
        {children}
        <Footer menu={1} />
        <TopUp />
      </main>
  );
}