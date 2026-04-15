type OrganizationTabProps = {
  isActive?: boolean;
};

export default function AboutOrganizationTab({}: OrganizationTabProps) {
  return (
    <section className="organization-section">
      <div className="organization-inner">
        <div className="organization-head">
          <h2 className="organization-title">조직도</h2>
        </div>

        <div className="organization-chart">
          <img
            src="/assets/images/about/organization-chart.png"
            alt="솔루티스C&T 조직도"
            className="pc"
          />
          <img
            src="/assets/images/about/organization-chart-mo.png"
            alt="솔루티스C&T 조직도"
            className="mo"
          />
        </div>
      </div>
    </section>
  );
}