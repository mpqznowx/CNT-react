
import { useState } from "react";
import Subvisual from "../widgets/common/SubVisual"
import ContactMainTab from "../widgets/contact/ContactMainTab"
import ContactSubTab from "../widgets/contact/ContactSubTab"


type ContactTabKey = "main" | "sub";

const CONTACT_TABS :{key : ContactTabKey; label : string}[] = [
    {key : "main", label : "본사"},
    {key : "sub", label : "춘천"},
]

export default function ContactPage(){
    const [activeTab, setActiveTab] = useState<ContactTabKey>("main");

    return(
        <>
            <Subvisual title="문의처" desc="Contact us" backgroundClass="contact"/>
            <div className="sub-container">
                    <div className="contact-bottom">
                        <div className="contact-bottom-inner">
                            <div className="bg01"></div>
                            <div className="bg02"></div>
                            <div className="bg03"></div>

                            <div className="contact-banner-text">
                                
                                <h2 className="contact-banner-title">
                                    <img src="/assets/images/contact/quotes-left.png" alt="" className="quote quote-left" />
                                <img src="/assets/images/contact/quotes-right.png" alt="" className="quote quote-right" />
                                    <span className="point">솔루티스씨앤티</span> 에 궁금한 사항은<br />
                                    대표전화로 전화주시면 답변드리도록 하겠습니다.
                                </h2>
                                <p className="contact-banner-desc">
                                    더욱 정확한 상담을 원하신다면 상담 문의를 이용하시기 바랍니다.
                                </p>
                            </div>

                            <div className="contact-banner-info">
                                <a href="tel:0269515535" className="info-link">대표전화 : 02-6951-5535</a>
                                <span className="info-divider" aria-hidden="true"></span>
                                <a href="mailto:작성@solutiscnt.co.kr" className="info-link">info@solutiscnt.co.kr</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-wrap">
                    
                        <div className="tabs">
                    
                            <div className="tab-list">
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
                                        onClick={() => {setActiveTab(tab.key)}}
                                      >
                                        <span>{tab.label}</span>
                                      </button>
                                    );
                                })}
                                
                            </div>
                            
                            <div className="tab-conts">
                                <div role="tabpanel" aria-labelledby="tabList11" id="tabPanel11"
                                    className={`tab-panel ${activeTab === "main" ? "active" : ""}`} hidden={activeTab !== "main"}>
                                        <ContactMainTab/>
                                    
                                </div>
                                <div role="tabpanel" aria-labelledby="tabList12" id="tabPanel12" className={`tab-panel ${activeTab === "sub" ? "active" : ""}`} hidden={activeTab !== "sub"}>
                                        <ContactSubTab />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                </div>
        </>
    )
}