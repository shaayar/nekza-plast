import ProductGrid from "../components/ProductGrid";
import ImageSwiper from "../components/slider";
import Bestsellers from "../components/Bestsellers";
import NewArrivals from "../components/NewArrivals";
import LifeWithNekza from "../components/LifeWithNekza";
import PopularProducts from "./PopularProducts.jsx";

function Home() {
  return (
    <>
      <ImageSwiper />
      <ProductGrid />
      <Bestsellers />
      <NewArrivals />
      <PopularProducts />
      <LifeWithNekza />
    </>
  );
}

export default Home;