const features = [
  {
    title: 'Tele-consultation',
    desc: 'Connect with doctors from home when visiting isn\'t possible.',
  },
  {
    title: 'Remote triage',
    desc: 'AI helps assess urgency so care reaches those who need it first.',
  },
  {
    title: 'Home report explanation',
    desc: 'Understand labs and prescriptions without stepping into a clinic.',
  },
  {
    title: 'Continuity during lockdowns',
    desc: 'Care continues even when doors must close.',
  },
];

export default function PandemicSection() {
  return (
    <section className="section-padding bg-healthcare-blue">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Healthcare that never shuts down
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          When everything else stops, care must continue.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-card bg-healthcare-cream/90 p-8 border border-healthcare-bgDark">
            <div className="text-4xl mb-6">🏠</div>
            <h3 className="font-semibold text-healthcare-blue text-lg mb-4">Remote care</h3>
            <p className="text-healthcare-blue/70 text-sm leading-relaxed mb-6">
              Doctor consulting remotely. Patient at home. Reports explained in Hindi. No travel, no crowding.
            </p>
            <div className="space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-healthcare-teal">•</span>
                  <div>
                    <span className="font-medium text-healthcare-blue">{f.title}</span>
                    <span className="text-healthcare-blue/70"> — {f.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-card bg-healthcare-cream/90 border border-healthcare-bgDark p-8">
            <div className="text-4xl mb-4">🩺</div>
            <h4 className="font-semibold text-healthcare-blue text-lg mb-3">Remote care, anytime</h4>
            <p className="text-healthcare-blue/80 text-sm leading-relaxed mb-4">
              When visiting a clinic isn&apos;t possible — during lockdowns, for follow-ups, or for patients who can&apos;t travel — LHXP keeps care connected.
            </p>
            <p className="text-healthcare-blue/70 text-sm leading-relaxed">
              Doctor consults from the clinic. Patient stays at home. Reports and prescriptions explained in Hindi. No crowding, no travel, no gap in care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
