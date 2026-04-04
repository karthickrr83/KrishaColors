import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-xl">
      <nav className="container-base flex h-16 items-center justify-between">

        {/* 🔷 Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-brand-navy">
            Krisha <span className="text-brand-yellow">Colors</span>
          </span>
        </Link>

        {/* 📱 Mobile Button */}
        <button
          className="rounded-md border border-gray-300 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        {/* 💻 Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.path} className="group">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-200 ${isActive ? 'text-brand-navy' : 'text-gray-600'
                  } hover:text-brand-navy`
                }
              >
                {item.name}

                {/* ✨ Underline Animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 🚀 CTA Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-lg bg-brand-yellow px-5 py-2.5 font-semibold text-brand-navy shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Quote
          </Link>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      {open && (
        <ul className="space-y-2 border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-700 font-medium transition hover:bg-brand-sky"
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Mobile CTA */}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-md bg-brand-yellow px-3 py-2 text-center font-semibold text-brand-navy"
            >
              Get Quote
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;