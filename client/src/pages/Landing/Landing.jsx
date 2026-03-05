import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Landing.css';

function Landing() {
  const [theme, setTheme] = useState(() => localStorage.getItem('mediconnect-theme') || 'light');
  const isDark = theme === 'dark';

  useEffect(() => {
    localStorage.setItem('mediconnect-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const pageClass = useMemo(
    () =>
      `landing-page min-h-screen ${isDark ? 'theme-dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`,
    [isDark]
  );

  return (
    <div id="home" className={pageClass}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="relative isolate overflow-hidden">
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-14 md:px-6 lg:grid-cols-2 lg:pt-20">
          <div className="space-y-6">
            <p
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                isDark ? 'border-blue-400/40 bg-blue-500/10 text-blue-300' : 'border-blue-200 bg-blue-50 text-blue-700'
              }`}
            >
              Smarter Symptom Triage
            </p>
            <h1 className={`text-4xl font-bold leading-tight tracking-tight md:text-5xl ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
              Connect patients to care faster with intelligent digital triage.
            </h1>
            <p className={`max-w-xl text-base leading-7 md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              MediConnect helps healthcare teams assess symptoms quickly, prioritize risk with confidence, and route patients to the right level of care.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700">
                Start Assessment
              </button>
              <button className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-200 hover:border-blue-200 hover:text-blue-700">
                Watch Demo
              </button>
            </div>

            <div className={`flex flex-wrap gap-6 pt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <div>
                <p className="text-2xl font-bold text-blue-700">98%</p>
                <p>triage completion rate</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">3x</p>
                <p>faster patient intake</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-700">24/7</p>
                <p>always-on access</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className={`hero-card rounded-3xl border p-6 shadow-xl md:p-8 ${
                isDark ? 'border-slate-700 bg-slate-900 shadow-blue-950/30' : 'border-blue-100 bg-white shadow-blue-100/50'
              }`}
            >
              <h2 className={`text-lg font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Live Risk Snapshot</h2>
              <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Adaptive triage in progress</p>

              <div className="mt-6 space-y-4">
                <div className={`rounded-xl border p-4 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Symptom</p>
                  <p className={`mt-1 font-medium ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Chest discomfort + shortness of breath</p>
                </div>

                <div className={`rounded-xl border p-4 ${isDark ? 'border-blue-400/30 bg-blue-950/40' : 'border-blue-100 bg-blue-50'}`}>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-blue-900">Risk Level</p>
                    <span className="rounded-full bg-blue-600 px-2 py-1 text-xs font-semibold text-white">High</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100">
                    <div className="h-full w-4/5 rounded-full bg-blue-600" />
                  </div>
                </div>

                <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Notify Care Team
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
          <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Features</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <article className={`rounded-2xl border p-5 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900' : 'border-blue-100 bg-white'}`}>
              <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Adaptive Questions</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Each answer drives the next step dynamically.</p>
            </article>
            <article className={`rounded-2xl border p-5 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900' : 'border-blue-100 bg-white'}`}>
              <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Risk Prioritization</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Auto-scoring with red-flag detection for urgency.</p>
            </article>
            <article className={`rounded-2xl border p-5 shadow-sm ${isDark ? 'border-slate-700 bg-slate-900' : 'border-blue-100 bg-white'}`}>
              <p className={`font-semibold ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>Care Routing</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Direct users to self-care, clinic, or emergency care.</p>
            </article>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
          <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>How It Works</h3>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className={`rounded-2xl border p-5 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <p className="text-sm font-semibold text-blue-700">1. Start</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Patient selects a symptom category.</p>
            </div>
            <div className={`rounded-2xl border p-5 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <p className="text-sm font-semibold text-blue-700">2. Assess</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>System asks targeted follow-up questions.</p>
            </div>
            <div className={`rounded-2xl border p-5 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
              <p className="text-sm font-semibold text-blue-700">3. Route</p>
              <p className={`mt-2 text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Risk level and next actions are generated.</p>
            </div>
          </div>
        </section>

        <section id="for-clinics" className="mx-auto w-full max-w-6xl px-4 pb-14 pt-12 md:px-6">
          <div
            className={`rounded-3xl border p-6 md:p-8 ${
              isDark ? 'border-slate-700 bg-gradient-to-r from-slate-900 to-slate-800' : 'border-blue-100 bg-gradient-to-r from-white to-blue-50'
            }`}
          >
            <h3 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>For Clinics</h3>
            <p className={`mt-2 max-w-2xl text-sm md:text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Deploy triage forms in minutes and streamline intake with standardized digital assessments.
            </p>
            <button className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Request Setup
            </button>
          </div>
        </section>
      </main>
      <Footer theme={theme} />
    </div>
  );
}

export default Landing;
