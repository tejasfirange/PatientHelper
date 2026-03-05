import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['Features', 'How It Works', 'For Clinics'];

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105">
            M
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">MediConnect</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-blue-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50">
            Sign In
          </button>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Get Started
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex rounded-lg border border-blue-200 p-2 text-slate-700 transition hover:bg-blue-50 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-sm font-semibold">Menu</span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-blue-100 bg-white px-4 py-3 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
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
