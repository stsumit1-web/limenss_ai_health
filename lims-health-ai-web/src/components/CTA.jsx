import { useState } from 'react';

const FORMSUBMIT_URL = 'https://formsubmit.co/info.limenssgroup@gmail.com';

export default function CTA() {
  const [formData, setFormData] = useState({
    clinicName: '',
    city: '',
    contact: '',
    email: '',
    type: 'Clinic',
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formDataToSend = new FormData();
    formDataToSend.append('_subject', `LHXP Enquiry: ${formData.clinicName || 'New request'}`);
    formDataToSend.append('_template', 'table');
    formDataToSend.append('Clinic name', formData.clinicName);
    formDataToSend.append('City', formData.city);
    formDataToSend.append('Contact number', formData.contact);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('Type', formData.type);

    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        body: formDataToSend,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ clinicName: '', city: '', contact: '', email: '', type: 'Clinic' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="cta" className="section-padding bg-healthcare-teal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-4">
          Bring calm, clarity, and control back to healthcare.
        </h2>
        <p className="text-white/90 text-center max-w-2xl mx-auto mb-12">
          Ready to see how LHXP can transform your clinic? Get in touch.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#contact-form"
            className="inline-flex items-center px-6 py-3.5 rounded-card bg-white text-healthcare-teal font-semibold hover:bg-healthcare-cream transition-all duration-300"
          >
            Request a Demo
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center px-6 py-3.5 rounded-card border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Start a Pilot Clinic
          </a>
          <a
            href="#contact-form"
            className="inline-flex items-center px-6 py-3.5 rounded-card border-2 border-white text-white font-semibold hover:bg-white/10 transition-all duration-300"
          >
            Talk to Us
          </a>
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto rounded-card bg-white/10 backdrop-blur p-6 sm:p-8 border border-white/20"
        >
          {status === 'success' && (
            <div className="mb-6 p-4 rounded-lg bg-white/20 text-white text-center">
              Thank you! We&apos;ll get in touch soon at the email you provided.
            </div>
          )}
          {status === 'error' && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 text-white text-center">
              Something went wrong. Please try again or email us directly at info.limenssgroup@gmail.com
            </div>
          )}
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="clinicName" className="block text-white/90 text-sm font-medium mb-2">Clinic name</label>
              <input
                type="text"
                id="clinicName"
                name="clinicName"
                value={formData.clinicName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="e.g. City Care Clinic"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-white/90 text-sm font-medium mb-2">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="e.g. Mumbai"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contact" className="block text-white/90 text-sm font-medium mb-2">Contact number</label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="10-digit mobile number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="e.g. clinic@example.com"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="type" className="block text-white/90 text-sm font-medium mb-2">Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-white/30 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <option value="Clinic" className="text-healthcare-blue">Clinic</option>
              <option value="Hospital" className="text-healthcare-blue">Hospital</option>
              <option value="Lab" className="text-healthcare-blue">Lab</option>
              <option value="Other" className="text-healthcare-blue">Other</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full py-3.5 rounded-card bg-white text-healthcare-teal font-semibold hover:bg-healthcare-cream transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Submit Request'}
          </button>
        </form>
      </div>
    </section>
  );
}
