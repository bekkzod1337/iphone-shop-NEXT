import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CategorySection from "./components/CategorySection";
import SmallerBanners from "./components/SmallerBanners";
import ProductsSection from "./components/ProductsSection";
import { Spotlight } from "lucide-react";
import PromoGrid from "./components/PromoGrid";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
  <Header />
  <Banner />
  <SmallerBanners />
  <CategorySection />
  <ProductsSection />
  <PromoGrid />
</div>

  );
}
