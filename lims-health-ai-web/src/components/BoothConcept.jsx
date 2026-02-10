const lhxpFeatures = [
  {
    src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&q=90',
    alt: 'Patient having a remote video consultation with a doctor on a large screen',
    title: 'Remote consultation',
    desc: 'A big screen where the patient talks to the doctor online — secure, private, and instant. Same quality care from the comfort of your booth.',
  },
  {
    src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1000&q=90',
    alt: 'Medicine delivery on the go — prescriptions and medications delivered quickly',
    title: 'Medicine delivery on the go',
    desc: 'Get your prescribed medicines dispensed or delivered to your point. No extra trip to the pharmacy — consult and collect in one stop.',
  },
  {
    src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&q=90',
    alt: 'Digital-first, human care — AI assisting a healthcare professional',
    title: 'Digital-first, human care',
    desc: 'AI supports your care: clear prescription summaries, reports explained in your language, and seamless records — so the human touch stays at the centre.',
    fallbackSrc: 'https://images.unsplash.com/photo-1576091160391-4ec1500a2d2c?w=1000&q=90',
  },
];

export default function BoothConcept() {
  return (
    <section id="booth-concept" className="section-padding bg-healthcare-blue">
      <div className="max-w-6xl mx-auto">
        {/* Prominent section header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block text-healthcare-mint font-semibold text-sm uppercase tracking-widest mb-4">
            LHXP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Limenss Healthcare Points
          </h2>
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Healthcare that fits your time, right where you are. Consult on a big screen, get medicines on the go, and let AI support your care — all in one place.
          </p>
        </div>

        {/* Hero: Remote consultation - patient talking to doctor on big screen */}
        <div className="relative rounded-card overflow-hidden border-2 border-white/20 shadow-2xl mb-14 sm:mb-16 aspect-[2/1] sm:aspect-[21/9] max-h-[380px] sm:max-h-[420px] bg-healthcare-blueDark/50">
          <img
            src={lhxpFeatures[0].src}
            alt={lhxpFeatures[0].alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-healthcare-blue/85 via-healthcare-blue/20 to-transparent pointer-events-none" aria-hidden />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-bold text-xl sm:text-2xl lg:text-3xl">{lhxpFeatures[0].title}</h3>
            <p className="text-white/95 text-base sm:text-lg mt-2 max-w-2xl">{lhxpFeatures[0].desc}</p>
          </div>
        </div>

        {/* Feature grid - 3 large cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {lhxpFeatures.map((item, i) => (
            <div
              key={i}
              className="rounded-card overflow-hidden border-2 border-white/15 bg-white/5 backdrop-blur-sm shadow-xl card-hover flex flex-col"
            >
              <div className="aspect-[4/3] relative bg-healthcare-blueDark/30 shrink-0">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target;
                    if (target.dataset.fallbackUsed) return;
                    target.dataset.fallbackUsed = '1';
                    target.src = item.fallbackSrc || `https://placehold.co/800x600/184E77/ffffff?text=${encodeURIComponent(item.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-healthcare-blue/70 to-transparent opacity-90" aria-hidden />
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-white/90 text-base leading-relaxed flex-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 sm:mt-16 text-center">
          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto">
            Limenss Healthcare Points can be installed in hospitals, clinics, corporate campuses, and high-footfall areas — bringing quality healthcare closer to where people live and work.
          </p>
        </div>
      </div>
    </section>
  );
}
