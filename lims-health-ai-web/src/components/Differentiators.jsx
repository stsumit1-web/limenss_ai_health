const items = [
  {
    icon: '👨‍⚕️',
    title: 'Doctor-first design',
    desc: 'Built around how doctors actually work, not the other way around.',
  },
  {
    icon: '✨',
    title: 'No learning curve',
    desc: 'Zero disruption to existing workflows. Start using in minutes.',
  },
  {
    icon: 'हिंदी',
    title: 'Hindi-first AI',
    desc: 'Explains prescriptions and reports in the language patients understand.',
  },
  {
    icon: '📴',
    title: 'Offline-friendly',
    desc: 'Works when connectivity is poor — because healthcare can\'t wait.',
  },
  {
    icon: '🔗',
    title: 'Web + Mobile + Kiosk',
    desc: 'One platform, every touchpoint — from home to clinic to lobby.',
  },
  {
    icon: '📈',
    title: 'Built for small clinics, scalable to hospitals',
    desc: 'Start small. Grow when you\'re ready. No lock-in.',
  },
];

export default function Differentiators() {
  return (
    <section className="section-padding bg-healthcare-blue">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Why LHXP is different
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          Designed for real healthcare, not tech demos.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-card bg-healthcare-cream p-6 border border-healthcare-bgDark card-hover"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-healthcare-blue text-lg mb-2">{item.title}</h3>
              <p className="text-healthcare-blue/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
