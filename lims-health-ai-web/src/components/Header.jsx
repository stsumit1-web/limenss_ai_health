import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-healthcare-bg/95 backdrop-blur border-b border-healthcare-bgDark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <span className="text-healthcare-teal font-bold text-xl">LHXP</span>
            <span className="text-healthcare-blue/70 text-sm hidden sm:inline">Limenss AI Healthcare</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-healthcare-blue/70 hover:text-healthcare-teal text-sm font-medium transition-colors">Problems</a>
            <a href="#solution" className="text-healthcare-blue/70 hover:text-healthcare-teal text-sm font-medium transition-colors">Solution</a>
            <a href="#platform" className="text-healthcare-blue/70 hover:text-healthcare-teal text-sm font-medium transition-colors">Platform</a>
            <a href="#features" className="text-healthcare-blue/70 hover:text-healthcare-teal text-sm font-medium transition-colors">Features</a>
            <a href="#cta" className="px-4 py-2 rounded-card bg-healthcare-teal text-white text-sm font-semibold hover:bg-healthcare-teal/90 transition-colors">
              Request Demo
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-healthcare-blue"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <nav className="md:hidden py-4 border-t border-healthcare-ice">
            <div className="flex flex-col gap-4">
              <a href="#problem" className="text-healthcare-blue/70 hover:text-healthcare-teal" onClick={() => setOpen(false)}>Problems</a>
              <a href="#solution" className="text-healthcare-blue/70 hover:text-healthcare-teal" onClick={() => setOpen(false)}>Solution</a>
              <a href="#platform" className="text-healthcare-blue/70 hover:text-healthcare-teal" onClick={() => setOpen(false)}>Platform</a>
              <a href="#features" className="text-healthcare-blue/70 hover:text-healthcare-teal" onClick={() => setOpen(false)}>Features</a>
              <a href="#cta" className="text-healthcare-teal font-semibold" onClick={() => setOpen(false)}>Request Demo</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
