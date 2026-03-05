import React from 'react';

function Footer({ theme }) {
  const isDark = theme === 'dark';

  return (
    <footer className={`border-t ${isDark ? 'border-slate-700 bg-slate-900' : 'border-blue-100 bg-white'}`}>
      <div
        className={`mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-6 ${
          isDark ? 'text-slate-300' : 'text-slate-600'
        }`}
      >
        <p>&copy; {new Date().getFullYear()} MediConnect. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="transition hover:text-blue-600">
            Privacy
          </a>
          <a href="#home" className="transition hover:text-blue-600">
            Terms
          </a>
          <a href="#home" className="transition hover:text-blue-600">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
