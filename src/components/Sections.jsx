import React, { useEffect } from 'react';

const menuItems = [
  { title: 'Soft Serve Ice Cream', img: 'https://picsum.photos/seed/softserve/600/400' },
  { title: 'Milkshakes & Thick Shakes', img: 'https://picsum.photos/seed/shakes/600/400' },
  { title: 'Flavored Sodas', img: 'https://picsum.photos/seed/soda/600/400' },
  { title: 'Cold Coffee', img: 'https://picsum.photos/seed/coldcoffee/600/400' },
  { title: 'Ice Gola', img: 'https://picsum.photos/seed/gola/600/400' },
  { title: 'Sugarcane Juice', img: 'https://picsum.photos/seed/sugarcane/600/400' },
  { title: 'Waffles', img: 'https://picsum.photos/seed/waffles/600/400' },
  { title: 'Brownies with Ice Cream', img: 'https://picsum.photos/seed/brownies/600/400' },
];

const services = [
  { title: 'Weddings', desc: 'Haldi, Mehndi, Sangeet, Reception — we serve joy at every ceremony.' },
  { title: 'Birthdays', desc: 'From kids to grown-ups, everyone gets a scoop of happiness.' },
  { title: 'Corporate', desc: 'Office parties, launches, and team days — elevate with cool treats.' },
  { title: 'College & School Fests', desc: 'High-energy counters perfect for campus vibes.' },
];

const testimonials = [
  { name: 'Riya & Arjun', text: 'The live soft serve at our sangeet was a hit! Super hygienic and delicious.' },
  { name: 'Ankit (HR)', text: 'They handled 300+ guests smoothly. Professional team and great variety.' },
  { name: 'Mira', text: 'Brownies with ice cream? Chef’s kiss. Guests loved the setup.' },
];

export default function Sections() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('opacity-100', 'translate-y-0');
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('opacity-0', 'translate-y-6');
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <section id="about" className="scroll-mt-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div data-reveal className="transition-all duration-700">
            <h2 className="text-3xl font-extrabold text-[#071740]">From ₹20 Softy to Rajasthan’s Favorite Live Dessert Counter</h2>
            <p className="mt-4 text-[#071740]/70">
              Started in 2023 by <span className="font-semibold text-[#071740]">Gagan Jain</span> in Sanganer, Jaipur — Frosted Fizz began as a humble softy outlet and grew into a full-fledged event dessert brand. Today, we set up vibrant counters that blend taste, hygiene, and fun.
            </p>
            <p className="mt-2 text-[#071740]/70">Scoop happiness. Fizz up your event. Cool treats for every celebration.</p>
          </div>
          <div data-reveal className="transition-all duration-700 grid grid-cols-2 gap-3">
            <img className="rounded-xl object-cover h-40 sm:h-48 w-full" src="https://images.unsplash.com/photo-1712903276040-c99b32a057eb?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFdmVudCUyMHNldHVwJTIwcGxhY2Vob2xkZXJ8ZW58MHwwfHx8MTc2MjE5MjkyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Event setup placeholder" />
            <img className="rounded-xl object-cover h-40 sm:h-48 w-full" src="https://images.unsplash.com/photo-1606733788345-094932d6dc8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYWNoaW5lcyUyMGFuZCUyMHN0YWZmJTIwcGxhY2Vob2xkZXJ8ZW58MHwwfHx8MTc2MjE5MjkyN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Machines and staff placeholder" />
            <img className="rounded-xl object-cover h-40 sm:h-48 w-full col-span-2" src="https://images.unsplash.com/photo-1685524481917-5c631e783385?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxMaXZlJTIwY291bnRlciUyMGF0JTIwd2VkZGluZ3xlbnwwfDB8fHwxNzYyMTkyOTI4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Live counter at wedding placeholder" />
          </div>
        </div>
      </section>

      <section id="menu" className="scroll-mt-20 py-16 bg-gradient-to-b from-[#FFF3F9] to-[#F2FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#071740]">Menu & Offerings</h2>
          <p className="mt-2 text-[#071740]/70">Available at events and on-demand catering setups.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuItems.map((m) => (
              <div key={m.title} data-reveal className="transition-all duration-700 rounded-2xl bg-white overflow-hidden shadow">
                <img src={m.img} alt={m.title + ' placeholder'} className="h-36 w-full object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-[#071740]">{m.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#071740]">Event Services</h2>
          <p className="mt-2 text-[#071740]/70">We bring the counter, staff, and vibes — fresh desserts live at your event.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.title} data-reveal className="transition-all duration-700 rounded-2xl p-5 border bg-gradient-to-br from-white to-[#F8FAFF]">
                <h3 className="font-semibold text-[#071740]">{s.title}</h3>
                <p className="mt-2 text-sm text-[#071740]/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-20 py-16 bg-gradient-to-t from-[#FFF3F9] to-[#F2FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#071740]">Gallery</h2>
          <p className="mt-2 text-[#071740]/70">Real events, real smiles. Photos and short reels.</p>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <img key={i} data-reveal className="transition-all duration-700 rounded-xl h-40 w-full object-cover" src={`https://picsum.photos/seed/event${i+1}/600/400`} alt={`Event photo ${i+1} placeholder`} />
            ))}
          </div>

          <div className="mt-10">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {testimonials.map((t, idx) => (
                <blockquote key={idx} className="snap-start min-w-[280px] sm:min-w-[360px] rounded-2xl p-5 bg-white shadow">
                  <p className="text-[#071740]/80">“{t.text}”</p>
                  <footer className="mt-3 text-sm font-semibold text-[#071740]">— {t.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
