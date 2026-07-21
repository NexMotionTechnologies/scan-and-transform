import { useState, useEffect, useRef } from 'react';
import { Camera, Brain, Zap, UserCheck, MapPin, Landmark, TrendingUp, Users, Clock } from 'lucide-react';

const features = [
  {
    Icon: Camera,
    title: 'Works on Any Receipt',
    description:
      'Don\'t worry if your receipt is crumpled, faded, or stained. Just point your camera, and we\'ll capture the details perfectly.',
    accentColor: 'hsl(32 98% 52%)',
    glowColor: 'hsl(32 98% 52% / 0.2)',
    borderColor: 'hsl(32 98% 52% / 0.3)',
  },
  {
    Icon: Zap,
    title: 'Clear Backlogs in Minutes',
    description:
      'Have a massive pile of receipts from the whole month? Just keep snapping. You can get through 50+ receipts in minutes.',
    accentColor: 'hsl(186 95% 42%)',
    glowColor: 'hsl(186 95% 42% / 0.2)',
    borderColor: 'hsl(186 95% 42% / 0.3)',
  },
  {
    Icon: Brain,
    title: 'Finds the Important Stuff',
    description:
      'We automatically hunt down the merchant name, the date, the VAT amount, and the total so you don\'t have to look for it.',
    accentColor: 'hsl(258 90% 68%)',
    glowColor: 'hsl(258 90% 68% / 0.2)',
    borderColor: 'hsl(258 90% 68% / 0.3)',
  },
  {
    Icon: UserCheck,
    title: 'You Review, You Approve',
    description:
      'Our AI reads every receipt first, but nothing gets saved without your say-so. Check the details, fix anything that looks wrong, then approve it in one tap.',
    accentColor: 'hsl(200 90% 50%)',
    glowColor: 'hsl(200 90% 50% / 0.2)',
    borderColor: 'hsl(200 90% 50% / 0.3)',
  },
  {
    Icon: Landmark,
    title: 'Sorted for Tax Season',
    description:
      'Every expense is filed under the right category automatically, the same ones your accountant or tax return needs. We can even match it against your bank statement for you.',
    accentColor: 'hsl(142 76% 45%)',
    glowColor: 'hsl(142 76% 45% / 0.2)',
    borderColor: 'hsl(142 76% 45% / 0.3)',
  },
  {
    Icon: MapPin,
    title: 'Travel Logbook, Automated',
    description:
      'One tap to start and stop a trip. Scanned fuel and toll receipts link themselves to the drive, ready to export as a proper travel logbook.',
    accentColor: 'hsl(38 100% 55%)',
    glowColor: 'hsl(38 100% 55% / 0.2)',
    borderColor: 'hsl(38 100% 55% / 0.3)',
  },
];

const stats = [
  { Icon: TrendingUp, value: '99.5%', label: 'Scanning Accuracy', color: 'hsl(32 98% 52%)' },
  { Icon: Users, value: '15,000+', label: 'Details Captured', color: 'hsl(186 95% 42%)' },
  { Icon: Clock, value: '100+', label: 'Hours Saved Weekly', color: 'hsl(258 90% 68%)' },
];

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set<number>());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-feature') || '0');
            setVisibleFeatures((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('[data-feature]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'hsl(225, 35%, 6%)' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-25 pointer-events-none" />

      {/* Ambient orbs */}
      <div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right, hsl(258 90% 68% / 0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left, hsl(32 98% 52% / 0.05) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: 'hsl(258 90% 68% / 0.08)',
              border: '1px solid hsl(258 90% 68% / 0.25)',
              color: 'hsl(258 90% 75%)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(258 90% 68%)' }} />
            Powerful Features
          </div>

          <h2
            className="text-4xl lg:text-6xl font-black mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Built for{' '}
            <span className="text-gradient-amber">South African</span> Finances
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'hsl(215 20% 55%)' }}>
            Spend less time managing paperwork and more time doing what you actually love. From everyday scanning to tax season, we handle the boring stuff.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              data-feature={index}
              className="group"
              style={{
                opacity: visibleFeatures.has(index) ? 1 : 0,
                transform: visibleFeatures.has(index) ? 'translateY(0)' : 'translateY(50px)',
                transition: `opacity 0.7s ease ${index * 100}ms, transform 0.7s ease ${index * 100}ms`,
              }}
            >
              <div
                className="relative h-full rounded-3xl p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
                style={{
                  background: 'hsl(222 30% 11%)',
                  border: '1px solid hsl(225 30% 18%)',
                  boxShadow: '0 4px 20px hsl(225 35% 4% / 0.4)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = feature.borderColor;
                  el.style.boxShadow = `0 8px 40px ${feature.glowColor}, 0 4px 20px hsl(225 35% 4% / 0.4)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'hsl(225 30% 18%)';
                  el.style.boxShadow = '0 4px 20px hsl(225 35% 4% / 0.4)';
                }}
              >
                {/* Hover gradient bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${feature.glowColor} 0%, transparent 65%)`,
                  }}
                />

                {/* Large ghost icon */}
                <feature.Icon
                  className="absolute -bottom-4 -right-4 w-32 h-32 opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none"
                  style={{ color: feature.accentColor }}
                  strokeWidth={1}
                />

                {/* Icon */}
                <div className="relative z-10 mb-6 flex justify-center lg:justify-start">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      background: `${feature.accentColor.replace('hsl(', 'hsl(').replace(')', ' / 0.15)')}`,
                      border: `1px solid ${feature.borderColor}`,
                    }}
                  >
                    <feature.Icon
                      className="w-7 h-7 transition-colors duration-300"
                      style={{ color: feature.accentColor }}
                      strokeWidth={2}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3 text-center lg:text-left">
                  <h3
                    className="text-lg font-bold text-white group-hover:transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 52%)' }}>
                    {feature.description}
                  </p>
                  {feature.title === 'Sorted for Tax Season' && (
                    <p className="text-xs pt-1" style={{ color: 'hsl(215 20% 40%)' }}>
                      Plus a simple petty cash tracker and exports formatted for your accounting software.
                    </p>
                  )}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-bl-full rounded-tr-3xl pointer-events-none"
                  style={{ background: feature.accentColor }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div
            className="grid grid-cols-3 rounded-3xl overflow-hidden"
            style={{
              background: 'hsl(222 30% 11%)',
              border: '1px solid hsl(225 30% 18%)',
            }}
          >
            {stats.map(({ Icon, value, label, color }, i) => (
              <div
                key={i}
                className="group flex flex-col items-center gap-2 py-8 px-6 text-center transition-all duration-300 hover:bg-white/[0.02] cursor-default"
                style={{ borderRight: i < 2 ? '1px solid hsl(225 30% 18%)' : 'none' }}
              >
                <Icon className="w-5 h-5 mb-1 opacity-60 group-hover:opacity-100 transition-opacity" style={{ color }} />
                <span
                  className="text-4xl font-black leading-none"
                  style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {value}
                </span>
                <span className="text-sm font-medium" style={{ color: 'hsl(215 20% 45%)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;