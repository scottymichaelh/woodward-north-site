import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import Insights from "./pages/Insights";
import Faq from "./pages/Faq";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div style={{ background: "var(--wn-bg)" }}>
      <ScrollToTop />
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}
