import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  window.scroll(0, 0);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
