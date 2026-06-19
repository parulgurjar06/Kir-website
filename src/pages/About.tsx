import { Shield, Target, Globe, Award, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full pt-20">
      {/* SECTION 1: HERO */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-primary-dark bg-grain">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541888086925-ebca89ba716e?auto=format&fit=crop&w=1920&q=80" 
          alt="Acoustic Pattern" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 w-full animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Built on Precision.<br/>Driven by Export.
          </h1>
        </div>
      </section>

      {/* SECTION 2 & 3: STORY & MISSION */}
      <section className="py-24 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Our Journey</h2>
              <p className="text-charcoal leading-relaxed mb-6">
                Founded in India, KIR Enterprises began with a singular focus: to engineer acoustic materials that rival European standards at globally competitive prices. 
              </p>
              <p className="text-charcoal leading-relaxed mb-8">
                Over the years, we have scaled our manufacturing capabilities and specialized entirely in high-performance acoustics. Today, our primary focus is the UK, Europe, and international commercial developers. We understand the intricacies of export, from rigorous compliance standards to seamless logistics.
              </p>
              
              <div className="space-y-6 mt-12">
                <div className="bg-warm-gray p-8 rounded-lg border-l-4 border-primary-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="text-primary-blue" size={24} />
                    <h3 className="text-xl font-bold text-primary-dark">Mission</h3>
                  </div>
                  <p className="text-charcoal">
                    To deliver acoustic environments that enhance human productivity and wellbeing, through technically superior, cost-efficient building materials.
                  </p>
                </div>
                <div className="bg-warm-gray p-8 rounded-lg border-l-4 border-secondary-blue">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="text-secondary-blue" size={24} />
                    <h3 className="text-xl font-bold text-primary-dark">Vision</h3>
                  </div>
                  <p className="text-charcoal">
                    To be the preferred acoustic solutions partner for commercial developers across the UK, Europe, and emerging markets by 2030.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="sticky top-32">
                <img 
                  src="https://images.unsplash.com/photo-1565620731358-e8c049d5c417?auto=format&fit=crop&w=800&q=80" 
                  alt="Factory Operations" 
                  className="rounded-xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: QUALITY & COMPLIANCE */}
      <section className="py-24 bg-primary-dark text-white bg-grain">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quality & Compliance</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We engineer our products to meet the most stringent international building codes.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 flex items-center gap-4 min-w-[250px]">
              <Award className="text-primary-blue" size={32} />
              <div>
                <p className="font-bold">ISO 9001:2015</p>
                <p className="text-xs text-gray-400 font-accent">Quality Management</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 flex items-center gap-4 min-w-[250px]">
              <Shield className="text-primary-blue" size={32} />
              <div>
                <p className="font-bold">CE Marked</p>
                <p className="text-xs text-gray-400 font-accent">European Conformity</p>
              </div>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 flex items-center gap-4 min-w-[250px]">
              <CheckCircle className="text-primary-blue" size={32} />
              <div>
                <p className="font-bold">UKCA Ready</p>
                <p className="text-xs text-gray-400 font-accent">UK Conformity Assessed</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {['Raw Material Sourcing', 'Precision CNC Machining', 'Acoustic Performance Testing', 'Export Packaging & QA'].map((step, i) => (
              <div key={i} className="text-center p-6 relative">
                <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                  {i + 1}
                </div>
                {i !== 3 && <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gray-800"></div>}
                <p className="font-medium text-sm text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
