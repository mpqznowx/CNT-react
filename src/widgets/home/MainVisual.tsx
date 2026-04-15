import React, { useEffect, useState } from "react";
import SliderImport from "react-slick";

const SliderComponent = ((SliderImport as any).default ??
  SliderImport) as React.ComponentType<any>;

type EnvValueDesc = {
  id: number;
  envTitle: string;
  envDesc: React.ReactNode;
};

const EnvCards: EnvValueDesc[] = [
  {
    id: 1,
    envTitle: "전문성",
    envDesc: (
      <>
        빠르게 변화하는 환경 이슈에
        <br />
        대응하기 위해 기술적 전문성을
        <br />
        바탕으로 정확한 솔루션을
        <br />
        제공하겠습니다.
      </>
    ),
  },
  {
    id: 2,
    envTitle: "신뢰",
    envDesc: (
      <>
        지식과 기술만을 전달하는
        <br />
        컨설팅을 넘어 고객의 신뢰를
        <br />
        최우선으로 생각하겠습니다.
      </>
    ),
  },
  {
    id: 3,
    envTitle: "도전",
    envDesc: (
      <>
        기존의 방식이 아닌
        <br />
        새로운 환경솔루션을
        <br />
        제공하겠습니다.
      </>
    ),
  },
  {
    id: 4,
    envTitle: "소통",
    envDesc: (
      <>
        고객과의 소통을 우선으로 하여
        <br />
        맞춤 솔루션을 제공하겠습니다.
      </>
    ),
  },
];

export default function MainVisual() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
  const timer = window.setTimeout(() => {
    setActiveIndex(0);
  }, 200);

  return () => window.clearTimeout(timer);
}, []);

  

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 0,
    fade: true,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    swipe: false,
    draggable: false,
    touchMove: false,
    adaptiveHeight: false,
    beforeChange: (_current: number, next: number) => {
      setActiveIndex(next);
    },
  };

  return (
    <div className="sec01">
      <div className="visual-wrap">
        <div className="visual-inner">
          <div className="visual-box">
            <SliderComponent {...settings}>
              <div className="visual-item">
                <div className="visual-item-bg bg01"></div>
              </div>
              <div className="visual-item">
                <div className="visual-item-bg bg01"></div>
              </div>
              <div className="visual-item">
                <div className="visual-item-bg bg01"></div>
              </div>
              <div className="visual-item">
                <div className="visual-item-bg bg01"></div>
              </div>
            </SliderComponent>
          </div>

          <div
            className="visual-item-box"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="visual-title">
              <p>신뢰를 바탕으로</p>
              <h2>환경을 설계하다</h2>
            </div>

            <p className="visual-desc">
              전문성과 신뢰를 기반으로
              <br className="pc" />
              기업과 공공을 위한 환경 컨설팅 솔루션을 제공합니다.
            </p>
          </div>

          <div className="env-values" >
            

            {EnvCards.map((card, index) => (
              <div
                key={card.id}
                
                className={`env-value-card ${
                  activeIndex === index ? "is-active" : ""
                }`}
                data-slide={card.id}
              >
                <strong className="env-value-title">{card.envTitle}</strong>
                <p className="env-value-desc">{card.envDesc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="visual-bg bg01"></div>
        <div className="visual-bg bg02"></div>
        <div className="visual-bg bg03"></div>
      </div>
    </div>
  );
}
