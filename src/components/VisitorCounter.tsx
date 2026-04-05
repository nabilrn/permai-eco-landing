import { useState, useEffect, useCallback, useRef } from "react";

type VisitorData = {
  lastVisitDate: string;
  lastVisitMonth: number;
  lastVisitYear: number;
  todayCount: number;
  monthCount: number;
  yearCount: number;
  totalCount: number;
  visitorToken?: string;
};

const VISITOR_STORAGE_KEY = "visitorData";
const VISITOR_TOKEN_KEY = "visitorToken";

const VisitorCounter = () => {
  const [counters, setCounters] = useState({
    today: 0,
    thisMonth: 0,
    thisYear: 0,
    total: 0,
  });

  const [animatedCounters, setAnimatedCounters] = useState({
    today: 0,
    thisMonth: 0,
    thisYear: 0,
    total: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const animateCounter = useCallback(
    (target: number, key: keyof typeof animatedCounters, delay: number = 0) => {
      setTimeout(() => {
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setAnimatedCounters((prev) => ({
            ...prev,
            [key]: Math.floor(current),
          }));
        }, 25);
      }, delay);
    },
    []
  );

  useEffect(() => {
    const getOrCreateVisitorToken = () => {
      const existingToken = localStorage.getItem(VISITOR_TOKEN_KEY);
      if (existingToken) return existingToken;

      const generatedToken = `visitor-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 10)}`;
      localStorage.setItem(VISITOR_TOKEN_KEY, generatedToken);
      return generatedToken;
    };

    const getVisitorData = () => {
      const today = new Date().toDateString();
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();
      const visitorToken = getOrCreateVisitorToken();

      const storedData = localStorage.getItem(VISITOR_STORAGE_KEY);
      const baseVisitorData: VisitorData = storedData
        ? (JSON.parse(storedData) as VisitorData)
        : {
            lastVisitDate: today,
            lastVisitMonth: currentMonth,
            lastVisitYear: currentYear,
            todayCount: 0,
            monthCount: 0,
            yearCount: 0,
            totalCount: 0,
          };

      const visitorData: VisitorData = { ...baseVisitorData };

      if (visitorData.lastVisitDate !== today) {
        visitorData.todayCount = 0;
        visitorData.lastVisitDate = today;
      }
      if (visitorData.lastVisitMonth !== currentMonth) {
        visitorData.monthCount = 0;
        visitorData.lastVisitMonth = currentMonth;
      }
      if (visitorData.lastVisitYear !== currentYear) {
        visitorData.yearCount = 0;
        visitorData.lastVisitYear = currentYear;
      }

      visitorData.totalCount = visitorData.totalCount ?? 0;

      const hasCountedThisVisitor = visitorData.visitorToken === visitorToken;
      const isNewDay =
        visitorData.lastVisitDate === today && visitorData.todayCount === 0;
      const isNewMonth =
        visitorData.lastVisitMonth === currentMonth &&
        visitorData.monthCount === 0;
      const isNewYear =
        visitorData.lastVisitYear === currentYear &&
        visitorData.yearCount === 0;

      if (!hasCountedThisVisitor || isNewDay) visitorData.todayCount += 1;
      if (!hasCountedThisVisitor || isNewMonth) visitorData.monthCount += 1;
      if (!hasCountedThisVisitor || isNewYear) visitorData.yearCount += 1;
      if (!hasCountedThisVisitor) visitorData.totalCount += 1;

      visitorData.visitorToken = visitorToken;
      localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(visitorData));

      return {
        today: visitorData.todayCount,
        thisMonth: visitorData.monthCount,
        thisYear: visitorData.yearCount,
        total: visitorData.totalCount,
      };
    };

    const data = getVisitorData();
    setCounters(data);
  }, []);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter(counters.today, "today", 0);
          animateCounter(counters.thisMonth, "thisMonth", 150);
          animateCounter(counters.thisYear, "thisYear", 300);
          animateCounter(counters.total, "total", 450);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [counters, hasAnimated, animateCounter]);

  const formatNumber = (num: number) => num.toLocaleString("id-ID");

  const stats = [
    { label: "Hari Ini", value: animatedCounters.today },
    { label: "Bulan Ini", value: animatedCounters.thisMonth },
    { label: "Tahun Ini", value: animatedCounters.thisYear },
    { label: "Total Pengunjung", value: animatedCounters.total },
  ];

  return (
    <section
      id="visitor-stats"
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-cream grain-overlay overflow-hidden"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section heading */}
        <div className="text-center mb-14 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-forest mb-4">
            Statistik Pengunjung
          </h2>
          <div className="w-10 h-[2px] bg-earth-warm mx-auto" />
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center items-center animate-on-scroll">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center">
              <div className="text-center px-6 sm:px-10 md:px-14 py-4">
                <div className="font-serif text-5xl md:text-6xl lg:text-[64px] text-forest-green mb-2 tabular-nums leading-none">
                  {formatNumber(stat.value)}
                </div>
                <div className="text-xs uppercase tracking-[0.15em] text-muted-text font-semibold">
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden md:block w-px h-12 bg-[#D4C9B0]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
