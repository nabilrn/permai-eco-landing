import { useState, useEffect } from "react";
import { Users, Eye, Calendar, TrendingUp } from "lucide-react";

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

  // Counter animation function
  const animateCounter = (
    target: number,
    key: keyof typeof animatedCounters,
    delay: number = 0
  ) => {
    setTimeout(() => {
      let current = 0;
      const increment = target / 100; // 100 steps for smooth animation
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
      }, 20); // Update every 20ms for smooth animation
    }, delay);
  };

  useEffect(() => {
    // Simulate getting visitor data from localStorage or API
    const getVisitorData = () => {
      const today = new Date().toDateString();
      const currentMonth = new Date().getMonth();
      const currentYear = new Date().getFullYear();

      // Get existing data from localStorage
      const storedData = localStorage.getItem("visitorData");
      let visitorData = storedData
        ? JSON.parse(storedData)
        : {
            lastVisitDate: today,
            lastVisitMonth: currentMonth,
            lastVisitYear: currentYear,
            todayCount: 0,
            monthCount: 0,
            yearCount: 0,
            totalCount: 0,
          };

      // Check if it's a new day
      if (visitorData.lastVisitDate !== today) {
        visitorData.todayCount = 1; // Reset daily counter
        visitorData.lastVisitDate = today;
      } else {
        visitorData.todayCount += 1;
      }

      // Check if it's a new month
      if (visitorData.lastVisitMonth !== currentMonth) {
        visitorData.monthCount = 1; // Reset monthly counter
        visitorData.lastVisitMonth = currentMonth;
      } else {
        visitorData.monthCount += 1;
      }

      // Check if it's a new year
      if (visitorData.lastVisitYear !== currentYear) {
        visitorData.yearCount = 1; // Reset yearly counter
        visitorData.lastVisitYear = currentYear;
      } else {
        visitorData.yearCount += 1;
      }

      // Increment total counter
      visitorData.totalCount += 1;

      // Save back to localStorage
      localStorage.setItem("visitorData", JSON.stringify(visitorData));

      return {
        today: visitorData.todayCount,
        thisMonth: visitorData.monthCount,
        thisYear: visitorData.yearCount,
        total: visitorData.totalCount,
      };
    };

    // Simulate realistic visitor numbers for demo purposes
    const simulateRealisticNumbers = () => {
      const baseNumbers = getVisitorData();
      return {
        today: Math.max(baseNumbers.today, Math.floor(Math.random() * 50) + 15),
        thisMonth: Math.max(
          baseNumbers.thisMonth,
          Math.floor(Math.random() * 800) + 200
        ),
        thisYear: Math.max(
          baseNumbers.thisYear,
          Math.floor(Math.random() * 5000) + 1200
        ),
        total: Math.max(
          baseNumbers.total,
          Math.floor(Math.random() * 8000) + 2500
        ),
      };
    };

    const data = simulateRealisticNumbers();
    setCounters(data);

    // Start counter animations with staggered delays
    if (!hasAnimated) {
      setHasAnimated(true);
      animateCounter(data.today, "today", 300);
      animateCounter(data.thisMonth, "thisMonth", 600);
      animateCounter(data.thisYear, "thisYear", 900);
      animateCounter(data.total, "total", 1200);
    }
  }, [hasAnimated]);

  const counterItems = [
    {
      icon: Eye,
      label: "Hari Ini",
      count: animatedCounters.today,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Calendar,
      label: "Bulan Ini",
      count: animatedCounters.thisMonth,
      color: "text-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: TrendingUp,
      label: "Tahun Ini",
      count: animatedCounters.thisYear,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      label: "Total Pengunjung",
      count: animatedCounters.total,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  const formatNumber = (num: number) => {
    return num.toLocaleString("id-ID");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `,
        }}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Statistik Pengunjung
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Terima kasih atas dukungan dan antusiasme Anda dalam menjaga
            lingkungan bersama Bank Sampah Pondok Permai
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {counterItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className={`${item.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                }}
              >
                <div
                  className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-inner`}
                >
                  <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <div
                  className={`text-3xl font-bold ${item.color} mb-2 transition-all duration-300`}
                >
                  {formatNumber(item.count)}
                </div>
                <div className="text-gray-600 font-medium text-sm">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Data pengunjung diperbarui secara real-time
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisitorCounter;
