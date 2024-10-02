import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed p-3 text-white transition-opacity border rounded-full shadow-xl bottom-4 right-4 bg-primary-purple hover:opacity-80 border-primary-pink"
        aria-label="Scroll to top"
      >
        <FaChevronUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
