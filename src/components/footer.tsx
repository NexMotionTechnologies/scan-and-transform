import { Instagram, Facebook, Linkedin, MessageCircle, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import logo from '@/assets/pampiri-hero-logo.png';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri';

const socials = [
  {
    Icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/nexmotiontechnologies',
    hoverColor: 'hsl(340 82% 52%)',
  },
  {
    Icon: Facebook,
    label: 'Facebook',
    href: 'https://www.facebook.com/Nexmotiontech',
    hoverColor: 'hsl(220 80% 54%)',
  },
  {
    Icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/nexmotion-technologies',
    hoverColor: 'hsl(200 80% 45%)',
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/27676020866',
    hoverColor: 'hsl(142 70% 45%)',
  },
];

const quickLinks = [
  { label: 'Home', id: 'home' },
  { label: 'How It Works', id: 'howitworks' },
  { label: 'Features', id: 'features' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Download', id: 'download' },
  { label: 'About Us', href: '/about-us' },
];

const supportLinks = [
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/privacy-policy' },
];

const Footer = () => {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: 'hsl(225, 35%, 5%)' }}
    >
      {/* Top fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(32 98% 52% / 0.4), transparent)' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      {/* Ambient bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, hsl(32 98% 52% / 0.06) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-md opacity-50 group-hover:opacity-80 transition-opacity"
                  style={{ background: 'hsl(32 98% 52% / 0.4)' }}
                />
                <img src={logo} className="relative w-9 h-9 logo-color-shift" alt="Pampiri Logo" loading="lazy" />
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                <span className="text-white">Pam</span>
                <span className="text-gradient-amber">piri</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-sm mx-auto lg:mx-0" style={{ color: 'hsl(215 20% 45%)' }}>
              AI-powered receipt scanning that transforms physical documents into
              clean, organized digital data. Built for businesses, accountants, and
              individuals who value efficiency.
            </p>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start gap-3">
              {socials.map(({ Icon, label, href, hoverColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  style={{ background: 'hsl(225 30% 12%)', border: '1px solid hsl(225 30% 20%)', color: 'hsl(215 20% 50%)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = hoverColor;
                    el.style.borderColor = `${hoverColor.replace(')', ' / 0.5)').replace('hsl(', 'hsl(')}`;
                    el.style.boxShadow = `0 4px 16px ${hoverColor.replace(')', ' / 0.25)').replace('hsl(', 'hsl(')}`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = 'hsl(215 20% 50%)';
                    el.style.borderColor = 'hsl(225 30% 20%)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <Icon className="w-4 h-4" strokeWidth={1.8} />
                </a>
              ))}
            </div>

            {/* Download CTA */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 mt-8 px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
                color: 'hsl(222 84% 5%)',
                boxShadow: '0 4px 20px hsl(32 98% 52% / 0.3)',
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Download on Google Play
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:col-start-7 text-center lg:text-left">
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-6"
              style={{ color: 'hsl(215 20% 40%)', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, id, href }) => (
                <li key={label}>
                  {id ? (
                    <button
                      onClick={() => handleScroll(id)}
                      className="text-sm transition-all duration-200 hover:translate-x-1 flex items-center justify-center lg:justify-start gap-2 group w-full lg:w-auto"
                      style={{ color: 'hsl(215 20% 45%)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(32 98% 55%)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 45%)')}
                    >
                      <span className="w-0 group-hover:w-3 h-px transition-all duration-200" style={{ background: 'hsl(32 98% 52%)' }} />
                      {label}
                    </button>
                  ) : (
                    <a
                      href={href}
                      className="text-sm transition-all duration-200 hover:translate-x-1 flex items-center justify-center lg:justify-start gap-2 group w-full lg:w-auto"
                      style={{ color: 'hsl(215 20% 45%)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(32 98% 55%)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 45%)')}
                    >
                      <span className="w-0 group-hover:w-3 h-px transition-all duration-200" style={{ background: 'hsl(32 98% 52%)' }} />
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support + Contact */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h3
              className="text-sm font-bold uppercase tracking-widest mb-6"
              style={{ color: 'hsl(215 20% 40%)', fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Support
            </h3>
            <ul className="space-y-3 mb-8">
              {supportLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm transition-all duration-200 flex items-center justify-center lg:justify-start gap-2 group"
                    style={{ color: 'hsl(215 20% 45%)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(186 95% 50%)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 45%)')}
                  >
                    <span className="w-0 group-hover:w-3 h-px transition-all duration-200" style={{ background: 'hsl(186 95% 42%)' }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact details */}
            <div className="space-y-3 flex flex-col items-center lg:items-start">
              <a
                href="mailto:info@nexmotiontechnologies.co.za"
                className="flex items-center justify-center lg:justify-start gap-2.5 text-sm transition-all duration-200 group"
                style={{ color: 'hsl(215 20% 40%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(32 98% 55%)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 40%)')}
              >
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(32 98% 52%)' }} />
                info@nexmotiontechnologies.co.za
              </a>
              <a
                href="https://wa.me/27676020866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-start gap-2.5 text-sm transition-all duration-200"
                style={{ color: 'hsl(215 20% 40%)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(142 70% 50%)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(215 20% 40%)')}
              >
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: 'hsl(142 70% 45%)' }} />
                +27 67 602 0866
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid hsl(225 30% 14%)' }}
        >
          <p className="text-xs text-center md:text-left" style={{ color: 'hsl(215 20% 32%)' }}>
            © 2026 Pampiri. All rights reserved. Secured by{' '}
            <a
              href="https://nexmotiontechnologies.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-orange-400"
              style={{ color: 'hsl(215 20% 40%)' }}
            >
              NexMotion Technologies
            </a>
          </p>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'hsl(215 20% 32%)' }}>
            <span>Powered by AI</span>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;