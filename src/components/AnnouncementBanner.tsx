import { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface AnnouncementBannerProps {
  onClose?: () => void;
}

const AnnouncementBanner = ({ onClose }: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Reveal animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('pampiri-invoice-banner-dismissed', 'true');
    if (onClose) onClose();
  };

  return (
    <div
      className={`relative w-full transition-all duration-700 ease-out overflow-hidden ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="relative min-h-[44px] flex items-center">
        {/* Vibrant Gradient Background */}
        <div 
          className="absolute inset-0 animate-gradient-x"
          style={{
            background: 'linear-gradient(90deg, hsl(32 98% 52%), hsl(340 82% 52%), hsl(186 95% 42%), hsl(258 90% 68%), hsl(32 98% 52%))',
            backgroundSize: '300% 100%',
          }}
        />
        
        {/* Dynamic Glass Overlay */}
        <div className="absolute inset-0 bg-black/5 backdrop-blur-sm" />

        <div className="container mx-auto px-4 relative z-10 py-2.5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 w-full">
            {/* Launch Badge (Hidden on super small screens) */}
            <div className="hidden md:flex items-center gap-2">
              <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-md">
                <Sparkles className="w-3 h-3 text-white" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90">Exclusive Launch</span>
            </div>
            
            {/* Core Message */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-1 sm:gap-3">
              <p className="text-[11px] sm:text-sm font-black text-white tracking-tight leading-none">
                Pampiri Invoice is Live!
              </p>
              <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/30" />
              <p className="text-[9px] sm:text-xs font-bold text-white/90 leading-tight">
                Professional Invoicing. Free for everyone. Zero Design Skills Required.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://invoice.mypampiri.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="group whitespace-nowrap flex items-center gap-2 px-4 py-1.5 bg-white rounded-xl text-[10px] sm:text-xs font-black text-black hover:bg-black hover:text-white transition-all duration-300 shadow-xl shadow-black/10 active:scale-95"
            >
              Get Started Free
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <button
            onClick={handleDismiss}
            className="absolute sm:relative top-0 right-0 sm:top-auto sm:right-auto p-2 sm:p-2 rounded-full hover:bg-white/20 transition-all text-white/80 hover:text-white"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
