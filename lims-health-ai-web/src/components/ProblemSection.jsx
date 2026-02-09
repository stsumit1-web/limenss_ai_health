const problems = [
  {
    title: 'Long waiting times',
    description: 'Patients spend hours in queues, clinics struggle with unpredictable flow.',
    icon: '⏳',
  },
  {
    title: 'Patients don\'t understand prescriptions or reports',
    description: 'Medical jargon creates confusion and anxiety, leading to poor adherence.',
    icon: '📋',
  },
  {
    title: 'Doctors repeat the same explanations',
    description: 'Valuable consultation time lost on repetitive clarifications.',
    icon: '🔄',
  },
  {
    title: 'Clinics struggle during peak hours & pandemics',
    description: 'Overwhelmed staff, stressed patients, no scalable solution.',
    icon: '📈',
  },
  {
    title: 'Paper records scattered everywhere',
    description: 'Lost files, duplicate work, no single source of truth.',
    icon: '📄',
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-healthcare-bg">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-healthcare-blue text-center mb-4">
          The real problems in everyday healthcare
        </h2>
        <p className="text-healthcare-blue/70 text-center max-w-2xl mx-auto mb-12">
          Challenges that affect patients, doctors, and clinics every single day.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="rounded-card bg-healthcare-cream/90 p-6 border border-healthcare-bgDark card-hover"
            >
              <div className="text-2xl mb-4">{problem.icon}</div>
              <h3 className="font-semibold text-healthcare-blue text-lg mb-2">{problem.title}</h3>
              <p className="text-healthcare-blue/70 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
