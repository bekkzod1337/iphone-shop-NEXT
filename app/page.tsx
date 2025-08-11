import Image from "next/image";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Banners from "./components/Banners";
import Categories from "./components/Categories";
import ProductsSection from "./components/Products";
import Popular from "./components/Popular";
import DiscountProducts from "./components/DiscountProducts";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center min-h-screen">
  <Header />
  <Banner />
  <Banners />
  <Categories />
  <ProductsSection />
  <Popular />
  <DiscountProducts />
  <Banner2 />
  <Footer />
</div>

  );
}
