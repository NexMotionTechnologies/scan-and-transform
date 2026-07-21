import { useState, useEffect, useRef } from 'react';
import { Briefcase, Car, Truck, ArrowRight, Check } from 'lucide-react';

const personas = [
  {
    Icon: Briefcase,
    title: 'Small Business Owner',
    hook: 'Run your books without hiring a bookkeeper.',
    bullets: [
      'Batch-scan a whole month of supplier invoices in minutes',
      'Set budget alerts per category before you overspend',
      'Send branded invoices with your logo and payment link',
      'Export a Tax Pack your accountant will actually thank you for',
    ],
    ctaLabel: 'See Personal Business plan',
    ctaTarget: 'pricing',
    accentColor: 'hsl(258 90% 68%)',
    glowColor: 'hsl(258 90% 68% / 0.2)',
    borderColor: 'hsl(258 90% 68% / 0.3)',
  },
  {
    Icon: Car,
    title: 'Gig Driver / Freelancer',
    hook: 'Finally know what you\'re actually taking home.',
    bullets: [
      'See exactly what you keep after Uber or Bolt takes their cut',
      'Log income and expenses in the same place',
      'Invoice clients directly for freelance work',
      'Build a streak and earn badges for staying on top of it',
    ],
    ctaLabel: 'See Personal Pro plan',
    ctaTarget: 'pricing',
    accentColor: 'hsl(32 98% 52%)',
    glowColor: 'hsl(32 98% 52% / 0.2)',
    borderColor: 'hsl(32 98% 52% / 0.3)',
  },
  {
    Icon: Truck,
    title: 'Fleet Manager',
    hook: 'Replace the WhatsApp group with a real approval inbox.',
    bullets: [
      'Add each driver yourself, they never need to sign up on their own',
      'Every receipt your drivers scan lands straight in your inbox',
      'Approve or reject in one tap, per vehicle or per driver',
      'Pay only for the seats and vehicles you actually run',
    ],
    ctaLabel: 'Build your Fleet Pro plan',
    ctaTarget: 'fleet-pricing',
    accentColor: 'hsl(142 76% 45%)',
    glowColor: 'hsl(142 76% 45% / 0.2)',
    borderColor: 'hsl(142 76% 45% / 0.3)',
  },
];

const Personas = () => {
  const [visible, setVisible] = useState(new Set<number>());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-persona') || '0');
            setVisible((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll('[data-persona]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="personas"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'hsl(225, 35%, 6%)' }}
    >
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: 'hsl(186 95% 42% / 0.08)',
              border: '1px solid hsl(186 95% 42% / 0.25)',
              color: 'hsl(186 95% 55%)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(186 95% 42%)' }} />
            One App, Built For You Specifically
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Whichever You Are, <span className="text-gradient-brand">Pampiri Fits</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'hsl(215 20% 55%)' }}>
            Pampiri isn't one-size-fits-all. Tell us who you are and your home screen, pricing, and features adjust to match.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <div
              key={index}
              data-persona={index}
              style={{
                opacity: visible.has(index) ? 1 : 0,
                transform: visible.has(index) ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${index * 120}ms, transform 0.7s ease ${index * 120}ms`,
              }}
            >
              <div
                className="group relative h-full rounded-3xl p-8 flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: 'hsl(222 30% 11%)',
                  border: '1px solid hsl(225 30% 18%)',
                  boxShadow: '0 4px 20px hsl(225 35% 4% / 0.4)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = persona.borderColor;
                  el.style.boxShadow = `0 8px 40px ${persona.glowColor}, 0 4px 20px hsl(225 35% 4% / 0.4)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'hsl(225 30% 18%)';
                  el.style.boxShadow = '0 4px 20px hsl(225 35% 4% / 0.4)';
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: persona.accentColor.replace(')', ' / 0.15)'),
                    border: `1px solid ${persona.borderColor}`,
                  }}
                >
                  <persona.Icon className="w-7 h-7" style={{ color: persona.accentColor }} strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {persona.title}
                </h3>
                <p className="text-sm font-medium mb-6" style={{ color: persona.accentColor }}>
                  {persona.hook}
                </p>

                <ul className="space-y-3 mb-8 flex-1 w-full">
                  {persona.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 justify-center lg:justify-start text-left">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: persona.accentColor.replace(')', ' / 0.2)'), border: `1px solid ${persona.borderColor}` }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: persona.accentColor }} strokeWidth={3} />
                      </div>
                      <span className="text-sm leading-relaxed max-w-[85%] lg:max-w-none" style={{ color: 'hsl(215 20% 60%)' }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo(persona.ctaTarget)}
                  className="group/btn flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: persona.accentColor.replace(')', ' / 0.1)'),
                    border: `1px solid ${persona.borderColor}`,
                    color: persona.accentColor,
                  }}
                >
                  {persona.ctaLabel}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Personas;
