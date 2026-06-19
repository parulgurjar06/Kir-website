import React from 'react';
import { Ship, Package, FileText, CheckCircle, Anchor, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Export = () => {
  return (
    <div className="w-full pt-20">
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80" 
          alt="Shipping Containers" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">From Our Factory to Your Site. Seamlessly.</h1>
          <p className="text-xl text-gray-300 font-light">
            We handle the complexities of international trade so you can focus on building.
          </p>
        </div>
      </section>

      {/* Trust Indicator */}
      <div className="bg-primary-blue text-white py-4 text-center text-sm font-medium tracking-wide">
        "We handle customs. You focus on your project."
      </div>

      {/* SECTIONS */}
      <section className="py-24 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* International Capability */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Anchor className="text-primary-blue" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">International Capability</h3>
                  <p className="text-charcoal leading-relaxed">
                    With over a decade of export experience, our logistics team is fluent in Incoterms (FOB, CIF, DDP). We manage the entire supply chain, ensuring predictable lead times and transparent cost structures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Globe className="text-primary-blue" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">UK & Europe Focus</h3>
                  <p className="text-charcoal leading-relaxed">
                    Our products are engineered for the European market. We are UKCA marking ready, have Brexit-adjusted logistics pipelines, and maintain strong partnerships with London/UK distributors for rapid fulfillment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Package className="text-primary-blue" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">Packaging & Logistics</h3>
                  <p className="text-charcoal leading-relaxed">
                    Acoustic materials require specialized handling. We utilize seaworthy packing, ISPM-15 compliant palletization, and rigorous container loading protocols to guarantee zero transit damage.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side info */}
            <div className="space-y-8">
              <div className="bg-warm-gray p-8 rounded-xl border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <Ship className="text-primary-dark" size={28} />
                  <h3 className="text-xl font-bold text-primary-dark">OEM & Bulk Supply</h3>
                </div>
                <p className="text-charcoal mb-6">
                  We offer white-label manufacturing and custom branding for large-scale developers and distributors. Volume pricing tiers are available for FCL (Full Container Load) shipments.
                </p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-primary-dark text-white rounded font-medium hover:bg-gray-800 transition-colors">
                  Discuss OEM Partnership
                </Link>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-primary-dark" size={28} />
                  <h3 className="text-xl font-bold text-primary-dark">Documentation Support</h3>
                </div>
                <p className="text-charcoal mb-4">We provide comprehensive export documentation to ensure rapid customs clearance:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-charcoal"><CheckCircle size={16} className="text-green-500" /> Commercial Invoices & Packing Lists</li>
                  <li className="flex items-center gap-2 text-sm text-charcoal"><CheckCircle size={16} className="text-green-500" /> Certificates of Origin</li>
                  <li className="flex items-center gap-2 text-sm text-charcoal"><CheckCircle size={16} className="text-green-500" /> Fumigation Certificates</li>
                  <li className="flex items-center gap-2 text-sm text-charcoal"><CheckCircle size={16} className="text-green-500" /> Acoustic & Fire Test Reports</li>
                  <li className="flex items-center gap-2 text-sm text-charcoal"><CheckCircle size={16} className="text-green-500" /> Bill of Lading (B/L)</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Export;
