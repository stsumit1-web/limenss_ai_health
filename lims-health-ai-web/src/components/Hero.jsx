import { useState, useEffect } from 'react';

const heroSlides = [
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=90',
    alt: 'Booth consultation — patient talking to doctor online',
    title: 'Booth consultation',
    subtitle: 'Patient with doctor, private and secure',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=90',
    alt: 'Generative AI in healthcare',
    title: 'Generative AI',
    subtitle: 'Smart summaries and clear explanations',
  },
  {
    src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=90',
    alt: 'Kiosk screens for self-service healthcare',
    title: 'Kiosk screens',
    subtitle: 'Self-service at your fingertips',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=90',
    alt: 'Tokenized system — digital queue and access',
    title: 'Tokenized system',
    subtitle: 'Queue, access, and rewards — digitized',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const goTo = (index) => setCurrent(index);
  const next = () => setCurrent((c) => (c + 1) % heroSlides.length);
  const prev = () => setCurrent((c) => (c - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-healthcare-blue overflow-hidden">
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-healthcare-blue via-healthcare-blue to-healthcare-blue/95" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

      <div className="relative section-padding max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Healthcare without queues, confusion, or chaos
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
              One AI-powered platform that connects patients, doctors, clinics, labs, pharmacies, and hospitals — across web, mobile, and kiosks.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center px-6 py-3.5 rounded-card bg-healthcare-teal text-white font-semibold shadow-md hover:bg-healthcare-teal/90 transition-all duration-300 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Hero image slider */}
          <div className="relative aspect-[4/3] sm:aspect-[5/4] max-w-lg mx-auto lg:mx-0 rounded-card overflow-hidden border-2 border-white/15 shadow-2xl bg-healthcare-blueDark/30">
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    const t = e.target;
                    if (t.dataset.fallbackUsed) return;
                    t.dataset.fallbackUsed = '1';
                    t.src = `https://placehold.co/800x600/184E77/ffffff?text=${encodeURIComponent(slide.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-white font-semibold text-lg sm:text-xl">{slide.title}</p>
                  <p className="text-white/90 text-sm mt-0.5">{slide.subtitle}</p>
                </div>
              </div>
            ))}

            {/* Prev / Next */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
