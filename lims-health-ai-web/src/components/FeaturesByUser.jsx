import { useState } from 'react';

const roles = [
  {
    id: 'doctors',
    label: 'For Doctors',
    emoji: '👨‍⚕️',
    points: [
      'No typing, no EMR burden',
      'Write naturally on digital pad',
      'Zero disruption to workflow',
      'AI explains prescriptions to patients',
      'Reduced interruptions & follow-up confusion',
    ],
    visual: 'Doctor writing on tablet with stylus',
    visualText: 'Write prescriptions naturally on a digital pad — no typing, no complex EMR. Your handwriting becomes digital records instantly.',
    illustration: 'doctor-writing',
  },
  {
    id: 'clinics',
    label: 'For Clinics & Hospitals',
    emoji: '🏥',
    points: [
      'AI front desk & queue management',
      'Reduced waiting time (40–60%)',
      'Better patient flow',
      'Admin dashboards & SOPs',
      'Pandemic-ready operations',
    ],
    visual: 'Calm clinic waiting area with screens',
    visualText: 'AI manages the queue. Screens show token numbers. Patients wait less. Staff stay calm even during peak hours.',
    illustration: 'clinic-screens',
  },
  {
    id: 'patients',
    label: 'For Patients',
    emoji: '🧑‍🤝‍🧑',
    points: [
      'Access using just 6-digit Patient ID',
      'Understand prescriptions & reports in Hindi',
      'Know when to consult doctor',
      'No login, no app confusion',
    ],
    visual: 'Elderly patient using phone confidently',
    visualText: 'Just enter your 6-digit Patient ID. See prescriptions and reports explained in simple Hindi. No app login, no confusion.',
    illustration: 'patient-phone',
  },
  {
    id: 'labs',
    label: 'For Labs',
    emoji: '🧪',
    points: [
      'Digital report delivery',
      'AI report explanation',
      'Reduced patient calls',
      'Faster turnaround time',
    ],
    visual: 'Diagnostic lab + digital reports',
    visualText: 'Reports delivered digitally. AI explains results to patients. Fewer calls to the lab. Faster, clearer communication.',
    illustration: 'lab-reports',
  },
  {
    id: 'pharmacies',
    label: 'For Pharmacies',
    emoji: '💊',
    points: [
      'E-prescription access',
      'Refill reminders',
      'Better adherence',
    ],
    visual: 'Pharmacy with digital prescriptions',
    visualText: 'Access e-prescriptions directly. AI-powered refill reminders. Better medication adherence for patients.',
    illustration: 'pharmacy-digital',
  },
  {
    id: 'family',
    label: 'For Family & Caregivers',
    emoji: '👨‍👩‍👧',
    points: [
      'Remote access',
      'Peace of mind',
      'Emergency awareness',
    ],
    visual: 'Family caring for elderly at home',
    visualText: 'Family members can access reports and prescriptions remotely. Stay informed. Peace of mind from anywhere.',
    illustration: 'family-care',
  },
];

