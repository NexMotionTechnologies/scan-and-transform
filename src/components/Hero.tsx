import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Scan, FileText, Download, Zap, Menu, X } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navItems = ['Home', 'How It Works', 'Features' ,'Pricing', 'Contact'];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="src/assets/video.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>
      </div>

      {/* Improved Navigation */}
      <nav className="relative z-50 w-full py-6 px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center space-x-3">
            <img src="src/assets/pampiri-hero-logo.png" className="w-10 h-10" alt="Pampiri Logo" />
            <span className="text-2xl font-bold text-white">Pampiri</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - Centered */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-6 flex flex-col items-center text-center space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-white/80 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button className="w-full max-w-xs bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center space-x-4 mb-6">
                <img src="src/assets/pampiri-hero-logo.png" className="w-20 h-20" alt="Pampiri Logo" />
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
                Turn receipts into{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
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
                    className={`flex items-center space-x-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                      <feature.Icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <span className="text-white/90 text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '300ms' }}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 text-lg group">
                  <span>Start Free Trial</span>
                  <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:animate-bounce ml-2"></div>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-4 rounded-lg transition-all duration-200 text-lg group"
                >
                  <svg className="w-5 h-5 group-hover:animate-pulse mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-8 opacity-75">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">10,000+ receipts processed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-white/70 text-sm">99.5% accuracy rate</span>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Mockup */}
            <div className={`relative perspective-1000 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
              <div className="relative">
                {/* Phone Mockup Image */}
                <div className="relative transform transition-transform duration-500 hover:scale-105">
                  <div className="w-80 mx-auto">
                    <img src="src/assets/phone-mockup-3d.png" alt="Phone Mockup" className="w-full h-auto" />
                  </div>
                </div>
                
                {/* Floating UI Elements - Mobile Optimized */}
                <div className="absolute -top-4 md:-top-8 -right-2 md:-right-8 w-12 h-12 md:w-16 md:h-16 bg-orange-500 rounded-xl flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
                  <Scan className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                
                <div className="absolute -bottom-0 md:-bottom-4 -left-3 md:-left-6 w-16 h-10 md:w-20 md:h-12 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>
                  <FileText className="w-5 h-5 md:w-6 md:h-6 text-yellow-800" />
                </div>
                
                <div className="absolute top-1/2 -right-4 md:-right-12 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
                  <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;