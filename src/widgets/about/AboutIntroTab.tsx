import { useEffect, useRef, useState } from "react";

type AboutIntroTabProps = {
  isActive: boolean;
};

export default function AboutIntroTab({ isActive }: AboutIntroTabProps) {
  const timersRef = useRef<number[]>([]);

  const [shownIndexes, setShownIndexes] = useState<number[]>([]);
  const [highlightShown, setHighlightShown] = useState(false);

  useEffect(() => {
    if (!isActive) return;

    const clearAllTimers = () => {
      timersRef.current.forEach((timer) => window.clearTimeout(timer));
      timersRef.current = [];
    };

    clearAllTimers();
    setShownIndexes([]);
    setHighlightShown(false);

    const animationOrder = [0, 1, 2, 3, 4, 5];

    animationOrder.forEach((index, order) => {
      const timer = window.setTimeout(() => {
        setShownIndexes((prev) => [...prev, index]);
      }, order * 200);

      timersRef.current.push(timer);
    });

    const highlightTimer = window.setTimeout(() => {
      setHighlightShown(true);
    }, 300);

    timersRef.current.push(highlightTimer);

    return () => {
      clearAllTimers();
    };
  }, [isActive]);

  const isShown = (index: number) => shownIndexes.includes(index);

  return (
    <section className="about-section">
      <div className="about-inner">
        <p className={`about-eyebrow type about-animate ${isShown(0) ? "show" : ""}`}>
          회사소개
        </p>

        <h2 className={`about-title about-animate ${isShown(1) ? "show" : ""}`}>
          환경에 대한 전문적인 이해와 책임 있는 실행을 바탕으로
          <br />
          <span className={`under highlight ${highlightShown ? "active" : ""}`}>
            지속가능한 솔루션
          </span>
          을 <strong>만들어 가는 </strong>
          <span>(주)솔루티스씨앤티</span>입니다.
        </h2>

        <div className={`about-visual about-animate ${isShown(2) ? "show" : ""}`}>
          <img
            src="/assets/images/about/about-bg01.png"
            alt="빛나는 전구 이미지"
          />
        </div>

        <div className="about-text-box">
          <p className={`about-animate ${isShown(3) ? "show" : ""}`}>
            우리는 환경·에너지·기후 변화 대응을 단순한 과제가 아닌,
            <br />
            기업과 사회가 함께 해결해야 할 중요한 가치로 바라봅니다.
          </p>

          <p className={`about-animate ${isShown(4) ? "show" : ""}`}>
            정확한 정보의 이해를 바탕으로 한 <span>전문성</span>, 과정과 결과를
            투명하게 공유하는 <span>신뢰</span>,
            <br />
            현실에 안주하지 않고 새로운 솔루션을 찾기 위한 <span>도전</span>,
            고객과 함께 고민하는 <span>소통</span>을 핵심 가치로 삼고 있습니다.
          </p>

          <p className={`about-animate ${isShown(5) ? "show" : ""}`}>
            앞으로도 고객의 환경 파트너로서
            <br />
            <span>실질적인 도움이 되는 솔루션과 서비스를 제공</span>하며,
            <br />
            지속가능한 미래를 함께 만들어가겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
}