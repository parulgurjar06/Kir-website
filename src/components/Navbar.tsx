import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Projects', path: '/projects' },
    { name: 'Export', path: '/export' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className={`w-8 h-8 flex items-center justify-center rounded bg-primary-blue text-white font-bold text-xl`}>K</div>
            <span className={`font-bold text-xl tracking-tight ${!isScrolled && isHome ? 'text-white' : 'text-primary-dark'}`}>
              KIR Enterprises
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary-blue ${
                  !isScrolled && isHome ? 'text-gray-200' : 'text-charcoal'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link 
              to="/contact" 
              className={`px-5 py-2.5 rounded text-sm font-medium transition-transform hover:scale-105 ${
                !isScrolled && isHome ? 'bg-white text-primary-dark' : 'bg-primary-blue text-white'
              }`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${!isScrolled && isHome ? 'text-white' : 'text-primary-dark'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl h-screen flex flex-col pt-8">
          <div className="px-4 space-y-6">
            {navLinks.map((link, index) => (
              <div 
                key={link.name}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Link
                  to={link.path}
                  className="block text-2xl font-semibold text-primary-dark hover:text-primary-blue"
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <div className="pt-6 animate-fade-up" style={{ animationDelay: `${navLinks.length * 100}ms` }}>
              <Link
                to="/contact"
                className="block text-center w-full bg-primary-blue text-white px-5 py-3 rounded font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
