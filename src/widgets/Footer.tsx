import { useEffect, useState } from "react"


export default function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop >= 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 첫 진입시 1회 체크
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleGoTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
    <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <h2 className="footer-logo">
                        <img src="/assets/images/logo/logo.png" alt="SOLUTIS C&T" />
                    </h2>

                    <dl className="footer-info">
                        <div>
                            <dt>본사</dt>
                            <dd>본사 서울시 금천구 가산디지털1로 145, 806호</dd>
                        </div>
                        <div>
                            <dt>춘천</dt>
                            <dd>강원특별자치도 춘천시 공지로 387, 4층</dd>
                        </div>
                        <div>
                            <dt>대표번호</dt>
                            <dd>02-6951-5536</dd>
                        </div>
                    </dl>


                </div>

                
                <p className="footer-copy">Copyrights © 2026 SOLUTISC&T. all rights Reserved.</p>
            </div>
            <div className="fix-utilGroup">
                <button type="button" className="go-top-btn"><img src="/assets/images/top_btn.png" alt="최상단으로 이동" /></button>
            </div>
        </footer>
      <div className={`fix-utilGroup ${showTopButton ? "on" : ""}`}>
        <button type="button" className="go-top-btn" onClick={handleGoTo}>
          <img src="/assets/images/top_btn.png" alt="최상단으로 이동" />
        </button>
      </div>
    </>
  );
}
