import { useEffect, useRef, useState } from "react";

type ClientItem = {
  name: string;
  image: string;
};

const CLIENTS: ClientItem[] = [
  { name: "기후에너지환경부", image: "/assets/images/logo/기후에너지환경부.png" },
  { name: "국립환경과학원", image: "/assets/images/logo/국립환경과학원.png" },
  { name: "국토교통부", image: "/assets/images/logo/국토교통부.png" },
  { name: "한국환경산업기술원", image: "/assets/images/logo/한국환경산업기술원.png" },
  { name: "한국에너지공단", image: "/assets/images/logo/한국에너지공단.png" },
  { name: "한국환경공단", image: "/assets/images/logo/한국환경공단.png" },
  { name: "한국임업진흥원", image: "/assets/images/logo/한국임업진흥원.png" },
  { name: "한국생산기술연구원", image: "/assets/images/logo/한국생산기술연구원.png" },
  { name: "한국교통안전공단", image: "/assets/images/logo/한국교통안전공단.png" },
  { name: "한국도로공사", image: "/assets/images/logo/한국도로공사.png" },
  { name: "인천공항", image: "/assets/images/logo/인천공항.png" },
  { name: "한국서부발전", image: "/assets/images/logo/한국서부발전.png" },
  { name: "한국남동발전", image: "/assets/images/logo/한국남동발전.png" },
  { name: "한국지역난방공사", image: "/assets/images/logo/한국지역난방공사.png" },
  { name: "코레일", image: "/assets/images/logo/코레일.png" },
  { name: "국가철도공단", image: "/assets/images/logo/국가철도공단.png" },
  { name: "현대자동차", image: "/assets/images/logo/현대자동차.png" },
  { name: "현대모비스", image: "/assets/images/logo/현대모비스.png" },
  { name: "sk하이닉스", image: "/assets/images/logo/sk하이닉스.png" },
  { name: "삼성", image: "/assets/images/logo/삼성.png" },
  { name: "신한금융그룹", image: "/assets/images/logo/신한금융그룹.png" },
  { name: "LX하우시스", image: "/assets/images/logo/LX하우시스.png" },
  { name: "한화솔루션", image: "/assets/images/logo/한화솔루션.png" },
  { name: "유한킴벌린", image: "/assets/images/logo/유한킴벌린.png" },
  { name: "삼양식품", image: "/assets/images/logo/삼양식품.png" },
  { name: "코오롱인더스트리", image: "/assets/images/logo/코오롱인더스트리.png" },
];
export default function ClientsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
    const hasTriggeredRef = useRef(false);
    const timersRef = useRef<number[]>([]);
    const [shownCount, setShownCount] = useState(0);
  
    useEffect(() => {
  
      const section = sectionRef.current;
      if (!section) return;
  
      const clearAllTimers = () => {
        timersRef.current.forEach((timer) => window.clearTimeout(timer));
        timersRef.current = [];
      };
  
      const showClients = () => {
        if (hasTriggeredRef.current) return;
  
        const trigger = window.scrollY + window.innerHeight * 0.85;
        const sectionTop = window.scrollY + section.getBoundingClientRect().top;
  
        if (trigger > sectionTop) {
          CLIENTS.forEach((_, index) => {
            const timer = window.setTimeout(() => {
              setShownCount(index + 1);
            }, index * 60);
  
            timersRef.current.push(timer);
          });
  
          hasTriggeredRef.current = true;
        }
      };
  
      showClients();
      window.addEventListener("scroll", showClients);
  
      return () => {
        window.removeEventListener("scroll", showClients);
        clearAllTimers();
      };
    }, []);
  
    useEffect(() => {
     setShownCount(0);
        hasTriggeredRef.current = false;
        timersRef.current.forEach((timer) => window.clearTimeout(timer));
        timersRef.current = [];
    }, []);
  
    return (
      <section className="client-section" ref={sectionRef}>
        <div className="client-inner">
          <div className="client-head">
            <h2 className="client-title">주요 고객사</h2>
            <p className="client-desc">
              다년간 공공 및 민간 기업을 대상으로 전문적인 서비스를 제공하고
              있습니다.
            </p>
          </div>
  
          <div className="client-grid">
            {CLIENTS.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className={`client-item ${index < shownCount ? "show" : ""}`}
              >
                <img src={client.image} alt={client.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}