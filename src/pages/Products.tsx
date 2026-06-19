import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: 'Acoustic Wall Panels',
    category: 'Panels',
    desc: 'Fabric-wrapped modular panels for superior sound absorption.',
    specs: ['NRC 0.85', 'Fire Class A', 'Custom sizes'],
    image: '/images/wall_panels.png',
  },
  {
    id: 2,
    name: 'Ceiling Panels',
    category: 'Ceilings',
    desc: 'Suspended systems, concealed grids, and acoustic baffles.',
    specs: ['600×600/1200mm', 'Humidity resistant', 'NRC 0.90'],
    image: '/images/ceiling_panels.png',
  },
  {
    id: 3,
    name: 'Sound Insulation',
    category: 'Insulation',
    desc: 'Mass-loaded barriers, resilient channels, and underlay.',
    specs: ['STC ratings > 50', 'High Density', 'Roll dimensions'],
    image: '/images/sound_insulation.png',
  },
  {
    id: 4,
    name: 'Acoustic Boards',
    category: 'Panels',
    desc: 'MDF core, perforated, and slotted wooden designs.',
    specs: ['Thickness 12–25mm', 'Perforation patterns', 'FSC Certified'],
    image: '/images/acoustic_boards.png',
  },
  {
    id: 5,
    name: 'PET Acoustic Panels',
    category: 'Eco-Friendly',
    desc: 'Recycled polyester, eco-friendly, and colorful options.',
    specs: ['100% recyclable', 'NRC 0.80', '12 colors'],
    image: '/images/pet_panels.png',
  },
  {
    id: 6,
    name: 'Custom Solutions',
    category: 'Bespoke',
    desc: 'Bespoke CNC cutting, branded panels, and unique shapes.',
    specs: ['MOQ 100 units', '2–4 week turnaround', 'Technical drawings'],
    image: '/images/custom_acoustic.png',
  },
];

const categories = ['All', 'Panels', 'Ceilings', 'Insulation', 'Eco-Friendly', 'Bespoke'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  return (
    <div className="w-full pt-20">
      {/* SECTION 1: HERO */}
      <section className="bg-neutral-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Complete Acoustic Systems. Custom Specifications.</h1>
          <p className="text-charcoal max-w-2xl mx-auto text-lg">
            Engineered materials for precise sound control in commercial spaces.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-8 bg-white sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 hide-scrollbar gap-2 sm:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-dark text-white'
                    : 'bg-warm-gray text-charcoal hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 bg-neutral-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary-dark">{product.name}</h3>
                    <span className="text-xs bg-warm-gray text-gray-500 px-2 py-1 rounded font-accent uppercase">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-sm text-charcoal mb-4 flex-grow">{product.desc}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-accent">Technical Highlights</h4>
                    <ul className="space-y-1">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-primary-dark flex items-center before:content-[''] before:w-1 before:h-1 before:bg-primary-blue before:rounded-full before:mr-2">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 mt-auto">
                    <a href="#" className="flex items-center justify-center gap-2 w-full py-2.5 border border-gray-200 text-charcoal text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                      <Download size={16} /> Download Specifications
                    </a>
                    <Link to="/contact" className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary-blue text-white text-sm font-medium rounded hover:bg-secondary-blue transition-colors">
                      Request Quote
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

export default Products;
