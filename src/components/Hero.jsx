import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onBook }) {
  return (
    <section id="home" className="relative min-h-[80vh] pt-20 flex items-center overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FFEEF6] via-[#E9F7FF] to-white pointer-events-none" />

      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/Tddl75W6Ij9Qp77j/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center w-full">
        <div className="backdrop-blur-[1px] bg-white/60 rounded-2xl p-6 md:p-8 shadow-sm">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#071740]">
            Cool Desserts, Chill Vibes, Event Ready.
          </h1>
          <p className="mt-4 text-[#071740]/70 text-base md:text-lg">
            Live dessert counters for weddings, parties, and corporate events. From soft serve to sodas — we bring the counter, staff, and the vibes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#inquiry" onClick={onBook} className="px-5 py-3 rounded-full bg-[#FF6AA6] text-white font-semibold shadow hover:brightness-110">Book Us for Your Event</a>
            <a href="https://wa.me/919999999999?text=I%20want%20to%20book%20Frosted%20Fizz%20for%20an%20event" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-[#66D6FF] text-[#071740] font-semibold shadow hover:brightness-110">Chat on WhatsApp</a>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <Stat number="100+" label="Events" />
            <Stat number="1500+" label="Guests Served" />
            <Stat number="5-Star" label="Hygiene" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="rounded-xl bg-white/80 p-4 shadow">
      <div className="text-2xl font-extrabold text-[#071740]">{number}</div>
      <div className="text-sm text-[#071740]/70">{label}</div>
    </div>
  );
}
