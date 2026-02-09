export default function Footer() {
  return (
    <footer className="bg-healthcare-blue text-white section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold text-lg mb-4">Limenss AI Healthcare</h4>
            <p className="text-white/80 text-sm">
              LHXP — Healthcare without queues, confusion, or chaos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/70">Contact</h4>
            <p className="text-white/80 text-sm">
              <a href="mailto:info.limenssgroup@gmail.com" className="hover:text-white transition-colors">info.limenssgroup@gmail.com</a>
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/70">Quick links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#cta" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy & Disclaimer</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2">
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-white/70">Disclaimer</h4>
            <p className="text-white/70 text-sm leading-relaxed">
              AI explanations are educational only and not a substitute for medical advice. Always consult a qualified healthcare provider for diagnosis and treatment.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Limenss AI Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
