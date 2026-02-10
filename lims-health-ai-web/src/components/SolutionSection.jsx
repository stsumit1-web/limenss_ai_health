const steps = [
  { num: 1, title: 'Patient registers', desc: 'Gets 6-digit Patient ID — no login, no app confusion' },
  { num: 2, title: 'Doctor consults', desc: 'Uses digital writing pad — natural, no typing burden' },
  { num: 3, title: 'Prescription saved instantly', desc: 'Digital record, no paper, no lost files' },
  { num: 4, title: 'Patient understands everything', desc: 'AI explains prescriptions and reports in Hindi — made clear and simple' },
  { num: 5, title: 'Clinics operate faster & calmer', desc: 'Better flow, reduced waiting, pandemic-ready' },
];

export default function SolutionSection() {
  return (
    <section className="section-padding bg-healthcare-blue">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          A simple, connected healthcare ecosystem
        </h2>
        <p className="text-white/80 text-center max-w-2xl mx-auto mb-16">
          One flow. Clear steps. Less chaos.
        </p>

        <div className="relative">
          {/* Flow line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-healthcare-teal/30 -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex flex-col lg:flex-row gap-6 items-center ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 lg:max-w-md">
                  <div className="rounded-card bg-healthcare-cream p-6 shadow-sm border border-healthcare-bgDark card-hover">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-healthcare-teal text-white font-bold text-sm mb-4">
                      {step.num}
                    </span>
                    <h3 className="font-semibold text-healthcare-blue text-lg mb-2">{step.title}</h3>
                    <p className="text-healthcare-blue/70 text-sm">{step.desc}</p>
                  </div>
                </div>
                <div className="hidden lg:flex w-16 shrink-0 justify-center">
                  <div className="w-12 h-12 rounded-full bg-healthcare-teal/20 border-2 border-healthcare-teal flex items-center justify-center">
                    <span className="text-healthcare-teal font-bold">{step.num}</span>
                  </div>
                </div>
                <div className="flex-1 lg:max-w-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
