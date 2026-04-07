import CategoryGrid from "../components/CategoryGrid";
import ImageSwiper from "../components/slider";
import Bestsellers from "../components/Bestsellers";
import NewArrivals from "../components/NewArrivals";
import LifeWithNekza from "../components/LifeWithNekza";
import PopularProducts from "../components/PopularProducts.jsx";
import Testimonials from "../components/Testimonials.jsx";
import WhyNekza from "../components/WhyNekza.jsx";
import MarqueeStrip from "../components/sections/MarqueeStrip.jsx";
import UsageMomentsStrip from "../components/sections/UsageMomentsStrip.jsx";
import ChooseYourRoutine from "../components/sections/ChooseYourRoutine.jsx";

function Home() {
  return (
    <>
      <ImageSwiper />
      <CategoryGrid />
      <LifeWithNekza />
      <Bestsellers />
      <MarqueeStrip />
      <WhyNekza />
      <ChooseYourRoutine />
      <MarqueeStrip />
      <PopularProducts />
      <UsageMomentsStrip />
      <NewArrivals />
      <Testimonials />
    </>
  );
}

export default Home;
