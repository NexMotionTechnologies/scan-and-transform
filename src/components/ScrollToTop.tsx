import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 400);
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-2xl flex items-center justify-center group transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      style={{
        background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
        color: 'hsl(222 84% 5%)',
        boxShadow: '0 4px 20px hsl(32 98% 52% / 0.4), 0 2px 8px hsl(225 35% 4% / 0.4)',
      }}
    >
      <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTop;