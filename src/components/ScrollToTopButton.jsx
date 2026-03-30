import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-5 left-5 z-50 rounded-full bg-brand-yellow px-4 py-3 font-semibold text-brand-slate shadow-lg"
      aria-label="Scroll to top"
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTopButton;
