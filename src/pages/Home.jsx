import CategoryGrid from "../components/CategoryGrid";
import ImageSwiper from "../components/slider";
import Bestsellers from "../components/Bestsellers";
import NewArrivals from "../components/NewArrivals";
import LifeWithNekza from "../components/LifeWithNekza";
import PopularProducts from "../components/PopularProducts.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyUs from "../components/WhyUs.jsx";

function Home() {
  return (
    <>
      <ImageSwiper />
      <CategoryGrid />
      <Bestsellers />
      <NewArrivals />
      <PopularProducts />
      <WhyUs />
      <Testimonials />
      <LifeWithNekza />
    </>
  );
}

export default Home;
