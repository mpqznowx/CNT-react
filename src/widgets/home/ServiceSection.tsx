import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";

type ServiceCardItem = {
  id: number;
  className: string;
  delay: number;
  targetId: string;
  frontTitle: React.ReactNode;
  backTitle: React.ReactNode;
  backDesc: React.ReactNode;
};

const serviceCards: ServiceCardItem[] = [
  {
    id: 1,
    className: "service-card-01",
    delay: 300,
    targetId: "policy",
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
        감축 전략 수립까지 전 과정에 걸친 통합 지원을 제공합니다.
      </>
    ),
  },
  {
    id: 2,
    className: "service-card-02",
    delay: 600,
    targetId: "lca",
    frontTitle: (
      <>
        제품 환경성평가
        <br />
        (LCA)
      </>
    ),
    backTitle: (
      <>
        제품 환경성평가
        <br />
        (LCA)
      </>
    ),
    backDesc: (
      <>
        제품의 전 생애주기에서 발생하는 환경 영향을 정량적으로 분석하여, 환경성 개선과 글로벌 규제 대응을 지원합니다.
      </>
    ),
  },
  {
    id: 3,
    className: "service-card-03",
    delay: 1000,
    targetId: "consulting",
    frontTitle: <>ESG 전략 수립 및 환경정책 연구</>,
    backTitle: <>ESG 전략 수립 및 환경정책 연구</>,
    backDesc: (
      <>
        기업의 ESG 경영 요구에 대응하기 위한 전략 수립을 지원하고, 정부 및 공공기관을 대상으로 정책 개선과 신규 정책 방향 도출을 위한 연구 서비스를 제공합니다.
      </>
    ),
  },
  {
    id: 4,
    className: "service-card-04",
    delay: 1300,
    targetId: "cert",
    frontTitle: (
      <>
        환경 인증
        <br />
        컨설팅
      </>
    ),
    backTitle: (
      <>
        환경 인증
        <br />
        컨설팅
      </>
    ),
    backDesc: (
      <>
        LCA 기반의 제품 환경성평가와 기업 환경관리 체계 구축을 통해, 국내외 환경 인증 취득 및 이해관계자 요구에 대한 선제적 대응을 지원합니다.
      </>
    ),
  },
  {
    id: 5,
    className: "service-card-05",
    delay: 1600,
    targetId: "it",
    frontTitle: (
      <>
        환경 IT
        <br />
        솔루션
      </>
    ),
    backTitle: (
      <>
        환경 IT
        <br />
        솔루션
      </>
    ),
    backDesc: (
      <>
        환경·기후·ESG 데이터를 효과적으로 관리·활용할 수 있도록 플랫폼 기획, ISP 수립, 콘텐츠 설계부터 시스템 개발까지 통합적인 디지털 솔루션을 제공합니다.
      </>
    ),
  },
];

export default function ServiceSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    setIsDown(true);
    setStartX(e.pageX);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;

    e.preventDefault();

    const walk = e.pageX - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

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
                  <NavLink
                    to={`/business?section=${card.targetId}`}
                    className={`service-card ${card.className}`}
                  >
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
                      <p className="service-card-back-desc">{card.backDesc}</p>
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