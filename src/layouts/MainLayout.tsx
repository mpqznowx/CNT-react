import { useEffect } from "react";
import AOS from "aos";

import { Outlet } from "react-router-dom";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";

export default function MainLayout() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
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
