import { useState, useEffect, useCallback, useRef } from "react";

const VISITOR_STORAGE_KEY = "visitorData";
const VISITOR_TOKEN_KEY = "visitorToken";
const GLOBAL_COUNT_KEY = "globalVisitorCount";

// Using CountAPI as primary, with localStorage fallback
const COUNTER_API_BASE = "https://api.countapi.xyz";
const COUNTER_NAMESPACE = "permai-eco-landing";
const COUNTER_KEY_NAME = "total-visitors";

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
  const [isLoading, setIsLoading] = useState(true);

  const animateCounter = useCallback(
    (target: number, key: keyof typeof animatedCounters, delay: number = 0) => {
      setTimeout(() => {
        let current = 0;
        const increment = Math.max(1, target / 60);
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

    const incrementLocalCount = (currentData: any) => {
      const now = new Date();
      const today = now.toDateString();
      const currentMonth = now.getMonth();
      const currentYear = now.getFullYear();

      const todayCount = currentData.lastVisitDate === today ? (currentData.todayCount || 0) + 1 : 1;
      const monthCount =
        currentData.lastVisitMonth === currentMonth &&
        currentData.lastVisitYear === currentYear
          ? (currentData.monthCount || 0) + 1
          : 1;
      const yearCount =
        currentData.lastVisitYear === currentYear
          ? (currentData.yearCount || 0) + 1
          : 1;

      // Increment global count stored in localStorage
      const globalCount = (currentData.globalCount || 0) + 1;

      const newData = {
        lastVisitDate: today,
        lastVisitMonth: currentMonth,
        lastVisitYear: currentYear,
        todayCount,
        monthCount,
        yearCount,
        total: globalCount,
        globalCount,
        visitorToken: currentData.visitorToken,
      };

      localStorage.setItem(VISITOR_STORAGE_KEY, JSON.stringify(newData));
      return newData;
    };

    const fetchVisitorCount = async () => {
      try {
        // Try to use CountAPI first
        const incrementUrl = `${COUNTER_API_BASE}/hit/${COUNTER_NAMESPACE}/${COUNTER_KEY_NAME}`;
        const response = await fetch(incrementUrl, { 
          method: "GET",
          signal: AbortSignal.timeout(5000) // 5 second timeout
        });

        if (!response.ok) {
          throw new Error("CountAPI failed");
        }

        const data = await response.json();
        return { total: data.value, useApi: true };
      } catch (error) {
        console.warn("CountAPI unavailable, using localStorage:", error);
        
        // Fallback to localStorage-based counting
        const storedData = localStorage.getItem(VISITOR_STORAGE_KEY);
        const currentData = storedData ? JSON.parse(storedData) : {};
        const updatedData = incrementLocalCount(currentData);
        
        return { total: updatedData.total, useApi: false };
      }
    };

    const visitorToken = getOrCreateVisitorToken();
    const lastVisit = localStorage.getItem(VISITOR_STORAGE_KEY);
    const today = new Date().toDateString();
    const now = new Date();

    // Check if we already counted this visitor today
    let shouldIncrement = true;
    if (lastVisit) {
      const parsed = JSON.parse(lastVisit);
      if (parsed.lastVisitDate === today && parsed.visitorToken === visitorToken) {
        shouldIncrement = false;
      }
    }

    if (shouldIncrement) {
      fetchVisitorCount().then(({ total, useApi }) => {
        if (useApi && lastVisit) {
          // Update local counts but use API total
          const visitData = JSON.parse(lastVisit);
          const currentMonth = now.getMonth();
          const currentYear = now.getFullYear();

          const todayCount = visitData.lastVisitDate === today ? (visitData.todayCount || 0) + 1 : 1;
          const monthCount =
            visitData.lastVisitMonth === currentMonth &&
            visitData.lastVisitYear === currentYear
              ? (visitData.monthCount || 0) + 1
              : 1;
          const yearCount =
            visitData.lastVisitYear === currentYear
              ? (visitData.yearCount || 0) + 1
              : 1;

          localStorage.setItem(
            VISITOR_STORAGE_KEY,
            JSON.stringify({
              ...visitData,
              lastVisitDate: today,
              lastVisitMonth: currentMonth,
              lastVisitYear: currentYear,
              todayCount,
              monthCount,
              yearCount,
              total,
              visitorToken,
            })
          );

          setCounters({
            today: todayCount,
            thisMonth: monthCount,
            thisYear: yearCount,
            total,
          });
        } else if (useApi) {
          // First visit ever
          setCounters({
            today: 1,
            thisMonth: 1,
            thisYear: 1,
            total,
          });
        }
        setIsLoading(false);
      });
    } else {
      // Use cached values
      const visitData = JSON.parse(lastVisit!);
      setCounters({
        today: visitData.todayCount || 1,
        thisMonth: visitData.monthCount || 1,
        thisYear: visitData.yearCount || 1,
        total: visitData.total || 0,
      });
      setIsLoading(false);
    }
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
                  {isLoading ? "..." : formatNumber(stat.value)}
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
