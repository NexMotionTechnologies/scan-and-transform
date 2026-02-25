import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Scan, FileText, Zap, Menu, X, Download, ArrowRight, Shield, Sparkles } from 'lucide-react';
import heroLogo from '@/assets/pampiri-hero-logo.png';
import phoneMockup from '@/assets/phone-mockup-3d.png';
import heroVideo from '@/assets/video.mp4';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri';

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M3.18 23.76a2 2 0 0 1-.86-.21 2.05 2.05 0 0 1-1.1-1.84V2.29A2.05 2.05 0 0 1 2.32.45a2 2 0 0 1 2.12.26l13.47 9.73-2.5 2.5L3.18 23.76z"/>
    <path d="m17.66 12.56-2.74 2.74 2.74 1.98 3.07-1.76a1.16 1.16 0 0 0 0-2l-3.07-1.76-.99.8z" opacity=".6"/>
    <path d="m3.18 23.76 12.23-8.82-2.26-2.26L3.18 23.76z" opacity=".4"/>
    <path d="m3.18.24 9.97 9.97-2.26 2.26L3.18.24z" opacity=".4"/>
  </svg>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['Home', 'How It Works', 'Features', 'Pricing', 'Contact'];

  const navbarOpacity = Math.min(scrollY / 100, 1);
  const navbarStyle = {
    background: `hsl(225 35% 6% / ${0.6 + navbarOpacity * 0.35})`,
    backdropFilter: 'blur(20px)',
    borderBottom: `1px solid hsl(225 30% 18% / ${0.3 + navbarOpacity * 0.4})`,
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: 'hsl(225, 35%, 6%)' }}>
      
      {/* ── Background Video with dark overlay ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(225,35%,6%)] via-[hsl(225,35%,6%,0.7)] to-[hsl(225,35%,6%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(225,35%,6%,0.9)] via-transparent to-[hsl(225,35%,6%,0.5)]" />
      </div>

      {/* ── Animated grid pattern ── */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* ── Ambient glow orbs ── */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-8 pointer-events-none"
           style={{ background: 'radial-gradient(circle, hsl(32 98% 52% / 0.08) 0%, transparent 70%)' }} />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
           style={{ background: 'radial-gradient(circle, hsl(186 95% 42% / 0.06) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, hsl(258 90% 68% / 0.05) 0%, transparent 70%)' }} />

      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 w-full py-4 px-4 transition-all duration-300"
        style={navbarStyle}
      >
        <div className="container mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer"
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-md opacity-60 animate-pulse"
                   style={{ background: 'hsl(32 98% 52% / 0.4)' }} />
              <img
                src={heroLogo}
                className="relative w-9 h-9 logo-color-shift transition-all duration-500 group-hover:scale-110"
                alt="Pampiri Logo"
              />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">Pam</span>
              <span className="text-gradient-amber">piri</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                className="px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group"
                style={{ color: 'hsl(215 20% 65%)' }}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.toLowerCase().replace(/\s+/g, '');
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 65%)')}
              >
                {item}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4"
                      style={{ background: 'hsl(32 98% 52%)' }} />
              </a>
            ))}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 60%))',
                color: 'hsl(222 84% 5%)',
                boxShadow: '0 4px 15px hsl(32 98% 52% / 0.35)',
              }}
            >
              <Download className="w-4 h-4" />
              Download Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-all duration-200"
            style={{ color: 'hsl(215 20% 65%)', background: 'hsl(225 30% 14%)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className="w-5 h-5" />
              : <Menu className="w-5 h-5" />
            }
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 mx-4 rounded-2xl overflow-hidden"
               style={{ background: 'hsl(225 30% 10%)', border: '1px solid hsl(225 30% 20%)' }}>
            <div className="p-4 flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{ color: 'hsl(215 20% 65%)' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    document.getElementById(item.toLowerCase().replace(/\s+/g, ''))?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.background = 'hsl(225 30% 16%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'hsl(215 20% 65%)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {item}
                </a>
              ))}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 60%))',
                  color: 'hsl(222 84% 5%)',
                }}
              >
                <Download className="w-4 h-4" />
                Download on Google Play
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex items-center justify-center relative z-10 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT CONTENT ── */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              {/* Live badge */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: 'hsl(142 76% 45% / 0.1)',
                  border: '1px solid hsl(142 76% 45% / 0.3)',
                  color: 'hsl(142 76% 55%)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Now Live on Google Play Store
                <Sparkles className="w-3.5 h-3.5" />
              </div>

              {/* Logo + Brand mark */}
              <div className="flex items-center gap-5">
                <div className="relative flex-shrink-0">
                  {/* Outer glow ring */}
                  <div
                    className="absolute -inset-3 rounded-full animate-pulse opacity-40"
                    style={{ background: 'radial-gradient(circle, hsl(32 98% 52% / 0.5) 0%, transparent 70%)' }}
                  />
                  {/* Inner glow ring */}
                  <div
                    className="absolute -inset-1 rounded-full opacity-60"
                    style={{ background: 'radial-gradient(circle, hsl(186 95% 42% / 0.3) 0%, transparent 70%)' }}
                  />
                  <img
                    src={heroLogo}
                    className="relative w-20 h-20 logo-glow"
                    alt="Pampiri Logo"
                  />
                </div>
                <div>
                  <h1
                    className="text-6xl lg:text-8xl font-black tracking-tight leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span className="text-white">Pam</span>
                    <span className="text-gradient-amber">piri</span>
                  </h1>
                  <p className="text-base font-medium tracking-widest uppercase mt-1"
                     style={{ color: 'hsl(215 20% 50%)', letterSpacing: '0.2em' }}>
                    Scan · Extract · Simplify
                  </p>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-white">
                  Turn receipts into{' '}
                  <span className="text-gradient-brand">organized data</span>
                  {' '}instantly
                </h2>
                <p className="text-lg leading-relaxed max-w-xl" style={{ color: 'hsl(215 20% 60%)' }}>
                  AI-powered receipt scanning that transforms physical documents into
                  clean, exportable digital data — in seconds, not hours.
                </p>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Scan, text: 'AI-Powered Scanning' },
                  { Icon: FileText, text: 'Excel, CSV & PDF Export' },
                  { Icon: Zap, text: 'Real-Time Processing' },
                  { Icon: Shield, text: 'POPIA Compliant' },
                ].map(({ Icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'hsl(225 30% 13%)',
                      border: '1px solid hsl(225 30% 20%)',
                      color: 'hsl(215 20% 70%)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(32 98% 52% / 0.5)';
                      e.currentTarget.style.color = 'hsl(32 98% 58%)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'hsl(225 30% 20%)';
                      e.currentTarget.style.color = 'hsl(215 20% 70%)';
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: 'hsl(32 98% 52%)' }} />
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '400ms' }}
              >
                {/* Primary: Download on Google Play */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  style={{
                    background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
                    color: 'hsl(222 84% 5%)',
                    boxShadow: '0 8px 32px hsl(32 98% 52% / 0.35), 0 2px 8px hsl(32 98% 52% / 0.2)',
                  }}
                >
                  <GooglePlayIcon />
                  <div className="text-left">
                    <div className="text-xs font-medium opacity-75 leading-none mb-0.5">Download on</div>
                    <div className="text-base font-bold leading-none">Google Play</div>
                  </div>
                  <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Secondary: Learn More */}
                <button
                  className="group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'hsl(225 30% 13%)',
                    border: '1px solid hsl(225 30% 22%)',
                    color: 'hsl(215 20% 75%)',
                  }}
                  onClick={() => document.getElementById('howitworks')?.scrollIntoView({ behavior: 'smooth' })}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(186 95% 42% / 0.5)';
                    e.currentTarget.style.color = 'hsl(186 95% 55%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(225 30% 22%)';
                    e.currentTarget.style.color = 'hsl(215 20% 75%)';
                  }}
                >
                  See How It Works
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Trust bar */}
              <div
                className="flex flex-wrap items-center gap-6 pt-2"
                style={{ color: 'hsl(215 20% 45%)' }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4" style={{ color: 'hsl(32 98% 52%)' }} />
                  POPIA Compliant
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" style={{ color: 'hsl(186 95% 42%)' }} />
                  Free to Download
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Scan className="w-4 h-4" style={{ color: 'hsl(258 90% 68%)' }} />
                  10 Free Scans Included
                </div>
              </div>
            </div>

            {/* ── RIGHT SIDE: Phone Mockup ── */}
            <div
              className={`relative flex items-center justify-center transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '250ms' }}
            >
              {/* Background glow behind phone */}
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse"
                style={{
                  background: 'radial-gradient(ellipse at center, hsl(32 98% 52% / 0.3) 0%, hsl(186 95% 42% / 0.1) 50%, transparent 80%)',
                  animationDuration: '4s',
                }}
              />

              {/* Phone container with 3D float animation */}
              <div className="relative" style={{ animation: 'float 8s ease-in-out infinite' }}>
                {/* Neon ring behind phone */}
                <div
                  className="absolute -inset-4 rounded-[3rem] blur-xl opacity-40"
                  style={{ background: 'linear-gradient(135deg, hsl(32 98% 52% / 0.3), hsl(186 95% 42% / 0.3))' }}
                />

                <div className="relative w-72 lg:w-80 mx-auto">
                  <img
                    src={phoneMockup}
                    alt="Pampiri mobile app — AI receipt scanning interface"
                    className="w-full h-auto relative z-10 hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Floating feature badges */}
                {/* Scan badge */}
                <div
                  className="absolute -top-6 -right-4 lg:-right-8 flex items-center gap-2 px-3 py-2 rounded-xl z-20"
                  style={{
                    background: 'hsl(32 98% 52%)',
                    color: 'hsl(222 84% 5%)',
                    boxShadow: '0 4px 20px hsl(32 98% 52% / 0.5)',
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: '0s',
                  }}
                >
                  <Scan className="w-5 h-5" />
                  <span className="text-xs font-bold">AI Scan</span>
                </div>

                {/* Export badge */}
                <div
                  className="absolute -bottom-4 -left-6 lg:-left-10 flex items-center gap-2 px-3 py-2 rounded-xl z-20"
                  style={{
                    background: 'hsl(186 95% 42%)',
                    color: 'hsl(222 84% 5%)',
                    boxShadow: '0 4px 20px hsl(186 95% 42% / 0.5)',
                    animation: 'float 6s ease-in-out infinite',
                    animationDelay: '1.5s',
                  }}
                >
                  <FileText className="w-5 h-5" />
                  <span className="text-xs font-bold">Export Data</span>
                </div>

                {/* Speed badge */}
                <div
                  className="absolute top-1/2 -right-6 lg:-right-12 w-14 h-14 rounded-xl flex items-center justify-center z-20"
                  style={{
                    background: 'hsl(258 90% 68%)',
                    color: 'white',
                    boxShadow: '0 4px 20px hsl(258 90% 68% / 0.5)',
                    animation: 'float 7s ease-in-out infinite',
                    animationDelay: '0.8s',
                  }}
                >
                  <Zap className="w-6 h-6" />
                </div>

                {/* Accuracy stat */}
                <div
                  className="absolute top-1/4 -left-8 lg:-left-14 flex flex-col items-center px-3 py-2 rounded-xl z-20 text-center"
                  style={{
                    background: 'hsl(225 30% 13%)',
                    border: '1px solid hsl(32 98% 52% / 0.3)',
                    color: 'white',
                    boxShadow: '0 4px 20px hsl(225 35% 4% / 0.5)',
                  }}
                >
                  <span className="text-lg font-black text-gradient-amber">99.5%</span>
                  <span className="text-xs" style={{ color: 'hsl(215 20% 55%)' }}>Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 animate-bounce">
        <span className="text-xs tracking-widest uppercase" style={{ color: 'hsl(215 20% 40%)' }}>Scroll</span>
        <div
          className="w-5 h-9 rounded-full flex justify-center pt-2"
          style={{ border: '1px solid hsl(225 30% 25%)' }}
        >
          <div
            className="w-1 h-2.5 rounded-full animate-pulse"
            style={{ background: 'hsl(32 98% 52%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;