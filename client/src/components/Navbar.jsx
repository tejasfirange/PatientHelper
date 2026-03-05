import React, { useEffect, useRef, useState } from 'react';

function Navbar({ theme = 'light', onToggleTheme = () => {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('mediconnect-language') || 'English');
  const languageMenuRef = useRef(null);
  const isDark = theme === 'dark';

  const navItems = ['Features', 'How It Works', 'For Clinics'];
  const languages = ['English', 'Marathi'];

  useEffect(() => {
    localStorage.setItem('mediconnect-language', language);
  }, [language]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur ${
        isDark ? 'border-slate-700 bg-slate-900/85' : 'border-blue-100/80 bg-white/85'
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105">
            M
          </span>
          <span className={`text-lg font-semibold tracking-tight ${isDark ? 'text-slate-100' : 'text-slate-900'}`}>
            MediConnect
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <div className="relative" ref={languageMenuRef}>
            <button
              onClick={() => setLanguageOpen((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-semibold transition ${
                isDark
                  ? 'border-slate-600 text-slate-100 hover:bg-slate-800'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Change language"
            >
              <span aria-hidden="true">??</span>
              {language}
            </button>

            {languageOpen && (
              <div
                className={`absolute right-0 mt-2 w-40 rounded-lg border p-1 shadow-lg ${
                  isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'
                }`}
              >
                {languages.map((item) => {
                  const selected = item === language;
                  return (
                    <button
                      key={item}
                      onClick={() => {
                        setLanguage(item);
                        setLanguageOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm ${
                        isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-blue-50'
                      }`}
                    >
                      <span>{item}</span>
                      <span className="text-blue-600">{selected ? '?' : ''}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={onToggleTheme}
            className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
              isDark
                ? 'border-slate-600 text-slate-100 hover:bg-slate-800'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
          <button className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50">
            Sign In
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`inline-flex rounded-lg border p-2 transition md:hidden ${
            isDark
              ? 'border-slate-600 text-slate-100 hover:bg-slate-800'
              : 'border-blue-200 text-slate-700 hover:bg-blue-50'
          }`}
          aria-label="Toggle menu"
        >
          <span className="text-sm font-semibold">Menu</span>
        </button>
      </nav>

      {menuOpen && (
        <div className={`border-t px-4 py-3 md:hidden ${isDark ? 'border-slate-700 bg-slate-900' : 'border-blue-100 bg-white'}`}>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition hover:text-blue-600 ${
                    isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-blue-50'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setLanguage((prev) => (prev === 'English' ? 'Marathi' : 'English'))}
              className={`w-1/2 rounded-lg border px-3 py-2 text-sm font-semibold ${
                isDark ? 'border-slate-600 text-slate-100' : 'border-slate-300 text-slate-700'
              }`}
            >
              ?? {language === 'English' ? 'English ?' : 'Marathi ?'}
            </button>
            <button
              onClick={onToggleTheme}
              className={`w-1/2 rounded-lg border px-3 py-2 text-sm font-semibold ${
                isDark ? 'border-slate-600 text-slate-100' : 'border-slate-300 text-slate-700'
              }`}
            >
              {isDark ? 'Light' : 'Dark'}
            </button>
            <button className="w-1/2 rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700">
              Sign In
            </button>
            <button className="w-1/2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
