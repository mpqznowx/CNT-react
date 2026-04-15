import { NavLink } from "react-router-dom";
import {useRef, useState} from "react";

type ServiceCardItem = {
  id: number;
  className: string;
  delay: number;
  frontTitle: React.ReactNode;
  backTitle: React.ReactNode;
  backDesc: React.ReactNode;
};

const serviceCards : ServiceCardItem[] = [
     {
    id: 1,
    className: "service-card-01",
    delay: 300,
    frontTitle: (
      <>
        기후·
        <br />
        환경정책
      </>
    ),
    backTitle: (
      <>
        기후·
        <br />
        환경정책
      </>
    ),
    backDesc: (
      <>
        ESG·지속가능경영,
        <br />
        환경성평가, ISCC,
        <br />
        CBAM 등 환경규제 및
        <br />
        인증 대응을 위한 맞춤
        <br />
        컨설팅을 제공합니다.
      </>
    ),
  },
  {
    id: 2,
    className: "service-card-02",
    delay: 600,
    frontTitle: (
      <>
        제품 환경성평가
      </>
    ),
    backTitle: (
      <>
        제품 환경성평가
      </>
    ),
    backDesc: (
      <>
        ESG·지속가능경영,
        <br />
        환경성평가, ISCC,
        <br />
        CBAM 등 환경규제 및
        <br />
        인증 대응을 위한 맞춤
        <br />
        컨설팅을 제공합니다.
      </>
    ),
  },
  {
    id: 3,
    className: "service-card-03",
    delay: 1000,
    frontTitle: (
      <>
        ESG 전략 수립 및 환경정책 연구
      </>
    ),
    backTitle: (
      <>
        ESG 전략 수립 및 환경정책 연구
      </>
    ),
    backDesc: (
      <>
        제품 및 서비스가 환경에
        <br />
        미치는 전 과정을 분석해
        <br />
        평가를 수행합니다.
      </>
    ),
  },
  {
    id: 4,
    className: "service-card-04",
    delay: 1300,
    frontTitle: (
      <>
        환경 인증 컨설팅
      </>
    ),
    backTitle: <>환경 인증 컨설팅</>,
    backDesc: (
      <>
        온실가스 배출관리,
        <br />
        배출량 검증 등 온실가스
        <br />
        감축을 위한 컨설팅을
        <br />
        제공합니다.
      </>
    ),
  },
  {
    id: 5,
    className: "service-card-05",
    delay: 1600,
    frontTitle: (
      <>
        환경 IT 솔루션
      </>
    ),
    backTitle: (
      <>
        환경 IT 솔루션
      </>
    ),
    backDesc: (
      <>
        환경 데이터 기반 맞춤
        <br />
        웹플랫폼을 기획하고
        <br />
        구축합니다.
      </>
    ),
  },
]


export default function ServiceSection() {

    // 스크롤 전체 div 컨테이너 1개
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft]  = useState(0);
    // const [moved, setMoved] = useState(false);

    const handleMouseDown = (e : React.MouseEvent) => {
        if(!scrollRef.current) return;

        setIsDown(true);
        setStartX(e.pageX);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDown(false);
    }

    const handleMouseUp = () => {
        setIsDown(false);
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if(!isDown || !scrollRef.current) return;

        e.preventDefault();

        const walk = e.pageX - startX;

        // if(Math.abs(walk) > 5){
        //     setMoved(true)
        // }

        scrollRef.current.scrollLeft = scrollLeft - walk;
    }

  return (
    <div className="sec02">
      <section className="service-section">
        <div className="service-inner">
          <p
            className="service-eyebrow"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Our Services
          </p>
          <h2 className="service-title" data-aos="fade-up" data-aos-delay="400">
            제공 서비스
          </h2>
          <p className="service-desc" data-aos="fade-up" data-aos-delay="500">
            최고의 전문성으로 기업과 공공을 위한 환경 컨설팅을 제공합니다.
          </p>

          <div 
            className="service-card-scroll"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="service-card-list">
              {serviceCards.map((card) => (
                <div
                    key={card.id}
                  className="service-card-box"
                  data-aos="fade-up"
                  data-aos-delay={card.delay}
                >
                  <NavLink to="/business" className={`service-card ${card.className}`}>
                    <div className="service-card-front">
                      <strong className="service-card-title">
                        {card.frontTitle}
                      </strong>
                      <span className="service-card-arrow"></span>
                    </div>

                    <div className="service-card-back">
                      <strong className="service-card-back-title">
                        {card.backTitle}
                      </strong>
                      <p className="service-card-back-desc">
                        {card.backDesc}
                      </p>
                      <span className="service-card-arrow"></span>
                    </div>
                  </NavLink>

                  <img
                    src="/assets/images/sec02/carc-shadow.png"
                    className="shadow"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
