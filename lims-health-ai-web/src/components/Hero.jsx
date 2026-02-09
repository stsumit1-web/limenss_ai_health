export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-healthcare-bg overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-healthcare-bgDark via-healthcare-bg to-healthcare-ice" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-healthcare-teal/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-healthcare-mint/15 rounded-full blur-3xl" />

      <div className="relative section-padding max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-healthcare-blue leading-tight mb-6">
              Healthcare without queues, confusion, or chaos
            </h1>
            <p className="text-lg sm:text-xl text-healthcare-blue/80 leading-relaxed mb-8 max-w-xl">
              One AI-powered platform that connects patients, doctors, clinics, labs, pharmacies, and hospitals — across web, mobile, and kiosks.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#cta"
                className="inline-flex items-center px-6 py-3.5 rounded-card bg-healthcare-teal text-white font-semibold shadow-md hover:bg-healthcare-teal/90 transition-all duration-300 hover:shadow-lg"
              >
                Request a Free Clinic Demo
              </a>
              <a
                href="#cta"
                className="inline-flex items-center px-6 py-3.5 rounded-card border-2 border-healthcare-teal text-healthcare-teal font-semibold hover:bg-healthcare-teal/5 transition-all duration-300"
              >
                Start a Pilot
              </a>
            </div>
          </div>

          {/* Hero illustration - connected ecosystem */}
          <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Central AI connection node */}
                <div className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-healthcare-teal/20 border-2 border-healthcare-teal flex items-center justify-center animate-pulse">
                  <span className="text-healthcare-teal font-bold text-sm">AI</span>
                </div>
                {/* Patient on mobile */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-28 rounded-card bg-healthcare-cream shadow-lg border border-healthcare-bgDark p-2">
                  <div className="w-full h-8 rounded bg-healthcare-mint/30 mb-2" />
                  <div className="w-full h-12 rounded bg-healthcare-cream" />
                  <div className="mt-2 text-[10px] text-center text-healthcare-blue/70">Patient</div>
                </div>
                {/* Doctor with writing pad */}
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-20 h-24 rounded-card bg-healthcare-cream shadow-lg border border-healthcare-bgDark p-2">
                  <div className="w-full h-16 rounded bg-healthcare-teal/10" />
                  <div className="mt-2 text-[10px] text-center text-healthcare-blue/70">Doctor</div>
                </div>
                {/* Clinic dashboard */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-18 rounded-card bg-healthcare-cream shadow-lg border border-healthcare-bgDark p-2">
                  <div className="grid grid-cols-3 gap-1 mb-2">
                    <div className="h-4 rounded bg-healthcare-mint/30" />
                    <div className="h-4 rounded bg-healthcare-teal/20" />
                    <div className="h-4 rounded bg-healthcare-mint/30" />
                  </div>
                  <div className="text-[10px] text-center text-healthcare-blue/70">Clinic</div>
                </div>
                {/* Kiosk */}
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-16 h-24 rounded-card bg-healthcare-cream shadow-lg border border-healthcare-bgDark p-2">
                  <div className="w-full h-12 rounded bg-healthcare-ice mb-2" />
                  <div className="text-[10px] text-center text-healthcare-blue/70">Kiosk</div>
                </div>
                {/* Connection lines (simplified) */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#34A0A4" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="85%" y2="50%" stroke="#34A0A4" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="15%" y2="50%" stroke="#34A0A4" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="#34A0A4" strokeWidth="1" strokeDasharray="4 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
