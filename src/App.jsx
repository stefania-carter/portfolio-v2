import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Cursor from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dock from "./components/Dock";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";
import PortfolioDetail from "./views/PortfolioDetail";
import Gallery from "./views/Gallery";
import NotFound from "./views/NotFound";
import Privacy from "./views/Privacy";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy" element={<Privacy />} />;
      </Routes>
      <Dock />
      <Footer />
    </BrowserRouter>
  );
}
