import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import PopularProducts from "./components/PopularProducts.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductShowcase from "./pages/ProductShowcase.jsx";
import CustomCursor from "./components/UI/CustomCursor.jsx";
import Preloader from "./components/UI/Pre-Loader.jsx";

function App() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/*" element={<ProductDetails />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetails />} />
        <Route path="/collections/:collectionSlug" element={<Products />} />
        <Route path="/popular-products" element={<PopularProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />

        {/* Other extra routes for testing purpose */}
        <Route path="/demo" element={<ProductShowcase />} />
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
