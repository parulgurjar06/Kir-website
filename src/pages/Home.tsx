import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Cog, ArrowRight, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Modern Office Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/70 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto">
            Advanced Acoustic Solutions for Modern Spaces
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
            India-manufactured. Globally certified. Engineered for architects, contractors, and developers who refuse to compromise on acoustic performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 bg-primary-blue text-white rounded text-lg font-medium hover:bg-secondary-blue transition-colors">
              Request a Quote
            </Link>
            <Link to="/products" className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded text-lg font-medium hover:bg-white hover:text-primary-dark transition-colors">
              Explore Products
            </Link>
          </div>
        </div>

        {/* Trust Bar below hero */}
        <div className="absolute bottom-0 w-full glass bg-white/10 backdrop-blur-md border-t border-white/20 py-4 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white/90 text-sm font-accent">
            <span className="flex items-center gap-2"><ShieldCheck size={18} /> ISO 9001 Certified</span>
            <span className="flex items-center gap-2"><Globe size={18} /> UK Export Ready</span>
            <span className="flex items-center gap-2"><Cog size={18} /> Custom OEM</span>
            <span className="flex items-center gap-2"><Star size={18} /> 15+ Years Experience</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTRODUCTION */}
      <section className="py-24 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">Engineered silence. Delivered globally.</h2>
              <p className="text-charcoal mb-8 text-lg leading-relaxed">
                We design and manufacture premium acoustic panels and building materials that control sound and elevate architectural aesthetics.
              </p>
              <div className="p-6 bg-warm-gray rounded-lg border-l-4 border-primary-blue">
                <p className="text-2xl font-bold text-primary-dark mb-1">Serving 12+ countries across 4 continents</p>
                <p className="text-sm text-gray-500 uppercase font-accent tracking-wider">Proven Export Reliability</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Precision Manufacturing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT CATEGORIES */}
      <section className="py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Complete Acoustic Systems</h2>
            <p className="text-charcoal max-w-2xl mx-auto">Explore our range of technically superior acoustic materials designed for commercial applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Acoustic Wall Panels', 'Ceiling Panels', 'Sound Insulation', 'Acoustic Boards', 'PET Panels', 'Custom Solutions'].map((product, i) => (
              <div key={i} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80`} 
                    alt={product} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product}</h3>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">High-performance acoustic solutions engineered for demanding commercial environments.</p>
                  <Link to="/products" className="text-primary-blue font-medium flex items-center text-sm hover:text-secondary-blue">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHY KIR */}
      <section className="py-24 bg-primary-dark text-white bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why KIR Enterprises</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The preferred acoustic solutions partner for commercial developers across the UK and Europe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Precision Manufacturing', desc: 'Advanced CNC, automated lines ensuring exact tolerances.', icon: <Cog size={32} /> },
              { title: 'Export Compliance', desc: 'CE marking, UKCA ready, with full technical documentation.', icon: <ShieldCheck size={32} /> },
              { title: 'Custom Engineering', desc: 'OEM, bulk supply, and bespoke dimensional capabilities.', icon: <Cog size={32} /> },
              { title: 'Logistics Mastery', desc: 'FCL/LCL, customs support, and seamless door-to-door delivery.', icon: <Globe size={32} /> },
            ].map((feature, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur-sm">
                <div className="text-primary-blue mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FEATURED PROJECTS */}
      <section className="py-24 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">Featured Projects</h2>
              <p className="text-charcoal max-w-2xl">Acoustic excellence delivered across the globe.</p>
            </div>
            <Link to="/projects" className="hidden md:flex text-primary-blue font-medium items-center hover:text-secondary-blue">
              View All Projects <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-md h-80">
                <img 
                  src={`https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80`} 
                  alt="Project" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <p className="text-primary-blue font-accent text-xs font-bold mb-1 tracking-wider">CORPORATE HQ</p>
                  <h3 className="text-white text-xl font-bold mb-1">Tech Park London</h3>
                  <p className="text-gray-300 text-sm">Products Used: PET Panels, Ceiling Systems</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/projects" className="text-primary-blue font-medium flex items-center justify-center hover:text-secondary-blue">
              View All Projects <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-primary-blue to-secondary-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-grain mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to specify acoustic solutions for your next project?
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Connect with our export team to discuss your requirements, request samples, or get a detailed quote.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="px-6 py-4 rounded text-primary-dark font-medium w-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-4 bg-primary-dark text-white rounded font-bold hover:bg-gray-900 transition-colors whitespace-nowrap">
              Send Inquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