const Illustration = ({ type }) => {
  const svgClass = "w-full h-full";
  const stroke = "#34A0A4";
  const fill = "#E5ECF0";

  if (type === 'doctor-writing') {
    return (
      <svg viewBox="0 0 200 150" className={svgClass} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="30" width="100" height="70" rx="8" fill="#E5ECF0" stroke={stroke} strokeWidth="2"/>
        <rect x="60" y="40" width="80" height="50" rx="4" fill="#F8FAFA"/>
        <path d="M70 52 Q95 48 120 54" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M70 62 Q90 60 115 65" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M70 72 Q85 72 100 75" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none"/>
        <rect x="115" y="25" width="6" height="35" rx="3" fill={stroke} transform="rotate(-15 118 42)"/>
        <ellipse cx="118" cy="58" rx="4" ry="3" fill={stroke}/>
        <rect x="105" y="55" width="25" height="12" rx="4" fill="#D8E2E8"/>
      </svg>
    );
  }
  if (type === 'clinic-screens') {
    return (
      <svg viewBox="0 0 200 150" className={svgClass} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="50" width="50" height="40" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5"/>
        <text x="45" y="75" fontSize="14" fontWeight="bold" fill={stroke}>#42</text>
        <rect x="75" y="45" width="50" height="50" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5"/>
        <text x="100" y="75" fontSize="12" fill={stroke}>Token</text>
        <rect x="130" y="50" width="50" height="40" rx="4" fill={fill} stroke={stroke} strokeWidth="1.5"/>
        <text x="155" y="75" fontSize="14" fontWeight="bold" fill={stroke}>#43</text>
        <rect x="40" y="100" width="30" height="25" rx="2" fill="#F8FAFA" stroke={stroke} strokeWidth="1"/>
        <rect x="85" y="100" width="30" height="25" rx="2" fill="#F8FAFA" stroke={stroke} strokeWidth="1"/>
        <rect x="130" y="100" width="30" height="25" rx="2" fill="#F8FAFA" stroke={stroke} strokeWidth="1"/>
      </svg>
    );
  }
  if (type === 'patient-phone') {
    return (
      <svg viewBox="0 0 200 150" className={svgClass} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="50" height="90" rx="8" fill="#E5ECF0" stroke={stroke} strokeWidth="2"/>
        <rect x="80" y="35" width="40" height="60" rx="4" fill="#F8FAFA"/>
        <text x="95" y="60" fontSize="10" fill={stroke}>12 34 56</text>
        <rect x="90" y="70" width="20" height="4" rx="1" fill="#76C893"/>
        <rect x="90" y="78" width="15" height="4" rx="1" fill="#D8E2E8"/>
        <rect x="90" y="86" width="18" height="4" rx="1" fill="#D8E2E8"/>
        <circle cx="100" cy="115" r="8" fill="#D8E2E8"/>
        <circle cx="100" cy="115" r="4" fill={stroke}/>
      </svg>
    );
  }
  if (type === 'lab-reports') {
    return (
      <svg viewBox="0 0 200 150" className={svgClass} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="40" width="60" height="80" rx="4" fill="#F8FAFA" stroke={stroke} strokeWidth="1.5"/>
        <rect x="35" y="50" width="50" height="4" rx="1" fill={stroke}/>
        <rect x="35" y="58" width="40" height="4" rx="1" fill="#D8E2E8"/>
        <rect x="35" y="66" width="45" height="4" rx="1" fill="#D8E2E8"/>
        <rect x="35" y="74" width="35" height="4" rx="1" fill="#76C893"/>
        <rect x="110" y="45" width="60" height="70" rx="4" fill="#E5ECF0" stroke={stroke} strokeWidth="1.5"/>
        <rect x="118" y="55" width="44" height="35" rx="2" fill="#F8FAFA"/>
        <text x="128" y="75" fontSize="8" fill={stroke}>Report</text>
        <path d="M120 85 L130 95 L145 80" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    );
  }
  if (type === 'pharmacy-digital') {
    return (
      <svg viewBox="0 0 200 150" className={svgClass} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="40" width="100" height="70" rx="4" fill="#E5ECF0" stroke={stroke} strokeWidth="1.5"/>
        <rect x="60" y="50" width="80" height="25" rx="2" fill="#F8FAFA"/>
        <rect x="60" y="80" width="25" height="25" rx="2" fill="#76C893" stroke={stroke} strokeWidth="1"/>
        <rect x="90" y="80" width="25" height="25" rx="2" fill="#76C893" stroke={stroke} strokeWidth="1"/>
        <rect x="120" y="80" width="25" height="25" rx="2" fill="#76C893" stroke={stroke} strokeWidth="1"/>
        <rect x="60" y="50" width="12" height="12" rx="2" fill={stroke}/>
        <text x="78" y="60" fontSize="8" fill={stroke}>E-Rx</text>
      </svg>
    );
  }
  if (type === 'family-care') {
    return (
      <svg viewBox="0 0 200 150" className={svgClass} fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="60" r="18" fill="#E5ECF0" stroke={stroke} strokeWidth="1.5"/>
        <path d="M35 85 Q50 98 65 85" fill="#E5ECF0" stroke={stroke} strokeWidth="1"/>
        <rect x="95" y="35" width="55" height="40" rx="4" fill="#E5ECF0" stroke={stroke} strokeWidth="1.5"/>
        <rect x="102" y="42" width="41" height="18" rx="2" fill="#F8FAFA"/>
        <path d="M105 52 L112 58 L125 45" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="155" cy="65" r="16" fill="#76C893" stroke={stroke} strokeWidth="1"/>
        <path d="M145 82 Q155 92 165 82" fill="#76C893" stroke={stroke} strokeWidth="1"/>
        <path d="M68 60 Q100 50 132 60" stroke="#76C893" strokeWidth="1.5" strokeDasharray="4 2" fill="none"/>
      </svg>
    );
  }
  return null;
};

export default function FeaturesByUser() {
  const [active, setActive] = useState('doctors');

  const current = roles.find((r) => r.id === active) || roles[0];

  return (
    <section className="section-padding bg-healthcare-bgDark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-healthcare-blue text-center mb-4">
          Designed for everyone in healthcare
        </h2>
        <p className="text-healthcare-blue/70 text-center max-w-2xl mx-auto mb-12">
          From doctors to patients to labs — LHXP serves every role.
        </p>

        {/* Tabs - scrollable on mobile */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActive(role.id)}
              className={`shrink-0 px-4 py-2.5 rounded-card font-medium text-sm transition-all duration-300 ${
                active === role.id
                  ? 'bg-healthcare-teal text-white shadow-md'
                  : 'bg-healthcare-cream text-healthcare-blue/70 hover:bg-healthcare-teal/10 hover:text-healthcare-teal border border-healthcare-bgDark'
              }`}
            >
              <span className="mr-2">{role.emoji}</span>
              {role.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-card bg-healthcare-cream p-8 border border-healthcare-bgDark shadow-sm">
            <div className="text-4xl mb-6">{current.emoji}</div>
            <h3 className="font-semibold text-healthcare-blue text-2xl mb-6">{current.label}</h3>
            <ul className="space-y-4">
              {current.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-healthcare-mint/30 flex items-center justify-center text-healthcare-teal text-sm">✓</span>
                  <span className="text-healthcare-blue/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-card bg-healthcare-cream/90 border border-healthcare-bgDark overflow-hidden">
            {current.illustration ? (
              <div className="p-6">
                <div className="aspect-[4/3] max-h-48 mx-auto mb-4 flex items-center justify-center">
                  <Illustration type={current.illustration} />
                </div>
                <h4 className="font-semibold text-healthcare-blue text-lg mb-2">{current.visual}</h4>
                <p className="text-healthcare-blue/80 text-sm leading-relaxed">
                  {current.visualText}
                </p>
              </div>
            ) : (
              <div className="p-8">
                <div className="text-4xl mb-4">{current.emoji}</div>
                <h4 className="font-semibold text-healthcare-blue text-lg mb-3">{current.visual}</h4>
                <p className="text-healthcare-blue/80 text-sm leading-relaxed">
                  {current.visualText}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
