import { useState, useEffect, useRef } from 'react';
import { Camera, Brain, Zap, FileSpreadsheet, Edit3, Shield } from 'lucide-react';

const features = [
  {
    Icon: Camera,
    title: "Smart Camera",
    description: "Professional camera interface optimized for receipt scanning with auto-focus, lighting adjustment, and edge detection.",
    gradient: "from-primary to-primary-glow"
  },
  {
    Icon: Brain, 
    title: "AI Text Recognition",
    description: "Advanced machine learning extracts text with 99% accuracy, even from crumpled, faded, or angled receipts.",
    gradient: "from-secondary to-primary"
  },
  {
    Icon: Zap,
    title: "Instant Processing", 
    description: "Get your receipts processed in seconds, not minutes. Real-time extraction with cloud-powered AI infrastructure.",
    gradient: "from-accent to-secondary"
  },
  {
    Icon: FileSpreadsheet,
    title: "Multiple Export Formats",
    description: "Export to Excel, CSV, PDF, or Word formats. Compatible with QuickBooks, Xero, and all major accounting software.",
    gradient: "from-primary to-accent"
  },
  {
    Icon: Edit3,
    title: "Edit & Review",
    description: "Review and edit extracted text before exporting. Intelligent suggestions help ensure 100% accuracy for your records.",
    gradient: "from-secondary to-accent"
  },
  {
    Icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, GDPR compliance, and secure cloud storage. Your financial data stays private and protected.",
    gradient: "from-accent to-primary"
  }
];

const Features = () => {
  const [visibleFeatures, setVisibleFeatures] = useState(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureIndex = parseInt(entry.target.getAttribute('data-feature') || '0');
            setVisibleFeatures(prev => new Set([...prev, featureIndex]));
          }
        });
      },
      { threshold: 0.2 }
    );

    const featureElements = sectionRef.current?.querySelectorAll('[data-feature]');
    featureElements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `linear-gradient(45deg, hsl(var(--primary)) 25%, transparent 25%), 
                                linear-gradient(-45deg, hsl(var(--primary)) 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, hsl(var(--secondary)) 75%), 
                                linear-gradient(-45deg, transparent 75%, hsl(var(--secondary)) 75%)`,
               backgroundSize: '40px 40px',
               backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
             }}>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Why Choose
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Pampiri?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to digitize and organize your receipts. 
            Powerful AI technology made simple and accessible for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              data-feature={index}
              className={`group transition-all duration-700 delay-${index * 100} ${
                visibleFeatures.has(index) 
                  ? 'animate-slide-up' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <div className="relative h-full bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-3d transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r ${feature.gradient} p-[2px]`}>
                  <div className="w-full h-full bg-card rounded-3xl"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                      <feature.Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors text-center">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed text-center group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effects */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2 group-hover:animate-bounce">
              99.5%
            </div>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">Accuracy Rate</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2 group-hover:animate-bounce">
              200+
            </div>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">Beta Testers Needed</p>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-2 group-hover:animate-bounce">
              &lt;3s
            </div>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">Average Processing Time</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;