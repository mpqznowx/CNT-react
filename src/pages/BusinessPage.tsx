import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Subvisual from "../widgets/common/SubVisual";

type BusinessBullet = {
  title: string;
  desc?: string[];
};

type BusinessItem = {
  id: string;
  title: string;
  enTitle: string;
  summary: string;
  bullets: BusinessBullet[];
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

const BUSINESS_ITEMS: BusinessItem[] = [
  {
    id: "policy",
    title: "기후 · 환경정책",
    enTitle: "Climate & Environmental Policy",
    summary:
      "기업의 온실가스 배출 현황을 체계적으로 관리하고, 규제 대응부터 감축 전략까지 전 과정을 지원합니다.",
    bullets: [
      {
        title: "온실가스 배출관리계획 및 목표관리제 대응",
      },
      {
        title: "온실가스 인벤토리 구축 (Scope 1, 2, 3)",
      },
      {
        title: "온실가스감축 로드맵 및 탄소중립 전략 수립",
      },
      {
        title: "탄소 이니셔티브 대응",
        desc: ["CDP, SBTi, RE100 등"],
      },
      {
        title: "탄소 규제 대응",
        desc: ["CBAM 등"],
      },
    ],
    image: "/assets/images/business/1.png",
    imageAlt: "기후·환경정책 이미지",
    imagePosition: "left",
  },
  {
    id: "lca",
    title: "제품 환경성평가",
    enTitle: "Product Life Cycle Assessment (LCA)",
    summary:
      "원료 채취부터 제조, 유통, 사용, 폐기까지 제품의 전 생애주기(Cradle-to-Grave)에서 발생하는 환경 영향을 정량화하고, 이를 종합 환경성 개선 및 글로벌 규제 대응에 활용할 수 있도록 지원합니다.",
    bullets: [
      {
        title: "제품 및 서비스의 전과정평가 수행",
      },
      {
        title: "정부 및 공공기관의 환경 정책 및 제도 수립 지원",
        desc: ["ISO14067, Catena-X, TfS, A-LCA 등"],
      },
      {
        title: "LCIDB 구축",
      },
      {
        title: "PCR(Product Category Rule, 배출량산정지침) 개발",
      },
    ],
    image: "/assets/images/business/2.png",
    imageAlt: "제품 환경성평가 이미지",
    imagePosition: "right",
  },
  {
    id: "consulting",
    title: "ESG 전략 수립 및 환경정책 연구",
    enTitle: "ESG Strategy & Environmental Policy Research",
    summary:
      "기업에서 이해관계자의 ESG 경영 요구사항 대응을 위한 전략 수립을 지원하고, 정부와 공공기관에서 시행하는 정책의 개선 방향을 마련하여 새로운 정책 방향을 수립할 수 있는 연구 서비스를 제공합니다.",
    bullets: [
      {
        title: "정부 및 공공기관의 환경 정책 및 제도 수립 지원",
        desc: ["제품환경, 자연순환, 환경보건 정책 등"],
      },
      {
        title: "기업 ESG 진단 및 컨설팅",
      },
      {
        title: "기업 환경규제 대응 전략",
        desc: [
          "탄소국경조정제도(CBAM), EU 에코디자인규정(ESPR), 디지털제품여권(DPP) 등",
        ],
      },
      {
        title: "이해관계자 요구사항 대응",
        desc: ["환경정보공개, 지속가능경영보고서 등"],
      },
    ],
    image: "/assets/images/business/3.png",
    imageAlt: "ESG 전략 수립 및 환경정책 연구 이미지",
    imagePosition: "left",
  },
  {
    id: "cert",
    title: "환경 검․인증 컨설팅",
    enTitle: "Environmental Certification Consulting",
    summary:
      "이해관계자 요구사항에 대한 선제적 대응을 위해 LCA 기반의 제품 환경성평가 및 기업의 순환자원, 환경관리 체계 구축과 관련한 인증 컨설팅을 지원합니다.",
    bullets: [
      {
        title: "환경성적표지 인증",
      },
      {
        title: "해외 EPD 인증",
        desc: [
          "영국 카본트러스트 PCF/EPW, 글로벌 EPD, UL EPD 등",
          "ISCC GHG 검증",
        ],
      },
      {
        title: "자원순환 검․인증",
        desc: [
          "해외 GRS/RCS, ISCC EU/PLUS/CORSIA, UL ECV 인증, ISO 14021 검증",
          "국내 재생원료 관련 인증 등",
        ],
      },
      {
        title: "수자원관리 인증",
        desc: ["AWS(Alliance for Water Stewardship) 등"],
      },
    ],
    image: "/assets/images/business/4.png",
    imageAlt: "환경 인증 컨설팅 이미지",
    imagePosition: "right",
  },
  {
    id: "it",
    title: "환경 IT 솔루션",
    enTitle: "Environmental IT Solutions",
    summary:
      "환경기후·ESG 데이터를 효과적으로 관리하고 활용할 수 있도록 플랫폼 기획, ISP 수립, 콘텐츠 설계부터 개발까지 통합적으로 지원합니다.",
    bullets: [
      {
        title: "ISP(Information Strategy Planning, 정보화전략기획) 수립",
      },
      {
        title: "환경·기후·ESG 데이터 플랫폼 기획",
      },
      {
        title: "데이터 구조 및 운영 프로세스 설계",
      },
      {
        title: "정책·제도 기반 콘텐츠 기획·개발 및 서비스 제공",
      },
    ],
    image: "/assets/images/business/5.png",
    imageAlt: "환경 IT 솔루션 이미지",
    imagePosition: "left",
  },
];

type BusinessSectionItemProps = {
  item: BusinessItem;
  index: number;
};

function BusinessSectionItem({ item, index }: BusinessSectionItemProps) {
  const isImageLeft = item.imagePosition === "left";
  const itemRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const target = itemRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -80px 0px",
      },
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <article
      id={item.id}
      ref={itemRef}
      className={`business-info-item ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div
        className={`business-info-grid ${isImageLeft ? "image-left" : "image-right"}`}
      >
        <div className="business-info-image">
          <img src={item.image} alt={item.imageAlt} />
        </div>

        <div className="business-info-content">
          <p className="business-info-en-title">{item.enTitle}</p>
          <h3 className="business-info-title">{item.title}</h3>
          <p className="business-info-summary">{item.summary}</p>

          <ul className="business-info-list">
            {item.bullets.map((bullet, bulletIndex) => (
              <li key={`${item.id}-${bulletIndex}`}>
                <span className="business-info-bullet-title">
                  {bullet.title}
                </span>

                {bullet.desc && (
                  <span className="business-info-bullet-desc">
                    {bullet.desc.map((text, descIndex) => (
                      <span
                        key={descIndex}
                        className="business-info-bullet-desc-line"
                      >
                        {text}
                      </span>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function BusinessPage() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("section");
    if (!sectionId) return;

    const timer = window.setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const headerOffset = 100;
      const elementTop =
        target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementTop - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }, 100);

    return () => window.clearTimeout(timer);
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>사업영역 | 환경 컨설팅 · ESG · 탄소중립 | 솔루티스 C&T</title>
        <meta
          name="description"
          content="환경 컨설팅, 전과정평가(LCA), ESG 전략 수립, 탄소중립 대응, 환경 인증 및 IT 솔루션까지 솔루티스 C&T의 주요 사업영역을 소개합니다."
        />
        <link rel="canonical" href="https://www.solutiscnt/business" />
      </Helmet>

      <Subvisual
        title="사업영역"
        desc="Business area"
        backgroundClass="business"
      />

      <section className="business-info-section">
        <div className="inner">
          <p className="about-eyebrow type about-animate show">사업영역</p>

          <div className="business-info-list-wrap">
            {BUSINESS_ITEMS.map((item, index) => (
              <BusinessSectionItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}