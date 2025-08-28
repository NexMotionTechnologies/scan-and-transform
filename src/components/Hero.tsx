import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Scan, FileText, Download, Zap } from 'lucide-react';
import heroLogo from '@/assets/pampiri-hero-logo.png';
import phoneMockup from '@/assets/phone-mockup-3d.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/5 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full animate-float-reverse blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-glow rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={heroLogo} 
                alt="Pampiri Logo" 
                className="w-16 h-16 animate-bounce-in"
              />
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                  Pampiri
                </h1>
                <p className="text-xl text-white/80 font-medium">
                  Scan. Extract. Simplify.
                </p>
              </div>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              Turn receipts into 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                organized data instantly
              </span>
            </h2>

            <p className="text-xl text-white/90 max-w-xl leading-relaxed">
              Scan any receipt with your phone and get perfectly formatted Excel files in seconds. 
              Say goodbye to manual data entry forever.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                { Icon: Scan, text: "AI-powered text extraction with 99% accuracy" },
                { Icon: FileText, text: "Export to Excel, CSV, PDF formats instantly" }, 
                { Icon: Zap, text: "Process hundreds of receipts in minutes" },
                { Icon: Download, text: "Secure cloud storage with enterprise-grade encryption" }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-4 transition-all duration-500 delay-${index * 100} ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                >
                  <div className="w-10 h-10 bg-secondary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                    <feature.Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <span className="text-white/90 text-lg">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 delay-300 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
              <Button 
                variant="hero" 
                size="xl"
                className="group"
              >
                <span>Start Free Trial</span>
                <div className="w-2 h-2 bg-accent rounded-full group-hover:animate-bounce"></div>
              </Button>
              
              <Button 
                variant="glass" 
                size="xl"
                className="group"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8 opacity-75">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                <span className="text-white/70 text-sm">10,000+ receipts processed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-white/70 text-sm">99.5% accuracy rate</span>
              </div>
            </div>
          </div>

          {/* 3D Phone Mockup */}
          <div className={`relative perspective-1000 transition-all duration-1200 delay-200 ${isVisible ? 'animate-phone-float' : 'opacity-0'}`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-xl opacity-30 scale-110 animate-glow-pulse"></div>
              
              {/* Phone Container */}
              <div className="relative transform-3d hover:rotate-y-12 hover:rotate-x-6 transition-transform duration-500">
                <img 
                  src={phoneMockup} 
                  alt="Pampiri App Mockup" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
                
                {/* Floating UI Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary rounded-xl flex items-center justify-center animate-float shadow-lg">
                  <Scan className="w-8 h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-6 w-20 h-12 bg-accent rounded-lg flex items-center justify-center animate-float-reverse shadow-lg">
                  <FileText className="w-6 h-6 text-accent-foreground" />
                </div>
                
                <div className="absolute top-1/2 -right-12 w-14 h-14 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center animate-bounce border border-white/30">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;