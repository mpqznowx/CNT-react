import { useState } from "react";
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

  return (
    <>
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
