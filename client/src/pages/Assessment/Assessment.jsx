import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useTheme } from '../../context/ThemeContext';
import './Assessment.css';

function Assessment() {
  const { isDark } = useTheme();

  return (
    <div className={`assessment-page min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-10 md:px-6">
        <div className={`rounded-3xl border p-6 md:p-8 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
          <h1 className="text-2xl font-bold">Assessment</h1>
          <p className={`mt-2 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Assessment UI can now connect to your `/api/assessment/start` and `/api/assessment/evaluate` endpoints.
          </p>
          <Link to="/result" className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
            View Sample Result
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Assessment;
