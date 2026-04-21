import { useEffect } from "react";
import AOS from "aos";

import { Outlet } from "react-router-dom";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import ScrollToTop from "../shared/lib/ScrollToTop";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
    <ScrollToTop />
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
