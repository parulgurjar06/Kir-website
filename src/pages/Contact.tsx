import { useState } from 'react';
import { MapPin, Phone, Mail, Plus, Minus } from 'lucide-react';

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "What are your standard lead times?", a: "For standard acoustic panels, lead time is 2-3 weeks to port. Custom orders and OEM manufacturing typically require 4-6 weeks depending on volume and complexity." },
    { q: "What is the Minimum Order Quantity (MOQ)?", a: "Our standard MOQ for export is a 20ft container (LCL shipments considered on a case-by-case basis). For custom bespoke panels, the MOQ is 100 units." },
    { q: "Do you provide physical samples?", a: "Yes, we ship comprehensive sample kits via DHL/FedEx to architects and developers globally. Sample costs are fully refundable against your first commercial order." },
    { q: "What are your payment terms for international orders?", a: "Standard terms are 30% T/T advance and 70% against the copy of the Bill of Lading (B/L). LC at sight is accepted for orders exceeding $50,000." },
    { q: "Do you offer installation support?", a: "While we do not provide on-site installation outside India, we provide detailed technical drawings, installation guides, and video support. Our products are designed for straightforward installation by local contractors." },
    { q: "What warranty do you offer?", a: "All KIR acoustic products come with a standard 5-year manufacturing defect warranty when installed according to our guidelines in climate-controlled environments." }
  ];

  return (
    <div className="w-full pt-20">
      {/* HERO */}
      <section className="bg-primary-dark text-white py-20 bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Engineer Your Next Acoustic Environment.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Connect with our export specialists for specifications, pricing, and logistics.
          </p>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="py-24 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-primary-dark mb-6">Request a Quote</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Company</label>
                    <input type="text" className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Phone / WhatsApp</label>
                    <input type="tel" className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Country</label>
                    <input type="text" className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">Product Interest</label>
                    <select className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue appearance-none">
                      <option>Acoustic Wall Panels</option>
                      <option>Ceiling Panels</option>
                      <option>Sound Insulation</option>
                      <option>PET Acoustic Panels</option>
                      <option>Custom/OEM Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">Project Details & Volume Estimate</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-warm-gray border border-gray-200 rounded focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue placeholder-gray-400" placeholder="Tell us about your project requirements..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-primary-blue text-white font-bold rounded hover:bg-secondary-blue transition-colors text-lg">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Info & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark text-lg">Headquarters & Manufacturing</h4>
                      <p className="text-charcoal mt-1">KIR Enterprises, Industrial Estate, Mumbai, Maharashtra, India 400001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark text-lg">Export Division</h4>
                      <a href="mailto:exports@kirenterprises.com" className="text-primary-blue hover:underline mt-1 block">exports@kirenterprises.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-blue/10 text-primary-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary-dark text-lg">Global Sales</h4>
                      <p className="text-charcoal mt-1">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-bold text-primary-dark text-lg mb-2">Business Hours</h4>
                    <p className="text-charcoal text-sm">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
                    <p className="text-primary-blue text-sm font-medium mt-1">Our team accommodates UK/Europe timezone meetings upon request.</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 bg-warm-gray rounded-xl border border-gray-200 overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white px-4 py-2 rounded shadow-md font-medium text-primary-dark flex items-center gap-2">
                    <MapPin className="text-primary-blue" size={18} /> View on Google Maps
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-charcoal">Common questions regarding our export processes and products.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-200">
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold text-primary-dark pr-8">{faq.q}</span>
                  {openFaq === index ? <Minus className="text-primary-blue flex-shrink-0" size={20} /> : <Plus className="text-primary-blue flex-shrink-0" size={20} />}
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-charcoal text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
