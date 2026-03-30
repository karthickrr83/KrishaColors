import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="mt-20 bg-brand-slate py-12 text-gray-200">
    <div className="container-base grid gap-8 md:grid-cols-3">
      <div>
        <h3 className="text-xl font-semibold text-white">Krisha Colors</h3>
        <p className="mt-2 text-sm text-gray-300">Painting Contractor in Tamil Nadu delivering premium interior and exterior finishes.</p>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
        <ul className="mt-2 space-y-2 text-sm">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white">Contact</h4>
        <p className="mt-2 text-sm">Phone: +91 99999 99999</p>
        <p className="text-sm">Email: hello@krishacolors.in</p>
        <p className="text-sm">Serving Chennai, Coimbatore, Madurai & across Tamil Nadu.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
