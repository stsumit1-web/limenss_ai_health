const trustPoints = [
  {
    title: 'Built for real clinics',
    desc: 'Designed with feedback from doctors and clinic staff on the ground.',
  },
  {
    title: 'Designed with doctors',
    desc: 'Every feature shaped by clinicians who understand patient care.',
  },
  {
    title: 'Compliance-ready',
    desc: 'Structured for healthcare regulations and data standards.',
  },
  {
    title: 'Secure & privacy-first',
    desc: 'Patient data protected. Access controlled. No shortcuts.',
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-healthcare-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-healthcare-blue text-center mb-4">
          Trust & credibility
        </h2>
        <p className="text-healthcare-blue/70 text-center max-w-2xl mx-auto mb-12">
          Healthcare demands more than features — it demands trust.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, i) => (
            <div
              key={i}
              className="rounded-card bg-healthcare-cream/90 p-6 border border-healthcare-bgDark text-center"
            >
              <div className="w-12 h-12 rounded-full bg-healthcare-teal/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-healthcare-teal font-bold text-lg">✓</span>
              </div>
              <h3 className="font-semibold text-healthcare-blue mb-2">{point.title}</h3>
              <p className="text-healthcare-blue/70 text-sm">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
