import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Landing.css';

function Landing() {
  return (
    <div id="home" className="landing-page min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      <main className="relative isolate overflow-hidden">
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-14 md:px-6 lg:grid-cols-2 lg:pt-20">
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              Smarter Symptom Triage
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Connect patients to care faster with intelligent digital triage.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
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

            <div className="flex flex-wrap gap-6 pt-2 text-sm text-slate-600">
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
            <div className="hero-card rounded-3xl border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100/50 md:p-8">
              <h2 className="text-lg font-semibold text-slate-900">Live Risk Snapshot</h2>
              <p className="mt-1 text-sm text-slate-500">Adaptive triage in progress</p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Symptom</p>
                  <p className="mt-1 font-medium text-slate-900">Chest discomfort + shortness of breath</p>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
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
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
