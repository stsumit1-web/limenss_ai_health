const platforms = [
  {
    title: 'Web Platform',
    emoji: '🖥️',
    features: [
      'Patient self-service portal',
      'Clinic admin dashboard',
      'Doctor queue view',
      'EHR document timeline',
      'AI summaries',
    ],
    visual: 'Laptop dashboard UI mockups',
    gradient: 'from-healthcare-teal/20 to-healthcare-mint/20',
  },
  {
    title: 'Mobile Platform',
    emoji: '📱',
    features: [
      'Patient ID access',
      'Prescription & report understanding',
      'Notifications & reminders',
      'Family access',
    ],
    visual: 'Mobile app screens (Android/iOS)',
    gradient: 'from-healthcare-mint/20 to-healthcare-teal/10',
  },
  {
    title: 'Smart Kiosks',
    emoji: '🖥️',
    features: [
      'Walk-in registration',
      'Token generation',
      'Report explanation',
      'Tele-consult booths',
    ],
    visual: 'Kiosk in clinic / hospital lobby',
    gradient: 'from-healthcare-sky/20 to-healthcare-teal/10',
  },
];

export default function PlatformShowcase() {
  return (
    <section className="section-padding bg-healthcare-blue">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          One platform. Multiple experiences.
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          Designed for where healthcare happens — on screens, in palms, and at the front desk.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {platforms.map((platform, i) => (
            <div
              key={i}
              className={`rounded-card overflow-hidden border border-healthcare-bgDark bg-healthcare-cream/80 card-hover ${platform.gradient} bg-gradient-to-br`}
            >
              <div className="p-6">
                <div className="text-3xl mb-4">{platform.emoji}</div>
                <h3 className="font-semibold text-healthcare-blue text-xl mb-4">{platform.title}</h3>
                <ul className="space-y-2">
                  {platform.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-healthcare-blue/80 text-sm">
                      <span className="text-healthcare-teal mt-0.5">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-32 bg-healthcare-cream/70 flex items-center justify-center border-t border-healthcare-bgDark">
                <span className="text-healthcare-blue/50 text-sm px-4 text-center">{platform.visual}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
