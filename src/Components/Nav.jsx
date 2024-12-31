'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Save More On App', href: '#' },
    { name: 'Become a Seller', href: '#' },
    { name: 'Help And Support', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; 
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      setActiveSection(currentSection || 'Home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={` top-0 w-full z-50 ${
        isScrolled ? 'bg-gray-900 shadow-lg fixed ' : 'bg-[#f57224] '
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-xl">
            <Image src='/logod.png' alt='logo' width={400} height={400} className='w-full h-20 mt-20'/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${
                  activeSection === link.name.toLowerCase()
                    ? 'text-green-500'
                    : 'text-white'
                } hover:text-green-500 transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="space-y-2 px-4 py-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`block ${
                  activeSection === link.name.toLowerCase()
                    ? 'bg-green-500 text-white'
                    : 'text-black'
                } hover:bg-gray-800 hover:text-white px-4 py-2 rounded transition-colors`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className='mx-auto w-5/12 pb-4 flex gap-3'>

      <div className='w-[500px]  bg-white flex justify-between items-center'>
        <input type='text' placeholder='Search in Daraz' className='px-3 py-3 w-full border-none focus:outline-none'/>
<FindReplaceIcon className='text-[#f57224] bg-[#b9afa9bd] h-12 w-10'/>
      </div>
      <ShoppingCartIcon className='text-white h-12 w-10'/>
      </div>
    </nav>

    
  );
};

export default Navbar;