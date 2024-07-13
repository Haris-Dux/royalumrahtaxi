import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import NotFound from "./components/NotFound";
import Header from "./layouts/Header";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Footer from "./layouts/Footer";
import { FaArrowUp } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Blog1 from "./pages/blogs/Blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToHash />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />

          {/* ---------- OTHER ROUTES ---------- */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
        </Routes>

        {showButton && (
          <button
            type="button"
            title="moveTop"
            onClick={handleTop}
            className="moveTop rounded-full px-3 py-3 bg-[#F0A202]"
          >
            <FaArrowUp size={21} className="text-white" />
          </button>
        )}

        <a
          title="whatsapp"
          href="https://api.whatsapp.com/send?phone=966574259637"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn flex items-center gap-2 rounded-full p-2 sm:p-3"
        >
          <FaWhatsapp size={31} />
        </a>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
