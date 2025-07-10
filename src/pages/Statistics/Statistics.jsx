import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

export default function Statistics() {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  );

  // Data for the Pie Chart (Gender Distribution)
  const pieData = {
    labels: ["الذكور", "الإناث"],
    datasets: [
      {
        label: "انتشار التوحد بين أجناس الأطفال",
        data: [81, 19], // 81% males, 19% females
        backgroundColor: ["#4F46E5", "#F9A8D4"], // Blue and Pink colors
        borderWidth: 1,
      },
    ],
  };

  const pieOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  // Data for the Bar Chart (Ages)
  const ageBarData = {
    labels: ["10 سنوات", "20 سنة", "30 سنة", "40 سنة"],
    datasets: [
      {
        label: "نسبة مئوية (%)",
        data: [15, 25, 40, 20], // Example age-based autism stats
        backgroundColor: "#22C55E", // Green color
        borderWidth: 1,
      },
    ],
  };

  const ageBarOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "نسبة مئوية (%)",
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "الفئة العمرية",
        },
      },
    },
  };

  // Data for the Bar Chart (Countries)
  const countryBarData = {
    labels: ["مصر", "السعودية", "قطر", "الإمارات العربية المتحدة"],
    datasets: [
      {
        label: "نسبة التوحد في الدول العربية",
        data: [12.5, 17.8, 14.3, 16.1], // Values from image
        backgroundColor: ["#3B82F6", "#F97316", "#A855F7", "#22C55E"], // Colors for each bar
        borderWidth: 1,
      },
    ],
  };

  const countryBarOptions = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "نسبة مئوية",
        },
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "الدول",
        },
      },
    },
  };

  // Data for the Pie Chart (IQ Distribution)
  const iqPieData = {
    labels: ["إعاقة ذهنية", "ذكاء متوسط إلى فوق متوسط", "نطاق حدودي"],
    datasets: [
      {
        label: "توزيع مستوى ذكاء (IQ) للأطفال المصابين باضطراب طيف التوحد",
        data: [31, 44, 25], // Data from the image
        backgroundColor: ["#E11D48", "#4F46E5", "#F59E0B"], // Colors for each category
        borderWidth: 1,
      },
    ],
  };

  const iqPieOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  return (
    <section className="py-20 px-10 bg-gray-100 min-h-screen font-Cairo">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">
          إحصائيات عن التوحد
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Pie Chart (Gender) */}
          <div className="w-full md:w-1/3">
            <Pie data={pieData} options={pieOptions} />
            <p className="text-center mt-4 text-xl font-bold">
              انتشار التوحد بين أجناس الأطفال
            </p>
          </div>

          {/* Bar Chart (Ages) */}
          <div className="w-full md:w-1/2">
            <Bar data={ageBarData} options={ageBarOptions} />
            <p className="text-center mt-4 text-xl font-bold">
              توزيع نسب انتشار التوحد حسب السن
            </p>
          </div>
        </div>

        {/* Bar Chart (Countries) */}
        <div className="w-full mt-16 border-t">
          <h2 className="text-xl font-bold text-center mb-8 mt-16 ">
            إنتشار التوحد في الدول العربية
          </h2>
          <Bar data={countryBarData} options={countryBarOptions} />
        </div>

        {/* Pie Chart (IQ Distribution) */}
        <div className="w-full md:w-1/3 mt-16 border-t m-auto">
          <h2 className="text-xl font-bold text-center mb-8 mt-16">
            توزيع مستوى ذكاء للأطفال المصابين باضطراب طيف التوحد
             
          </h2>
          <Pie data={iqPieData} options={iqPieOptions}  />
          <p className="text-center mt-4 text-base font-medium">
            %إعاقة ذهنية: 31<br/>
             %ذكاء متوسط إلى فوق متوسط: 44<br/>
              %نطاق حدودي: 25
          </p>
        </div>
      </div>
    </section>
  );
}