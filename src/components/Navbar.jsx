import React, { useState, useEffect } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#services', label: 'Event Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#inquiry', label: 'Inquiry' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all ${scrolled ? 'bg-white/90 backdrop-blur shadow' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pink-400 to-blue-300 grid place-items-center text-white font-black">FF</div>
          <div className="leading-tight">
            <div className="font-extrabold tracking-tight text-[#071740]">Frosted Fizz</div>
            <div className="text-xs text-[#071740]/70">Cool Desserts, Chill Vibes</div>
          </div>
        </a>

        <button onClick={() => setOpen(!open)} aria-label="Toggle Menu" className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#071740] hover:bg-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[#071740]/80 hover:text-[#071740] transition-colors">{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#inquiry" className="px-4 py-2 rounded-full bg-[#FF6AA6] text-white hover:bg-[#ff5a9d] shadow">Book Us</a>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="md:hidden bg-white border-t">
          <ul className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a onClick={() => setOpen(false)} href={l.href} className="block py-2 text-[#071740]/90">{l.label}</a>
              </li>
            ))}
            <li>
              <a onClick={() => setOpen(false)} href="#inquiry" className="block py-2 text-[#FF6AA6] font-semibold">Book Us</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
