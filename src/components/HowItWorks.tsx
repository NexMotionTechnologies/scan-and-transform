import { useState, useEffect, useRef } from 'react';
import { Camera, Brain, FileSpreadsheet, ArrowRight, CheckCircle2 } from 'lucide-react';
import takeImage from '@/assets/take_image_optimized.jpg';
import aiScan from '@/assets/ai_scan_optimized.jpg';
import sendImage from '@/assets/send_optimized.jpg';

const steps = [
  {
    number: '01',
    title: 'Take a Photo',
    description:
      'Simply open Pampiri and point your camera at any receipt or invoice. Crumpled, faded, or badly lit? Don\'t worry, we\'ve got it.',
    Icon: Camera,
    image: takeImage,
    accentColor: 'hsl(32 98% 52%)',
    glowColor: 'hsl(32 98% 52% / 0.25)',
    borderColor: 'hsl(32 98% 52% / 0.35)',
    bgColor: 'hsl(32 98% 52% / 0.06)',
  },
  {
    number: '02',
    title: 'We Read the Details',
    description:
      'We instantly spot the important stuff—merchant name, date, total, and tax—so you don\'t have to type a single thing.',
    Icon: Brain,
    image: aiScan,
    accentColor: 'hsl(258 90% 68%)',
    glowColor: 'hsl(258 90% 68% / 0.25)',
    borderColor: 'hsl(258 90% 68% / 0.35)',
    bgColor: 'hsl(258 90% 68% / 0.06)',
  },
  {
    number: '03',
    title: 'Send it Off',
    description:
      'Download your organized list as a spreadsheet or PDF. Hand it straight to your accountant or keep it for your own records.',
    Icon: FileSpreadsheet,
    image: sendImage,
    accentColor: 'hsl(186 95% 42%)',
    glowColor: 'hsl(186 95% 42% / 0.25)',
    borderColor: 'hsl(186 95% 42% / 0.35)',
    bgColor: 'hsl(186 95% 42% / 0.06)',
  },
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set<number>());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.25 }
    );

    const els = sectionRef.current?.querySelectorAll('[data-step]');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="howitworks"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{ background: 'hsl(225, 30%, 9%)' }}
    >
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      {/* Ambient glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at top, hsl(32 98% 52% / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
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
            Simple Process
          </div>
          <h2
            className="text-4xl lg:text-6xl font-black mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            How It{' '}
            <span className="text-gradient-teal">Works</span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'hsl(215 20% 55%)' }}
          >
            Clear your desk of paper clutter in under 30 seconds. No technical skills required.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto relative">

          {/* Connector lines (desktop only) */}
          <div className="hidden lg:flex absolute top-16 left-0 right-0 items-center justify-center z-0 pointer-events-none px-[16%]">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, hsl(32 98% 52% / 0.4), hsl(258 90% 68% / 0.4))' }} />
            <div className="w-2 h-2 rounded-full mx-2" style={{ background: 'hsl(258 90% 68%)' }} />
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, hsl(258 90% 68% / 0.4), hsl(186 95% 42% / 0.4))' }} />
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className="relative group z-10"
              style={{
                opacity: visibleSteps.has(index) ? 1 : 0,
                transform: visibleSteps.has(index) ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${index * 150}ms, transform 0.7s ease ${index * 150}ms`,
              }}
            >
              {/* Card */}
              <div
                className="relative h-full rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: step.bgColor,
                  border: `1px solid ${step.borderColor}`,
                  boxShadow: `0 4px 24px hsl(225 35% 4% / 0.4)`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${step.glowColor}, 0 4px 24px hsl(225 35% 4% / 0.4)`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px hsl(225 35% 4% / 0.4)`;
                }}
              >
                {/* Background glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${step.glowColor} 0%, transparent 60%)` }}
                />

                {/* Step number + icon row */}
                <div className="flex items-start justify-between mb-8 relative z-10">
                  {/* Large step number bg */}
                  <span
                    className="text-7xl font-black leading-none select-none pointer-events-none"
                    style={{
                      color: step.accentColor,
                      opacity: 0.12,
                      position: 'absolute',
                      top: '-12px',
                      right: '8px',
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Step pill */}
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: `${step.accentColor.replace(')', ' / 0.15)').replace('hsl(', 'hsl(')}`,
                      color: step.accentColor,
                      border: `1px solid ${step.borderColor}`,
                    }}
                  >
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: step.accentColor,
                      boxShadow: `0 4px 16px ${step.glowColor}`,
                    }}
                  >
                    <step.Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4 mb-6">
                  <h3
                    className="text-2xl font-bold text-white group-hover:text-opacity-100 transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: 'hsl(215 20% 55%)' }}>
                    {step.description}
                  </p>
                </div>

                {/* Step Image */}
                <div className="relative z-10 mt-auto rounded-2xl overflow-hidden aspect-video border border-white/5 group-hover:border-white/10 transition-colors">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                </div>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="w-5 h-5 rotate-90" style={{ color: step.accentColor }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom indicator */}
        <div className="text-center mt-16">
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium"
            style={{
              background: 'hsl(142 76% 45% / 0.08)',
              border: '1px solid hsl(142 76% 45% / 0.25)',
              color: 'hsl(142 76% 55%)',
            }}
          >
            <CheckCircle2 className="w-4 h-4" />
            Average processing time under 30 seconds
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;