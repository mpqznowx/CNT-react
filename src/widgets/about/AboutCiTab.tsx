import { useEffect, useRef, useState } from "react";

type AboutCiTabProps = {
  isActive: boolean;
};

export default function AboutCiTab({ isActive }: AboutCiTabProps) {
  const panelRef = useRef<HTMLElement | null>(null);
  const mainBoxRef = useRef<HTMLDivElement | null>(null);
  const subWrapRef = useRef<HTMLDivElement | null>(null);

  const [introShown, setIntroShown] = useState(false);
  const [mainShown, setMainShown] = useState(false);
  const [subShown, setSubShown] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    let timers: number[] = [];

    if (!introShown) {
      const timer = window.setTimeout(() => {
        
        setIntroShown(true);
      }, 80);

      timers.push(timer);
      
    }

    const checkCiScrollAnimation = () => {
      if (!panelRef.current) return;

      const winTop = window.scrollY;
      const winHeight = window.innerHeight;
      const triggerLine = winTop + winHeight * 0.75;

      if (!mainShown && mainBoxRef.current) {
        const mainTop =
          winTop + mainBoxRef.current.getBoundingClientRect().top;

        if (triggerLine > mainTop) {
          setMainShown(true);
        }
      }

      if (!subShown && subWrapRef.current) {
        const subTop = winTop + subWrapRef.current.getBoundingClientRect().top;

        if (triggerLine > subTop) {
          setSubShown(true);
        }
      }
    };

    checkCiScrollAnimation();

    window.addEventListener("scroll", checkCiScrollAnimation);
    window.addEventListener("resize", checkCiScrollAnimation);

    return () => {
      window.removeEventListener("scroll", checkCiScrollAnimation);
      window.removeEventListener("resize", checkCiScrollAnimation);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isActive, introShown, mainShown, subShown]);

  useEffect(() => {
    if (!isActive) {
      setIntroShown(false);
      setMainShown(false);
      setSubShown(false);
    }
  }, [isActive]);

  return (
    <section className="ci-section" ref={panelRef}>
      <div className="ci-inner">
        <div className="ci-head">
          <h2 className={`ci-title ci-animate ${introShown ? "show" : ""}`}>
            CI
          </h2>

          <p className={`ci-slogan ci-animate ${introShown ? "show" : ""}`}>
            CI Concept
          </p>

          <p className={`ci-desc ci-animate ${introShown ? "show" : ""}`}>
            슬로건 : “신뢰를 바탕으로 환경을 설계하다” <br />
            솔루티스씨앤티는
            <br />
            신뢰와 전문성을 기반으로 고객에게 환경 컨설팅 솔루션을 제공합니다.
            <br />
            로고는 이러한 가치를 색상과 형태로 직관적으로 전달하도록
            설계되었습니다.
          </p>

          <p className={`ci-slogan ci-animate ${introShown ? "show" : ""}`}>
            색상의미
          </p>

          <p className={`ci-desc ci-animate ${introShown ? "show" : ""}`}>
            남색 : 신뢰와 안정의 상징
          </p>

          <p className={`ci-desc ci-animate ${introShown ? "show" : ""}`}>
            하늘색 : 개방적이고 지속 가능한 이미지
          </p>
        </div>

        <div
          className={`ci-main-box ${mainShown ? "show" : ""}`}
          ref={mainBoxRef}
        >
          <img
            src="/assets/images/about/ci-logo-main.png"
            alt="SOLUTISC&T 로고"
          />
        </div>

        <div className="ci-sub-wrap" ref={subWrapRef}>
          <div
            className={`ci-sub-item left ${subShown ? "show" : ""}`}
          >
            <p className="ci-sub-title">국문형</p>
            <div className="ci-sub-box">
              <img
                src="/assets/images/about/ci-logo-ko.png"
                alt="솔루티스씨앤티 로고"
              />
            </div>
          </div>

          <div
            className={`ci-sub-item right ${subShown ? "show" : ""}`}
          >
            <p className="ci-sub-title">활용형_국문</p>
            <div className="ci-sub-box">
              <img
                src="/assets/images/about/ci-logo-ko-sub.png"
                alt="솔루티스씨앤티 Solutis Consulting & Technology 로고"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}