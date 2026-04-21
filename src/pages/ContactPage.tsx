import { useState } from "react";
import { Helmet } from "react-helmet-async";

import Subvisual from "../widgets/common/SubVisual";
import ContactMainTab from "../widgets/contact/ContactMainTab";
import ContactSubTab from "../widgets/contact/ContactSubTab";

type ContactTabKey = "main" | "sub";

const CONTACT_TABS: { key: ContactTabKey; label: string }[] = [
  { key: "main", label: "본사" },
  { key: "sub", label: "춘천" },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<ContactTabKey>("main");

  const SEO_MAP = {
    main: {
      title: "문의처 | 본사 안내 | 솔루티스 C&T",
      description:
        "솔루티스 C&T 본사 문의처 안내입니다. 환경 컨설팅, ESG, 탄소중립, 전과정평가(LCA) 관련 상담은 대표전화와 이메일로 문의하실 수 있습니다.",
    },
    sub: {
      title: "문의처 | 춘천 안내 | 솔루티스 C&T",
      description:
        "솔루티스 C&T 춘천 문의처 안내입니다. 사업영역 및 서비스 관련 상담 문의 정보를 확인하실 수 있습니다.",
    },
  };

  const currentSEO = SEO_MAP[activeTab];

  return (
    <>
      <Helmet>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <link rel="canonical" href="https://www.your-domain.com/contact" />

      </Helmet>
      <Subvisual title="문의처" desc="Contact us" backgroundClass="contact" />
      <div className="sub-container">
        <div className="contact-bottom">
          <div className="contact-bottom-inner">
            <div className="bg01"></div>
            <div className="bg02"></div>
            <div className="bg03"></div>

            <div className="contact-banner-text">
              <h2 className="contact-banner-title">
                <img
                  src="/assets/images/contact/quotes-left.png"
                  alt=""
                  className="quote quote-left"
                />
                <img
                  src="/assets/images/contact/quotes-right.png"
                  alt=""
                  className="quote quote-right"
                />
                당사의 <span className="point">사업영역 및 서비스</span> 관련
                문의는
                <br />
                대표전화로 연락 주시기 바랍니다.
              </h2>
              <p className="contact-banner-desc">
                정확한 상담을 위해 상담 문의를 이용해 주시면 보다 신속히
                안내드리겠습니다.
              </p>
            </div>

            <div className="contact-banner-info">
              <a href="tel:0269515535" className="info-link">
                대표전화 : 02-6951-5536
              </a>
              <span className="info-divider" aria-hidden="true"></span>
              <a href="mailto:info@solutiscnt.co.kr" className="info-link">
                info@solutiscnt.co.kr
              </a>
            </div>
          </div>
        </div>
        <div className="contact-wrap">
          <div className="tabs">
            <div className="tab-list" role="tablist" aria-label="문의처 탭">
              {CONTACT_TABS.map((tab) => {
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
                aria-labelledby="tab-main"
                id="tab-main"
                className={`tab-panel ${activeTab === "main" ? "active" : ""}`}
                hidden={activeTab !== "main"}
              >
                <ContactMainTab />
              </div>
              <div
                role="tabpanel"
                aria-labelledby="tab-sub"
                id="tab-sub"
                className={`tab-panel ${activeTab === "sub" ? "active" : ""}`}
                hidden={activeTab !== "sub"}
              >
                <ContactSubTab />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
