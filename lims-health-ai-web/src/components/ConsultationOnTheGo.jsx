import walletCoinsImage from '../assets/wallet-coins.svg';

const steps = [
  {
    num: 1,
    title: 'Walk into the booth',
    desc: 'Like an ATM — step inside a private, hygienic Consultation Booth. No queues, no crowded waiting rooms.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    alt: 'Modern self-service kiosk booth',
  },
  {
    num: 2,
    title: 'Book consultation on demand',
    desc: 'Select your concern, choose a time slot, and connect with a doctor instantly. Consultations start right there in the booth.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    alt: 'Video consultation with doctor on screen',
  },
  {
    num: 3,
    title: 'Listen to your AI prescription summary',
    desc: 'After the consultation, our AI generates a clear prescription summary. Listen to it in the booth — in your preferred language — so you never miss a detail.',
    image: 'https://images.unsplash.com/photo-1677442136019-647fa596a64c?w=800&q=80',
    fallbackImage: '/images/ai-prescription.svg',
    alt: 'AI and generative AI prescription summary',
  },
  {
    num: 4,
    title: 'See prescribed medicines & buy on the go',
    desc: 'The system shows the exact medicines from your prescription. Choose to buy them right there — no extra trip to a pharmacy.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
    alt: 'Pharmacy medicines on shelf',
  },
  {
    num: 5,
    title: 'Pay with Wallet Coins',
    desc: 'Use coins earned from consultations, referrals, and engagement. No cash needed — your health rewards become real savings.',
    image: walletCoinsImage,
    alt: 'Wallet coins and rewards',
  },
  {
    num: 6,
    title: 'Get delivery in the booth in ~10 minutes',
    desc: 'Medicines are dispensed or delivered to your booth within about 10 minutes. Walk in, consult, and walk out with your prescription and meds — all in one stop.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80',
    fallbackImage: '/images/medicine-delivery.svg',
    alt: 'Medicine delivery to booth',
  },
];

export default function ConsultationOnTheGo() {
  return (
    <section id="consultation-on-the-go" className="section-padding bg-healthcare-blue">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Consultation On the Go
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Think ATM for healthcare. Walk into a booth, get a consultation, hear your AI prescription summary, buy medicines with wallet coins, and receive them in the booth within ~10 minutes.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-healthcare-mint font-medium text-sm">
            <span aria-hidden>🏥</span>
            <span>One booth. Consult → Prescription → Meds → Done.</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.num}
              className="rounded-card overflow-hidden border border-healthcare-bgDark bg-healthcare-cream shadow-sm card-hover flex flex-col"
            >
              <div className="aspect-[4/3] relative bg-healthcare-bgDark shrink-0">
                <img
                  src={step.image}
                  alt={step.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target;
                    if (target.dataset.fallbackUsed) return;
                    target.dataset.fallbackUsed = '1';
                    target.src = step.fallbackImage || `https://placehold.co/800x600/E5ECF0/184E77?text=${encodeURIComponent(step.title)}`;
                  }}
                />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-healthcare-teal text-white font-bold flex items-center justify-center shadow-md">
                  {step.num}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-healthcare-blue text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-healthcare-blue/70 text-sm leading-relaxed flex-1">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-card bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-6 sm:p-8 text-center">
          <h3 className="font-semibold text-white text-lg mb-2">
            Earn Wallet Coins
          </h3>
          <p className="text-white/90 text-sm max-w-xl mx-auto mb-4">
            Use coins from consultations, referring patients or users, and engagement — then spend them on medicines and services at the booth.
          </p>
          <p className="text-white font-medium text-sm">
            Consultation On the Go: healthcare that fits your time, right where you are.
          </p>
        </div>
      </div>
    </section>
  );
}
