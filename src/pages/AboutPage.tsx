import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Subvisual from "../widgets/common/SubVisual";
import AboutIntroTab from "../widgets/about/AboutIntroTab";
import AboutHistoryTab from "../widgets/about/AboutHistoryTab";
import AboutOrganizationTab from "../widgets/about/AboutOrganizationTab";
import AboutClientsTab from "../widgets/about/AboutClientsTab";
import AboutCiTab from "../widgets/about/AboutCiTab";

type AboutTabKey = "intro" | "history" | "organization" | "clients" | "ci";

const ABOUT_TABS: { key: AboutTabKey; label: string }[] = [
  { key: "intro", label: "회사소개" },
  { key: "history", label: "연혁" },
  { key: "organization", label: "조직도" },
  { key: "clients", label: "주요 고객사" },
  { key: "ci", label: "CI" },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<AboutTabKey>("intro");

  /**
   * SEO 텍스트 (탭별)
   */
  const SEO_MAP = {
    intro: {
      title: "회사소개 | 솔루티스 C&T",
      description:
        "솔루티스 C&T는 환경 컨설팅, ESG 대응, 탄소중립 및 전과정평가(LCA) 전문 기업으로 지속가능한 미래를 위한 솔루션을 제공합니다.",
    },
    history: {
      title: "연혁 | 솔루티스 C&T",
      description:
        "솔루티스 C&T의 성장 과정과 주요 사업 이력을 통해 환경 컨설팅 전문 기업으로서의 발자취를 확인해보세요.",
    },
    organization: {
      title: "조직도 | 솔루티스 C&T",
      description:
        "솔루티스 C&T의 조직 구성과 전문 인력 구조를 통해 체계적인 환경 컨설팅 역량을 확인하실 수 있습니다.",
    },
    clients: {
      title: "주요 고객사 | 솔루티스 C&T",
      description:
        "솔루티스 C&T는 다양한 기업 및 기관과 협력하여 환경 컨설팅 및 ESG 서비스를 제공하고 있습니다.",
    },
    ci: {
      title: "CI 소개 | 솔루티스 C&T",
      description:
        "솔루티스 C&T의 CI는 지속가능성과 신뢰를 바탕으로 한 기업 아이덴티티를 담고 있습니다.",
    },
  };

  const currentSEO = SEO_MAP[activeTab];

  return (
    <>
    {/* ✅ SEO 영역 */}
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />

        {/* canonical (실제 도메인으로 교체 필수) */}
        <link rel="canonical" href="https://www.solutiscnt/about" />
      </Helmet>
      <Subvisual title="소개" desc="About us" backgroundClass="about" />

      <div className="sub-container">
        <div className="about-wrap">
          <div className="tabs">
            <div className="tab-list" role="tablist" aria-label="소개 탭">
              {ABOUT_TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-controls={`tab-panel-${tab.key}`}
                    id={`tab-${tab.key}`}
                    className={`item ${isActive ? "active" : ""}`}
                    onClick={() => {
                      setActiveTab(tab.key);
                    }}
                  >
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="tab-conts">
              <div
                role="tabpanel"
                aria-labelledby="tab-intro"
                id="tab-panel-intro"
                className={`tab-panel ${activeTab === "intro" ? "active" : ""}`}
                hidden={activeTab !== "intro"}
              >
                <AboutIntroTab isActive={activeTab === "intro"} />
              </div>
              <div
                role="tabpanel"
                id="tab-panel-history"
                aria-labelledby="tab-history"
                className={`tab-panel history-panel ${activeTab === "history" ? "active" : ""}`}
                hidden={activeTab !== "history"}
              >
                <AboutHistoryTab isActive={activeTab === "history"} />
              </div>

              <div
                role="tabpanel"
                id="tab-panel-organization"
                aria-labelledby="tab-organization"
                className={`tab-panel ${activeTab === "organization" ? "active" : ""}`}
                hidden={activeTab !== "organization"}
              >
                <AboutOrganizationTab />
              </div>

              <div
                role="tabpanel"
                id="tab-panel-clients"
                aria-labelledby="tab-clients"
                className={`tab-panel ${activeTab === "clients" ? "active" : ""}`}
                hidden={activeTab !== "clients"}
              >
                <AboutClientsTab isActive={activeTab === "clients"} />
              </div>

              <div
                role="tabpanel"
                id="tab-panel-ci"
                aria-labelledby="tab-ci"
                className={`tab-panel ${activeTab === "ci" ? "active" : ""}`}
                hidden={activeTab !== "ci"}
              >
                <AboutCiTab isActive={activeTab === "ci"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
