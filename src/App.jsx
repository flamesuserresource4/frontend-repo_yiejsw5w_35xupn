import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import InquiryContact from './components/InquiryContact';

const WHATSAPP_NUMBER = '919999999999';

export default function App() {
  useEffect(() => {
    document.title = 'Frosted Fizz | Live Dessert Catering in Jaipur';

    const metaTags = [
      { name: 'description', content: 'Frosted Fizz — Live dessert counters for weddings, parties, and corporate events in Jaipur. Soft serve, shakes, sodas, waffles, brownies, and more.' },
      { name: 'keywords', content: 'Soft Serve Catering Jaipur, Live Dessert Counter for Weddings, Event Ice Cream Jaipur, Frosted Fizz, Dessert Catering Jaipur' },
      { property: 'og:title', content: 'Frosted Fizz — Cool Desserts, Chill Vibes, Event Ready' },
      { property: 'og:description', content: 'Book vibrant live dessert counters for weddings, birthdays, and corporate events.' },
    ];

    metaTags.forEach((attrs) => {
      const el = document.createElement('meta');
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      document.head.appendChild(el);
    });

    // Google Analytics (replace with your GA4 Measurement ID)
    const ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX';
    document.head.appendChild(ga);
    const gaInit = document.createElement('script');
    gaInit.innerHTML = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-XXXXXXX');";
    document.head.appendChild(gaInit);

    // Meta Pixel (replace with your Pixel ID)
    const pixel = document.createElement('script');
    pixel.innerHTML = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n; n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', 'XXXXXXXXXX'); fbq('track', 'PageView');";
    document.head.appendChild(pixel);

    return () => {
      // Optional: cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#071740]">
      <Navbar />
      <Hero onBook={() => {}} />
      <Sections />
      <InquiryContact />

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Frosted%20Fizz!%20I%20want%20to%20book%20a%20live%20dessert%20counter.`}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:brightness-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.01 0C5.38 0 .01 5.37.01 12c0 2.11.55 4.17 1.59 5.99L0 24l6.14-1.6A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a9.93 9.93 0 0 1-5.06-1.39l-.36-.21-3.64.95.97-3.55-.23-.37A9.94 9.94 0 1 1 12 22Zm5.44-7.56c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.15 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z"/></svg>
        <span className="hidden sm:inline">Chat</span>
      </a>
    </div>
  );
}
