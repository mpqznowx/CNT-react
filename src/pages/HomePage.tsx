import { Helmet } from "react-helmet-async";

import MainVisual from "../widgets/home/MainVisual";
import ServiceSection from "../widgets/home/ServiceSection";
import ClientsSection from "../widgets/home/ClientsSection";

export default function HomePage() {
  return (
    <>
      {/* SEO (메인 페이지) */}
      <Helmet>
        <title>솔루티스 C&T | 환경 컨설팅 · ESG · 탄소중립</title>

        <meta
          name="description"
          content="솔루티스 C&T는 환경 컨설팅, ESG 대응, 탄소중립 및 전과정평가(LCA) 전문 기업으로 기업의 지속가능한 성장을 지원합니다."
        />
        <meta property="og:title" content="솔루티스 C&T" />
        <meta property="og:description" content="환경 컨설팅 전문 기업" />

        {/* ✔ 실제 도메인으로 변경 필수 */}
        <link rel="canonical" href="https://www.your-domain.com/" />
      </Helmet>
      <MainVisual />
      <ServiceSection />
      <ClientsSection />
    </>
  );
}
