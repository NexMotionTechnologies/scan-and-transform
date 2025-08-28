import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Scan Receipt",
    description: "Simply take a photo of any receipt using your phone camera. Our advanced AI works with any lighting condition or angle.",
    icon: "📱",
    color: "from-primary to-primary-glow"
  },
  {
    number: "02", 
    title: "AI Extraction",
    description: "Our powerful AI instantly recognizes and extracts all text, amounts, dates, and merchant information with 99% accuracy.",
    icon: "🤖",
    color: "from-secondary to-primary"
  },
  {
    number: "03",
    title: "Export Data",
    description: "Get your organized data in Excel, CSV, PDF, or Word format. Ready for accounting software or expense tracking.",
    icon: "📊",
    color: "from-accent to-secondary"
  }
];

const HowItWorks = () => {
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0');
            setVisibleSteps(prev => new Set([...prev, stepIndex]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = sectionRef.current?.querySelectorAll('[data-step]');
    stepElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background-alt relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            How It
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your receipts into organized data in just three simple steps. 
            No technical expertise required - anyone can do it.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className={`relative group transition-all duration-700 delay-${index * 200} ${
                visibleSteps.has(index) 
                  ? 'animate-slide-up' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-1 z-10">
                  <div className={`h-full bg-gradient-to-r ${step.color} opacity-30 rounded-full transform origin-left transition-transform duration-1000 delay-${(index + 1) * 300} ${
                    visibleSteps.has(index + 1) ? 'scale-x-100' : 'scale-x-0'
                  }`}></div>
                </div>
              )}

              <div className="relative bg-card rounded-3xl p-8 shadow-card hover:shadow-3d transition-all duration-500 group-hover:-translate-y-2 border border-border/50">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-3xl`}></div>
                
                {/* Step Number */}
                <div className="relative flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="text-4xl animate-bounce-in" style={{ animationDelay: `${index * 100}ms` }}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-full px-6 py-3 shadow-card">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-muted-foreground">Ready in under 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;