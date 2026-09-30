import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Scan, FileText, Zap, Menu, X, Download, ArrowRight, Shield, Sparkles, Award } from 'lucide-react';
import heroLogo from '@/assets/pampiri-hero-logo.png';
import phoneMockup from '@/assets/phone-app-screenshot.webp';
import heroVideo from '@/assets/video.mp4';
import AnnouncementBanner from './AnnouncementBanner';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri';
const TESTFLIGHT_URL = 'https://testflight.apple.com/join/TtMntrZh';

const GooglePlayIcon = () => (
  <svg viewBox="0 0 28 32" className="w-6 h-6">
    <path d="M13.54 15.28.12 29.34a3.64 3.64 0 0 0 5.33 2.16l15.1-8.6z" fill="#EA4335"/>
    <path d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.55 3.55 0 0 0 0-6.29z" fill="#FBBC04"/>
    <path d="M.12 2.66a3.46 3.46 0 0 0-.12.92v24.84a3.66 3.66 0 0 0 .12.92L14 15.64Z" fill="#4285F4"/>
    <path d="m13.64 16 6.94-6.85L5.5.51A3.72 3.72 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z" fill="#34A853"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zm3.415-3.16c.84-1.012 1.402-2.427 1.245-3.832-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.271 3.714 1.338.104 2.715-.688 3.558-1.7z"/>
  </svg>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [isPromoExpanded, setIsPromoExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const bannerDismissed = localStorage.getItem('pampiri-invoice-banner-dismissed');
    if (bannerDismissed) setIsBannerVisible(false);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Invoice', href: 'https://invoice.mypampiri.co.za', isNew: true },
    { label: 'How It Works', id: 'howitworks' },
    { label: 'Features', id: 'features' },
    { label: 'Pricing', id: 'pricing' },
    { label: 'Contact', id: 'contact' },
  ];

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
      {/* ── HEADER WRAPPER (Nav + Banner) ── */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <nav
          className="w-full py-4 px-4 transition-all duration-300"
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
                  key={item.label}
                  href={item.href || `#${item.id}`}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg relative group flex items-center gap-1.5 ${
                    item.label === 'Invoice' ? 'animate-glow-pulse font-bold' : ''
                  }`}
                  style={{ color: item.label === 'Invoice' ? undefined : 'hsl(215 20% 65%)' }}
                  onClick={(e) => {
                    if (item.id) {
                      e.preventDefault();
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 65%)')}
                >
                  {item.label}
                  {item.isNew && (
                    <span className="flex h-1.5 w-1.5 rounded-full bg-orange-500 shadow-[0_0_8px_hsl(32_98%_52%)]" />
                  )}
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
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-2 mx-4 rounded-2xl bg-hsl(225 30% 10%) border border-hsl(225 30% 20%) overflow-hidden">
              <div className="p-4 flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href || `#${item.id}`}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className={`px-4 py-3 rounded-xl text-sm font-medium text-center flex items-center justify-center gap-2 ${
                      item.label === 'Invoice' ? 'animate-glow-pulse font-bold' : ''
                    }`}
                    style={{ color: item.label === 'Invoice' ? undefined : 'hsl(215 20% 65%)' }}
                    onClick={(e) => {
                      if (item.id) {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-orange-500/10 text-orange-500 border border-orange-500/20 uppercase">New</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
        {isBannerVisible && <AnnouncementBanner onClose={() => setIsBannerVisible(false)} />}
      </div>

      {/* ── SIDE PROMO REVEAL BUTTON ── */}
      <button
        onClick={() => setIsPromoExpanded(!isPromoExpanded)}
        className={`fixed left-0 top-1/2 -translate-y-1/2 z-[120] p-3 rounded-r-2xl border-y border-r transition-all duration-500 hover:pl-6 group ${
          isPromoExpanded ? 'bg-primary border-primary -translate-x-full' : 'bg-background/80 backdrop-blur-xl border-white/10 shadow-2xl'
        }`}
        aria-label="Toggle Launch Details"
      >
        <div className="flex flex-col items-center gap-4">
          <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] font-bold tracking-widest uppercase opacity-60 text-white">LAUNCH</span>
          <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${isPromoExpanded ? 'rotate-180' : 'animate-pulse text-primary'}`} />
        </div>
      </button>

      {/* ── DRAGGABLE/SLIDING PROMO PANEL ── */}
      <div 
        className={`fixed inset-y-0 left-0 z-[110] w-full lg:w-[450px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_0_100px_rgba(0,0,0,0.8)] ${
          isPromoExpanded ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full bg-background/95 backdrop-blur-3xl border-r border-white/10 relative flex flex-col items-center justify-start sm:justify-center p-6 sm:p-8 lg:p-12 overflow-y-auto">
          {/* Animated Background Orbs for the Panel */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 bg-primary pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-20 bg-secondary pointer-events-none" />
          
          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsPromoExpanded(false);
            }}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 sm:bg-transparent hover:bg-white/20 transition-all text-white/80 hover:text-white cursor-pointer active:scale-95 touch-manipulation"
            aria-label="Close Launch Details"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative z-10 w-full space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-primary/10 border border-primary/20 text-primary">
              <Sparkles className="w-3 h-3" />
              New Launch
            </div>

            <h3 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Pampiri <span className="text-gradient-amber">Invoice</span>
            </h3>

            <p className="text-lg text-white/70 leading-relaxed font-medium">
              Unlimited, fully compliant invoicing. <span className="text-white">Included from Personal Pro.</span>
              <br />
              <span className="text-sm font-normal text-white/50">Create invoices that can't be faked, add your payment link, and let clients pay in a tap. No design skills needed.</span>
            </p>

            <ul className="space-y-4">
              {[
                { label: 'Unlimited Invoices', sub: 'No count quota. Send as many as your business needs.' },
                { label: 'VAT, Sorted', sub: 'We work out what you owe and what you can claim back, ready in one tap.' },
                { label: 'WhatsApp Payment Links', sub: 'Add your SnapScan, Yoco, or PayFast link and it shows up on every invoice automatically.' },
                { label: 'Can\'t Be Faked', sub: 'Every invoice is sealed the moment it\'s sent, so it can\'t be quietly changed afterwards.' }
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1.5 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{feature.label}</div>
                    <div className="text-[10px] text-white/50 leading-tight">{feature.sub}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a 
                href="https://invoice.mypampiri.co.za" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full px-6 py-5 rounded-2xl bg-gradient-amber text-black font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-primary/20"
              >
                Start Invoicing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] text-center mt-4 text-white/30 uppercase tracking-widest font-black">
                Signs In With Your Pampiri Account
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className={`flex-1 flex items-center justify-center relative z-10 ${isBannerVisible ? 'pt-32' : 'pt-20'} pb-8`}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* ── LEFT CONTENT ── */}
            <div className={`space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

              {/* Logo + Brand mark */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
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
                    className="relative w-14 h-14 lg:w-16 lg:h-16 logo-glow"
                    alt="Pampiri Logo"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </div>
                <div>
                  <h1
                    className="text-4xl lg:text-6xl font-black tracking-tight leading-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <span className="text-white">Pam</span>
                    <span className="text-gradient-amber">piri</span>
                  </h1>
                  <p className="text-sm font-medium tracking-widest uppercase mt-1"
                     style={{ color: 'hsl(215 20% 50%)', letterSpacing: '0.2em' }}>
                    Scan · Extract · Simplify
                  </p>
                </div>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-white">
                  Stop the manual entry <span className="text-gradient-brand">nightmare.</span>
                </h2>
                <p className="text-base leading-relaxed max-w-xl" style={{ color: 'hsl(215 20% 60%)' }}>
                  Scan a receipt in seconds and our AI sorts it for you. You check the details and approve them, so mistakes are always easy to fix. Then send a professional invoice or a simple tax summary, all from the same app. Built for gig drivers, small businesses, and fleets across South Africa.
                </p>
              </div>

              {/* Feature pills */}
              <div className="hidden sm:flex flex-wrap gap-2 justify-center lg:justify-start">
                {[
                  { Icon: Scan, text: 'Works on Faded Receipts' },
                  { Icon: FileText, text: 'You Approve Every Scan' },
                  { Icon: Zap, text: 'Done in Seconds' },
                  { Icon: Shield, text: '100% Private & Secure' },
                ].map(({ Icon, text }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
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
                    <Icon className="w-3.5 h-3.5" style={{ color: 'hsl(32 98% 52%)' }} />
                    {text}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col items-center lg:items-start gap-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                  {/* Primary: Download on Google Play */}
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
                      color: 'hsl(222 84% 5%)',
                      boxShadow: '0 8px 32px hsl(32 98% 52% / 0.35), 0 2px 8px hsl(32 98% 52% / 0.2)',
                    }}
                  >
                    <GooglePlayIcon />
                    <div className="text-left">
                      <div className="text-[10px] font-medium opacity-75 leading-none mb-0.5">Download on</div>
                      <div className="text-sm font-bold leading-none">Google Play</div>
                    </div>
                  </a>

                  {/* iPhone: TestFlight beta */}
                  <a
                    href={TESTFLIGHT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-5 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                    style={{
                      background: 'hsl(225 30% 13%)',
                      border: '1px solid hsl(186 95% 42% / 0.4)',
                      color: 'white',
                    }}
                  >
                    <span style={{ color: 'hsl(186 95% 42%)' }}><AppleIcon /></span>
                    <div className="text-left">
                      <div className="text-[10px] font-medium leading-none mb-0.5" style={{ color: 'hsl(186 95% 55%)' }}>Try free on</div>
                      <div className="text-sm font-bold leading-none">iPhone (Beta)</div>
                    </div>
                  </a>

                  {/* Secondary: Learn More */}
                  <button
                    className="group flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
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

                {/* Plain-English TestFlight explainer, for people who've never heard of it */}
                <p className="text-[11px] max-w-md text-center lg:text-left" style={{ color: 'hsl(215 20% 45%)' }}>
                  New to iPhone testing? "Try free on iPhone" opens Apple's free TestFlight app (install it if asked), then just tap "Install" to get Pampiri.
                </p>
              </div>

              {/* Trust bar */}
              <div
                className="hidden sm:flex flex-wrap items-center gap-6 justify-center lg:justify-start"
                style={{ color: 'hsl(215 20% 45%)' }}
              >
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4" style={{ color: 'hsl(32 98% 52%)' }} />
                  100% Private & Secure
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4" style={{ color: 'hsl(186 95% 42%)' }} />
                  Free to Download
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4" style={{ color: 'hsl(258 90% 68%)' }} />
                  30-Day Free Trial
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
                    alt="Pampiri app dashboard showing scan credits, batch scan, and document export options"
                    className="w-full h-auto relative z-10 hover:scale-105 transition-transform duration-700"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;