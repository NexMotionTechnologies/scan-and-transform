import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: "Free Trial", 
    description: "Perfect for testing Pampiri's capabilities",
    price: "Free",
    currency: "",
    period: "10 scans included",
    features: [
      "10 receipt scans per month",
      "All export formats (Excel, CSV, PDF)",
      "Basic AI text extraction", 
      "Mobile app access",
      "Email support"
    ],
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Starter Plan",
    description: "Ideal for freelancers and students", 
    price: "R99",
    currency: "R",
    period: "per month (~$5.50)",
    features: [
      "Up to 200 scans per month",
      "All export formats (Excel, CSV, PDF)",
      "Advanced AI text extraction",
      "Cloud storage & sync",
      "Priority email support",
      "Receipt history & search"
    ],
    buttonText: "Get Beta Access", 
    buttonVariant: "hero" as const,
    popular: true
  },
  {
    name: "Business Plan",
    description: "Perfect for small businesses",
    price: "R499", 
    currency: "R",
    period: "per month (~$27)",
    features: [
      "Up to 1,500 scans per month",
      "All export formats + Excel templates",
      "PDF summary reports",
      "Bulk processing",
      "Team collaboration tools",
      "Advanced analytics dashboard",
      "Phone & email support"
    ],
    buttonText: "Get Beta Access",
    buttonVariant: "default" as const, 
    popular: false
  },
  {
    name: "Enterprise Plan",
    description: "For corporates & accounting firms",
    price: "R2,499+",
    currency: "R", 
    period: "per month (~$135+)",
    features: [
      "Up to 10,000 scans per month",
      "Full API access & integrations",
      "Custom compliance exports",
      "Service Level Agreement (SLA)",
      "Dedicated account manager", 
      "Priority 24/7 support",
      "Custom training & onboarding",
      "Advanced security features"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "cta" as const,
    popular: false
  }
];

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="pricing" className="py-24 bg-gradient-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Simple, Transparent
            <span className="text-transparent bg-clip-text bg-gradient-primary"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect plan for your needs. Start free, upgrade when you're ready. 
            All plans include our core AI-powered receipt processing.
          </p>
          
          {/* Beta Badge */}
          <div className="inline-flex items-center mt-6 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse mr-2"></div>
            <span className="text-accent font-medium">🚀 Currently in Beta - Get exclusive early access!</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                plan.popular ? 'lg:-translate-y-4 lg:scale-105' : ''
              } ${hoveredPlan === index ? 'scale-105 -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce-in">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-card border-2 rounded-3xl p-6 shadow-card hover:shadow-3d transition-all duration-500 ${
                plan.popular ? 'border-primary/50 shadow-glow' : 'border-border hover:border-primary/30'
              }`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 ${
                  plan.popular ? 'bg-gradient-primary' : 'bg-gradient-to-br from-primary to-secondary'
                }`}></div>

                {/* Header */}
                <div className="relative text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="relative text-center mb-8">
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{plan.period}</p>
                </div>

                {/* Features */}
                <div className="relative space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-start space-x-3 group/feature"
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular ? 'bg-primary' : 'bg-success'
                      } group-hover/feature:scale-110 transition-transform`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground text-sm leading-relaxed group-hover/feature:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="relative">
                  <Button 
                    variant={plan.buttonVariant} 
                    size="lg"
                    className="w-full group/btn"
                    onClick={() => {
                      const target = document.getElementById('beta');
                      target?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>{plan.buttonText}</span>
                    {plan.name !== "Enterprise Plan" && (
                      <div className="w-2 h-2 bg-current rounded-full group-hover/btn:animate-bounce"></div>
                    )}
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none bg-gradient-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Questions about pricing? Need a custom plan?
          </p>
          <Button 
            variant="ghost" 
            className="group"
            onClick={() => {
              const target = document.getElementById('beta');
              target?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Contact our team</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;