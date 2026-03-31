import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Cart from "./pages/Cart.jsx";
import NotFound from "./pages/NotFound.jsx";
import ProductShowcase from "./pages/ProductShowcase.jsx";
import CustomCursor from "./components/UI/CustomCursor.jsx";
import TermsConditions from "./pages/TermsConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import FAQ from "./pages/FAQ.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import WhyUsPage from "./pages/WhyUsPage.jsx";
import CartDrawer from "./components/CartDrawer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  useEffect(() => {
    const openDrawer = () => setCartDrawerOpen(true);
    const closeDrawer = () => setCartDrawerOpen(false);

    window.addEventListener("nekza:cart-drawer-open", openDrawer);
    window.addEventListener("nekza:cart-drawer-close", closeDrawer);

    return () => {
      window.removeEventListener("nekza:cart-drawer-open", openDrawer);
      window.removeEventListener("nekza:cart-drawer-close", closeDrawer);
    };
  }, []);

  return (
    <>
      {/* <Preloader /> */}
      <ScrollToTop />
      <CustomCursor />
      <Navbar />
      <CartDrawer open={cartDrawerOpen} onClose={() => setCartDrawerOpen(false)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/*" element={<ProductDetails />} />
        <Route path="/products/:categorySlug/:productSlug" element={<ProductDetails />} />
        <Route path="/collections/:collectionSlug" element={<Products />} />
        <Route path="/popular-products" element={<Navigate to="/collections/popular" replace />} />
        <Route path="/bestsellers" element={<Navigate to="/collections/bestseller" replace />} />
        <Route path="/new-arrivals" element={<Navigate to="/collections/new-arrivals" replace />} />
        <Route path="/pages/terms-and-conditions" element={ <TermsConditions /> } />
        <Route path="/pages/privacy-policy" element={ <PrivacyPolicy /> } />
        <Route path="/pages/faq" element={ <FAQ /> } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/whyus" element={<WhyUsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
