import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Zap, DollarSign, Target, Smartphone, PlayCircle } from 'lucide-react';
import { BetaService } from '@/services/betaService';
import { AlternativeEmailService } from '@/services/alternativeEmailService';
import { DebugService } from '@/services/debugService';

const BetaSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the beta.",
        variant: "destructive"
      });
      return;
    }

    if (!BetaService.validateEmail(trimmedEmail)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Save to Firebase
      await BetaService.signup(trimmedEmail);

      // Send confirmation email
      await AlternativeEmailService.sendBetaSignupEmail(trimmedEmail);

      toast({
        title: "Welcome to Pampiri Beta! 🎉",
        description: "Check your email for beta access instructions and exclusive updates.",
      });

      setEmail('');
    } catch (error) {
      toast({
        title: "Signup failed",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="beta" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-glow rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-bounce-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-3"></div>
            <span className="text-white font-medium">🚀 Limited Beta Access Available</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white"> Receipt Management?</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of early adopters who are already saving hours every month. 
            Get exclusive beta access and help shape the future of receipt processing.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { Icon: Zap, text: "Instant access to beta version" },
              { Icon: DollarSign, text: "50% discount on first year" },
              { Icon: Target, text: "Direct feedback to our team" }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.Icon className="w-6 h-6 text-secondary" />
                <span className="text-white/90 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Signup Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 backdrop-blur-md border-white/30 text-white placeholder:text-white/70 h-12 text-lg focus:border-accent focus:ring-accent"
                  disabled={isSubmitting}
                />
              </div>
              
              <Button 
                type="submit"
                variant="cta"
                size="xl" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin"></div>
                    <span>Joining Beta...</span>
                  </div>
                ) : (
                  <>
                    <span>Get Beta Access Now</span>
                    <div className="w-2 h-2 bg-accent-foreground rounded-full group-hover:animate-bounce"></div>
                  </>
                )}
              </Button>
              
            </form>

            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 mt-12 opacity-75">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-white/30 flex items-center justify-center text-white text-xs font-bold">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-white/80 text-sm">200 beta testers needed</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="text-accent text-lg">⭐</div>
                ))}
              </div>
              <span className="text-white/80 text-sm">4.9/5 rating</span>
            </div>
          </div>

          {/* App Store Buttons Placeholder */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3 flex items-center space-x-3">
              <Smartphone className="w-8 h-8 text-white" />
              <div className="text-left">
                <div className="text-white/70 text-xs">Coming Soon to</div>
                <div className="text-white font-semibold">App Store</div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl px-6 py-3 flex items-center space-x-3">
              <PlayCircle className="w-8 h-8 text-white" />
              <div className="text-left">
                <div className="text-white/70 text-xs">Coming Soon to</div>
                <div className="text-white font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;