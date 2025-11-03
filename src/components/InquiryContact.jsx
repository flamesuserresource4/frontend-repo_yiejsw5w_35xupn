import React, { useMemo, useState } from 'react';

const WHATSAPP_NUMBER = '919999999999';
const GOOGLE_APPS_SCRIPT_URL = '';

export default function InquiryContact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    type: 'Wedding',
    guests: '',
    date: '',
    city: 'Jaipur',
    budget: '',
    notes: '',
  });

  const inputCls = 'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#66D6FF] focus:border-transparent placeholder:text-gray-400';

  const qrSrc = useMemo(() => {
    const url = typeof window !== 'undefined' ? window.location.origin + window.location.pathname + '#inquiry' : 'https://frostedfizz.in/inquiry';
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(url)}`;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = `Inquiry:%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AType: ${encodeURIComponent(form.type)}%0AGuests: ${encodeURIComponent(form.guests)}%0ADate: ${encodeURIComponent(form.date)}%0ACity: ${encodeURIComponent(form.city)}%0ABudget: ${encodeURIComponent(form.budget)}%0ANotes: ${encodeURIComponent(form.notes)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

    if (GOOGLE_APPS_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...form, createdAt: new Date().toISOString() }),
        });
      } catch (_) {}
    }

    setForm({ name: '', phone: '', type: 'Wedding', guests: '', date: '', city: 'Jaipur', budget: '', notes: '' });
  };

  return (
    <>
      <section id="inquiry" className="scroll-mt-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-[#071740]">Inquiry Form</h2>
            <p className="mt-2 text-[#071740]/70">Share your event details — we’ll get back within hours.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} className={inputCls} placeholder="Name" />
              <input required value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})} className={inputCls} placeholder="Contact Number" />
              <select value={form.type} onChange={(e)=>setForm({...form,type:e.target.value})} className={inputCls}>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Birthday</option>
                <option>Other</option>
              </select>
              <input value={form.guests} onChange={(e)=>setForm({...form,guests:e.target.value})} className={inputCls} placeholder="Expected Guests" />
              <input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})} className={inputCls} />
              <input value={form.city} onChange={(e)=>setForm({...form,city:e.target.value})} className={inputCls} placeholder="City" />
              <input value={form.budget} onChange={(e)=>setForm({...form,budget:e.target.value})} className={inputCls} placeholder="Budget Range" />
              <textarea value={form.notes} onChange={(e)=>setForm({...form,notes:e.target.value})} className={`${inputCls} sm:col-span-2`} rows={4} placeholder="Notes"></textarea>
              <div className="sm:col-span-2 flex gap-3">
                <button type="submit" className="px-5 py-3 rounded-full bg-[#FF6AA6] text-white font-semibold shadow hover:brightness-110">Send Inquiry</button>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="px-5 py-3 rounded-full bg-[#66D6FF] text-[#071740] font-semibold shadow hover:brightness-110">WhatsApp</a>
              </div>
            </form>
          </div>

          <div>
            <div className="rounded-2xl border p-6 bg-gradient-to-br from-[#FFF3F9] to-[#F2FAFF]">
              <h3 className="text-xl font-bold text-[#071740]">Scan to Open Inquiry Form</h3>
              <p className="text-[#071740]/70 mt-1">Display this QR at your event for quick access.</p>
              <img src={qrSrc} alt="Inquiry form QR code" className="mt-4 h-40 w-40" />
            </div>
            <div className="mt-6 rounded-2xl border p-6 bg-white">
              <h3 className="text-xl font-bold text-[#071740]">Contact</h3>
              <p className="mt-2 text-[#071740]/80">📍 Sanganer, Jaipur</p>
              <p className="text-[#071740]/80">📞 +91 99999 99999</p>
              <p className="text-[#071740]/80">✉️ frostedfizz@gmail.com</p>
              <div className="mt-4">
                <iframe
                  title="Frosted Fizz Location"
                  className="w-full h-48 rounded-xl"
                  src="https://www.google.com/maps?q=Sanganer%2C%20Jaipur&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-20 bg-[#071740] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xl font-extrabold">Frosted Fizz</div>
            <div className="text-white/70 text-sm">Cool Desserts, Chill Vibes, Event Ready</div>
          </div>
          <div className="text-white/80 text-sm">© 2025 Frosted Fizz. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
