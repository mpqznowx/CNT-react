import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "header is-scrolled" : "header"}>
      <div className="header-inner">
        <h1 className="logo">
          <NavLink to="/" end onClick={closeMobileMenu}>
            <img src="/assets/images/logo/logo.png" alt="solutis C&T" />
          </NavLink>
        </h1>

        <nav className="nav">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            소개
          </NavLink>
          <NavLink
            to="/business"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            사업영역
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            문의처
          </NavLink>
        </nav>

        <button
          type="button"
          className="mo-menu-btn"
          aria-label="메뉴 열기"
          onClick={openMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mo-nav-wrap ${isMobileMenuOpen ? "is-open" : ""}`}>
        <div className="mo-nav-dim" onClick={closeMobileMenu}></div>

        <div className="mo-nav-panel">
          <div className="mo-nav-head">
            <button
              type="button"
              className="mo-menu-close"
              aria-label="메뉴 닫기"
              onClick={closeMobileMenu}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <nav className="mo-nav">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileMenu}
            >
              소개
            </NavLink>
            <NavLink
              to="/business"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileMenu}
            >
              사업영역
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMobileMenu}
            >
              문의처
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}