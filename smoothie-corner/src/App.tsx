import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/sections/Footer";
import FloatingWhatsApp from "./components/ui/FloatingWhatsApp";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollToTop from "./components/navigation/ScrollToTop";
import { useLenis } from "./hooks/useLenis";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

function SiteChrome() {
  useLenis();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <HashRouter>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className={loading ? "hidden" : ""}>
        <SiteChrome />
      </div>
    </HashRouter>
  );
}
