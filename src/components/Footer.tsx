import { Link } from 'react-router-dom';
import { Mail, MapPin, CheckCircle, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-gray-300 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded bg-primary-blue text-white font-bold text-xl">K</div>
              <span className="font-bold text-xl tracking-tight text-white">
                KIR Enterprises
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Engineered silence. Delivered globally. Advanced acoustic solutions manufactured in India for commercial developers worldwide.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-primary-blue transition-colors">Acoustic Wall Panels</Link></li>
              <li><Link to="/products" className="hover:text-primary-blue transition-colors">Ceiling Panels</Link></li>
              <li><Link to="/products" className="hover:text-primary-blue transition-colors">Sound Insulation</Link></li>
              <li><Link to="/products" className="hover:text-primary-blue transition-colors">Acoustic Boards</Link></li>
              <li><Link to="/products" className="hover:text-primary-blue transition-colors">PET Acoustic Panels</Link></li>
              <li><Link to="/products" className="hover:text-primary-blue transition-colors">Custom Solutions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary-blue transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-primary-blue transition-colors">Featured Projects</Link></li>
              <li><Link to="/export" className="hover:text-primary-blue transition-colors">Export & Logistics</Link></li>
              <li><Link to="/contact" className="hover:text-primary-blue transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary-blue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">Subscribe for industry insights and product updates.</p>
            <form className="flex mb-6" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-gray-800 border border-gray-700 text-white px-3 py-2 text-sm rounded-l focus:outline-none focus:border-primary-blue w-full"
              />
              <button className="bg-primary-blue text-white px-4 py-2 text-sm rounded-r hover:bg-secondary-blue transition-colors">
                Subscribe
              </button>
            </form>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-blue flex-shrink-0" />
                <span>KIR Enterprises, Mumbai, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary-blue flex-shrink-0" />
                <a href="mailto:exports@kirenterprises.com" className="hover:text-white">exports@kirenterprises.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Certifications Row */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-2 text-xs font-accent text-gray-400">
              <CheckCircle size={16} className="text-green-500" /> ISO 9001:2015 Certified
            </span>
            <span className="flex items-center gap-2 text-xs font-accent text-gray-400">
              <CheckCircle size={16} className="text-green-500" /> CE Marked
            </span>
            <span className="flex items-center gap-2 text-xs font-accent text-gray-400">
              <CheckCircle size={16} className="text-green-500" /> UKCA Ready
            </span>
          </div>
          <div className="text-xs text-gray-500 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} KIR Enterprises. All rights reserved.</p>
            <p className="mt-1 font-accent">Made for global trade.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
