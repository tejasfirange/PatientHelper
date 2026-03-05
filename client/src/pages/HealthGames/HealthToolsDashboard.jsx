import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function HealthToolsDashboard() {

  const { t } = useTranslation("health");
  const { isDark } = useTheme();
  const navigate = useNavigate();

  const tools = [
    { name: "BMI", path: "/tools/bmi" },
    { name: "LUNG", path: "/tools/lung" },
    { name: "HEART", path: "/tools/heart" },
    { name: "WATER", path: "/tools/water" },
    { name: "SLEEP", path: "/tools/sleep" },
    { name: "STRESS", path: "/tools/stress" },
    { name: "MEDITATION", path: "/tools/meditation" }
  ];

  const pageClass = `min-h-screen ${
    isDark
      ? "bg-slate-950 text-slate-100"
      : "bg-slate-50 text-slate-900"
  }`;

  return (
    <div className={pageClass}>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-16 md:px-6">

        <h1 className="text-3xl font-bold">
          {t("healthTools")}
        </h1>

        <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          {t("healthToolsDesc")}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">

          {tools.map((tool, index) => (
            <div
              key={index}
              onClick={() => navigate(tool.path)}
              className={`cursor-pointer rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                isDark
                  ? "border-slate-700 bg-slate-900"
                  : "border-blue-100 bg-white"
              }`}
            >

              <h2 className="text-lg font-semibold">
                {t(tool.name)}
              </h2>

              <p className={`mt-2 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {t(`${tool.name}_desc`)}
              </p>

              <button className="mt-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                {t("open")}
              </button>

            </div>
          ))}

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default HealthToolsDashboard;