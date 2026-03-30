import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/90 backdrop-blur">
      <nav className="container-base flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-bold text-brand-navy">
          Krisha <span className="text-brand-yellow">Colors</span>
        </Link>

        <button
          className="rounded-md border border-gray-300 px-3 py-2 text-sm md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `font-medium transition hover:text-brand-navy ${
                    isActive ? 'text-brand-navy' : 'text-gray-600'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul className="space-y-1 border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {navLinks.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-gray-700 transition hover:bg-brand-sky"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
};

export default Navbar;
