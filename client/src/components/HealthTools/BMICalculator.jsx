import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";

function BMICalculator() {

  const { t } = useTranslation("health");
  const { isDark } = useTheme();

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {

    if (!height || !weight) return;

    const h = height / 100;
    const value = weight / (h * h);
    const bmiValue = value.toFixed(1);

    setBmi(bmiValue);

    if (value < 18.5) setStatus(t("underweight"));
    else if (value < 24.9) setStatus(t("normal"));
    else if (value < 29.9) setStatus(t("overweight"));
    else setStatus(t("obese"));
  };

  return (
    <div
      className={`rounded-3xl border p-6 shadow-xl md:p-8 ${
        isDark
          ? "border-slate-700 bg-slate-900 text-slate-100"
          : "border-blue-100 bg-white text-slate-900"
      }`}
    >
      <h2 className="text-2xl font-bold">{t("bmiTitle")}</h2>
      <p
        className={`mt-1 text-sm ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {t("bmiDesc")}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">

        <div>
          <label
            className={`text-sm font-medium ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t("weight")}
          </label>
          <input
            type="number"
            placeholder="kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className={`mt-1 w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-slate-300 bg-white"
            }`}
          />
        </div>

        <div>
          <label
            className={`text-sm font-medium ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t("height")}
          </label>
          <input
            type="number"
            placeholder="cm"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className={`mt-1 w-full rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? "border-slate-700 bg-slate-800 text-white"
                : "border-slate-300 bg-white"
            }`}
          />
        </div>

      </div>

      <button
        onClick={calculateBMI}
        className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
      >
        {t("calculateBMI")}
      </button>

      {bmi && (
        <div
          className={`mt-6 rounded-2xl border p-5 ${
            isDark
              ? "border-slate-700 bg-slate-800"
              : "border-blue-100 bg-blue-50"
          }`}
        >
          <p className="text-sm font-semibold text-blue-700">
            {t("yourBMI")}
          </p>

          <p className="mt-1 text-3xl font-bold text-blue-700">{bmi}</p>

          <p
            className={`mt-2 text-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t("status")}: <span className="font-semibold">{status}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default BMICalculator;