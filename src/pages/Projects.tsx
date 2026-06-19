import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    sector: 'Corporate Offices',
    title: 'Global Tech HQ, London',
    challenge: 'High reverberation in open-plan workspaces and lack of speech privacy in meeting rooms.',
    solution: 'Integrated PET acoustic baffles and fabric-wrapped wall panels tailored to brand colors.',
    products: 'PET Panels, Acoustic Wall Panels',
    result: 'Reduced RT60 to 0.6s, enhancing focus and privacy.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    sector: 'Education',
    title: 'City University Library',
    challenge: 'Need for high sound absorption in a massive atrium without disrupting natural light.',
    solution: 'Suspended custom acoustic clouds and perforated acoustic boards on lower walls.',
    products: 'Acoustic Boards, Ceiling Panels',
    result: 'Maintained a quiet, study-conducive environment for 500+ students.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    sector: 'Hospitality',
    title: 'Grand Plaza Hotel',
    challenge: 'Lobby area generated echo, diminishing the luxury experience for guests.',
    solution: 'Seamless installation of fire-rated slotted wooden acoustic boards blending with the aesthetic.',
    products: 'Custom Solutions, Acoustic Boards',
    result: 'Warm, inviting acoustic environment aligning with the premium brand.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    sector: 'Recording Studios',
    title: 'SoundWave Studios',
    challenge: 'Total sound isolation required for live rooms adjacent to the control room.',
    solution: 'High-density sound insulation layers combined with custom broadband absorbers.',
    products: 'Sound Insulation, Wall Panels',
    result: 'Achieved STC 65+ rating, ensuring zero sound bleed.',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    sector: 'Healthcare',
    title: 'Metro Wellness Clinic',
    challenge: 'Patient confidentiality at risk due to sound transmission between consultation rooms.',
    solution: 'Installation of mass-loaded barriers in partition walls and humidity-resistant ceiling tiles.',
    products: 'Ceiling Panels, Sound Insulation',
    result: 'HIPAA/GDPR-compliant speech privacy across all rooms.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    sector: 'Commercial Buildings',
    title: 'Central Shopping Arcade',
    challenge: 'Loud background noise causing fatigue for shoppers and retail staff.',
    solution: 'Large-scale deployment of economical, high-NRC suspended ceiling systems.',
    products: 'Ceiling Panels',
    result: 'Comfortable acoustic climate leading to increased dwell times.',
    image: 'https://images.unsplash.com/photo-1519567281027-11c020f5c18c?auto=format&fit=crop&w=800&q=80'
  }
];

const Projects = () => {
  return (
    <div className="w-full pt-20">
      {/* HERO */}
      <section className="bg-primary-dark text-white py-20 bg-grain relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Acoustic Performance. Proven in Practice.</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore how KIR Enterprises solves complex acoustic challenges across diverse sectors globally.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 bg-neutral-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {projectsData.map((project, index) => (
              <div key={project.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`order-1 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                  />
                </div>
                <div className={`order-2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <span className="text-primary-blue font-accent text-sm font-bold tracking-wider uppercase mb-2 block">{project.sector}</span>
                  <h2 className="text-3xl font-bold text-primary-dark mb-6">{project.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 font-accent">The Challenge</h4>
                      <p className="text-charcoal">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 font-accent">The Solution</h4>
                      <p className="text-charcoal">{project.solution}</p>
                    </div>
                    <div className="bg-warm-gray p-4 rounded-lg">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2 font-accent">The Result</h4>
                      <p className="text-primary-dark font-medium">{project.result}</p>
                    </div>
                    <p className="text-sm text-gray-500 italic">Products: {project.products}</p>
                  </div>
                  
                  <div className="mt-8">
                    <Link to="/contact" className="inline-flex items-center text-primary-blue font-medium hover:text-secondary-blue">
                      Similar project? Let's talk <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
