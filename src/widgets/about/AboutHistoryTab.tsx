import { useEffect, useRef, useState } from "react";

type AboutHistoryTabProps = {
  isActive: boolean;
};

type HistoryItem = {
  year: string;
  decade: string;
  items: {
    month: string;
    text: string;
  }[];
};

const HISTORY_DATA: HistoryItem[] = [
  {
    year: "2025",
    decade: "2020s",
    items: [
      {
        month: "05",
        text: "(주)솔루티스로부터 인적분할하여 (주)솔루티스씨앤티 설립",
      },
    ],
  },
  {
    year: "2022",
    decade: "2020s",
    items: [{ month: "02", text: "기후환경전략본부 신설" }],
  },
  {
    year: "2021",
    decade: "2020s",
    items: [
      {
        month: "03",
        text: "본사 이전 (구로디지털단지 → 가산디지털단지)",
      },
    ],
  },
  {
    year: "2019",
    decade: "2010s",
    items: [{ month: "06", text: "서울형 강소기업 인증" }],
  },
  {
    year: "2018",
    decade: "2010s",
    items: [{ month: "12", text: "가족친화인증" }],
  },
  {
    year: "2017",
    decade: "2010s",
    items: [
      { month: "01", text: "신규법인 전환(자본금 2.5억원)" },
      { month: "02", text: "(주)와이즈21(舊 솔루티스)로부터 영업양수도" },
      { month: "12", text: "벤처기업인증(중소기업진흥공단)" },
    ],
  },
  {
    year: "2013",
    decade: "2010s",
    items: [
      { month: "02", text: "환경컨설팅협회 회원사 등록" },
      { month: "11", text: "중소기업기술혁신협회 회원(Inno-biz 인증)" },
    ],
  },
  {
    year: "2010",
    decade: "2010s",
    items: [
      { month: "02", text: "LG CNS 특화 업체 등록" },
      { month: "03", text: "삼성SDS Partner 등록" },
    ],
  },
  {
    year: "2009",
    decade: "2009s",
    items: [{ month: "01", text: "(주)솔루티스 설립" }],
  },
];

export default function AboutHistoryTab({ isActive }: AboutHistoryTabProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const sideRef = useRef<HTMLDivElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const [currentDecade, setCurrentDecade] = useState("2020s");
  const [progressHeight, setProgressHeight] = useState(0);
  const [currentRowIndex, setCurrentRowIndex] = useState(0);
  const [stickyStyle, setStickyStyle] = useState<React.CSSProperties>({});

  // const firstDecade = useMemo(() => HISTORY_DATA[0]?.decade ?? "2020s", []);

  useEffect(() => {
    if (!isActive) return;

    // setCurrentDecade(firstDecade);

    const stickyTop = 120;

    const updateHistory = () => {
      const section = sectionRef.current;
      const side = sideRef.current;
      const sticky = stickyRef.current;
      const timeline = timelineRef.current;
      const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];

      if (!section || !side || !sticky || !timeline || rows.length === 0)
        return;

      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const sectionRect = section.getBoundingClientRect();
      const sectionTop = scrollTop + sectionRect.top;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      const stickyHeight = sticky.offsetHeight;
      const fixedStart = sectionTop - stickyTop;
      const fixedEnd = sectionBottom - stickyTop - stickyHeight;

      if (window.innerWidth <= 768) {
        setStickyStyle({});
      } else {
        if (scrollTop < fixedStart) {
          setStickyStyle({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          });
        } else if (scrollTop >= fixedStart && scrollTop < fixedEnd) {
          const sideRect = side.getBoundingClientRect();

          setStickyStyle({
            position: "fixed",
            top: stickyTop,
            left: sideRect.left,
            width: side.offsetWidth,
          });
        } else {
          setStickyStyle({
            position: "absolute",
            top: sectionHeight - stickyHeight,
            left: 0,
            width: "100%",
          });
        }
      }

      const triggerLine = scrollTop + windowHeight * 0.45;

      let foundIndex = 0;
      // let foundDecade = rows[0].dataset.decade || firstDecade;

      rows.forEach((row, index) => {
        const rowTop = scrollTop + row.getBoundingClientRect().top;
        const rowHeight = row.offsetHeight;
        const rowMiddle = rowTop + rowHeight * 0.35;

        if (triggerLine >= rowMiddle) {
          foundIndex = index;
          // foundDecade = row.dataset.decade || firstDecade;
        }
      });

      setCurrentRowIndex(foundIndex);
      // setCurrentDecade(foundDecade);

      const timelineRect = timeline.getBoundingClientRect();
      const timelineTop = scrollTop + timelineRect.top;
      const timelineHeight = timeline.offsetHeight;

      const baseTop = 10;
      const baseBottom = 20;
      const maxHeight = Math.max(0, timelineHeight - baseBottom);

      let nextProgressHeight = triggerLine - timelineTop - baseTop;
      nextProgressHeight = Math.max(0, Math.min(nextProgressHeight, maxHeight));

      setProgressHeight(nextProgressHeight);
    };

    updateHistory();

    window.addEventListener("scroll", updateHistory);
    window.addEventListener("resize", updateHistory);

    const timers = [
      window.setTimeout(updateHistory, 30),
      window.setTimeout(updateHistory, 120),
      window.setTimeout(updateHistory, 250),
    ];

    return () => {
      window.removeEventListener("scroll", updateHistory);
      window.removeEventListener("resize", updateHistory);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [isActive]);

  return (
    <section className="history-section">
      <p className="about-eyebrow type">연혁</p>

      <div className="history-img">
        <dl>
          <dt>솔루티스씨앤티가 걸어온 길</dt>
          <dd>
            ㈜솔루티스씨앤티는 2009년 설립된 ㈜솔루티스를 모기업으로 하고
            있으며,
            <br />
            2025년 ㈜솔루티스의 컨설팅부문을 인적분할 하여 설립한 회사입니다.
          </dd>
        </dl>
      </div>

      <section className="history-decade-section" ref={sectionRef}>
        <div className="history-decade-inner">
          <div className="history-decade-sidee" ref={sideRef}>
            <div
              className="history-decade-sticky"
              ref={stickyRef}
              style={stickyStyle}
            >
              <strong className="history-decade-current">
                {/* {currentDecade} */}
              </strong>
            </div>
          </div>

          <div className="history-decade-content">
            <div className="history-timeline" ref={timelineRef}>
              <span className="history-timeline-base"></span>
              <span
                className="history-timeline-progress"
                style={{ height: `${progressHeight}px` }}
              ></span>

              {HISTORY_DATA.map((row, index) => {
                const isPast = index < currentRowIndex;
                const isCurrent = index === currentRowIndex;

                return (
                  <div
                    key={`${row.year}-${index}`}
                    ref={(el) => {
                      rowRefs.current[index] = el;
                    }}
                    className={`history-row ${isPast ? "is-past" : ""} ${isCurrent ? "is-current" : ""}`}
                    data-decade={row.decade}
                  >
                    <div className="history-year">{row.year}</div>

                    <div className="history-body">
                      <ul>
                        {row.items.map((item, itemIndex) => (
                          <li key={`${row.year}-${item.month}-${itemIndex}`}>
                            <span className="month">{item.month}</span>
                            <span className="text">{item.text}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
