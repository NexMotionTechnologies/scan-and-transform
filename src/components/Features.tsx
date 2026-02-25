import { useState, useEffect, useRef } from 'react';
import { Camera, Brain, Zap, FileSpreadsheet, Edit3, Shield, TrendingUp, Users, Clock } from 'lucide-react';

const features = [
  {
    Icon: Camera,
    title: 'Snap & Extract',
    description:
      'Turn any receipt or invoice into structured data in seconds. Our smart edge detection ensures perfect captures every time.',
    accentColor: 'hsl(32 98% 52%)',
    glowColor: 'hsl(32 98% 52% / 0.2)',
    borderColor: 'hsl(32 98% 52% / 0.3)',
  },
  {
    Icon: Zap,
    title: 'Batch Scanning',
    description:
      'Process an entire month’s worth of paperwork in one session. Rapid-fire scanning allows you to digitize 50+ documents in minutes.',
    accentColor: 'hsl(186 95% 42%)',
    glowColor: 'hsl(186 95% 42% / 0.2)',
    borderColor: 'hsl(186 95% 42% / 0.3)',
  },
  {
    Icon: Brain,
    title: '21-Field Accuracy',
    description:
      'Automatically captures VAT, merchant info, line items, and totals across 21 distinct data points with 99.5% precision.',
    accentColor: 'hsl(258 90% 68%)',
    glowColor: 'hsl(258 90% 68% / 0.2)',
    borderColor: 'hsl(258 90% 68% / 0.3)',
  },
  {
    Icon: FileSpreadsheet,
    title: 'Instant Export',
    description:
      'Download your organized data as Excel, CSV, or PDF — ready for QuickBooks, Xero, or your custom accounting software.',
    accentColor: 'hsl(142 76% 45%)',
    glowColor: 'hsl(142 76% 45% / 0.2)',
    borderColor: 'hsl(142 76% 45% / 0.3)',
  },
  {
    Icon: Edit3,
    title: 'Verify & Approve',
    description:
      'Review and correct data with a streamlined interface. Our AI learns from your edits to get smarter with every scan.',
    accentColor: 'hsl(38 100% 55%)',
    glowColor: 'hsl(38 100% 55% / 0.2)',
    borderColor: 'hsl(38 100% 55% / 0.3)',
  },
  {
    Icon: Shield,
    title: 'Compliance First',
    description:
      'Enterprise-grade encryption with full POPIA & GDPR compliance. Your sensitive financial data is stored securely on-device.',
    accentColor: 'hsl(200 90% 50%)',
    glowColor: 'hsl(200 90% 50% / 0.2)',
    borderColor: 'hsl(200 90% 50% / 0.3)',
  },
];

const stats = [
  { Icon: TrendingUp, value: '99.5%', label: 'Accuracy Rate', color: 'hsl(32 98% 52%)' },
  { Icon: Users, value: '10+', label: 'Active Users', color: 'hsl(186 95% 42%)' },
  { Icon: Clock, value: '<3s', label: 'Avg. Processing', color: 'hsl(258 90% 68%)' },
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
            Why Choose{' '}
            <span className="text-gradient-amber">Pampiri?</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'hsl(215 20% 55%)' }}>
            Everything you need to digitize and organize your receipts.
            Powerful AI technology made simple and accessible.
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
                <div className="relative z-10 mb-6">
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
                <div className="relative z-10 space-y-3">
                  <h3
                    className="text-lg font-bold text-white group-hover:transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 52%)' }}>
                    {feature.description}
                  </p>
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
                <span className="text-sm" style={{ color: 'hsl(215 20% 45%)' }}>
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