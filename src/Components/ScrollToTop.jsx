import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const [isShowScroll, setIsShowScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) setIsShowScroll(true);
      else setIsShowScroll(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //when route change
  useEffect(() => {
    console.log(location);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <button
        onClick={scrollToTop}
        className={` fixed md:bottom-10 md:right-12 bottom-8 right-6 bg-blue-400 rounded-full p-3 text-white transition-all duration-200 
         ${isShowScroll ? "opacity-100" : "opacity-0 translate-y-5"}
        `}
      >
        <ArrowUpFromDot size={32} />
      </button>
    </>
  );
};

export default ScrollToTop;
