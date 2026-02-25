import { useState } from 'react';
import { Check, Star, ArrowRight, Zap, Building2, Users, MessageSquare, Lock, Construction, Smartphone, Mail, Phone, Calculator, ShieldCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri';

const pricingPlans = [
  {
    name: 'Free Trial',
    description: 'Perfect for testing Pampiri',
    price: 'R0.00',
    period: '10 document scans / month',
    Icon: Smartphone,
    features: [
      '10 document scans per month',
      'Word, Excel, CSV, JSON export',
      'Basic AI text extraction',
      'Full mobile app access',
      'Standard email support',
    ],
    ctaText: 'Download Free',
    ctaLink: PLAY_STORE_URL,
    popular: false,
    status: 'active',
    accentColor: 'hsl(186 95% 42%)',
    glowColor: 'hsl(186 95% 42% / 0.2)',
    borderColor: 'hsl(186 95% 42% / 0.3)',
    footerNote: '30-day trial period · No recurring billing'
  },
  {
    name: 'Starter Plan',
    description: 'Ideal for individuals & freelancers',
    price: 'R99.00',
    period: 'per month',
    Icon: Zap,
    features: [
      '150 document scans per month',
      '2 consecutive scans on batch',
      'All export formats (Excel, JSON...)',
      'Bulk processing enabled',
      'Advanced AI text extraction',
      'Secure local device storage',
      'Priority email support',
      'Document history & search',
    ],
    ctaText: 'Get Started',
    ctaLink: PLAY_STORE_URL,
    popular: true,
    status: 'active',
    accentColor: 'hsl(32 98% 52%)',
    glowColor: 'hsl(32 98% 52% / 0.25)',
    borderColor: 'hsl(32 98% 52% / 0.5)',
    footerNote: 'Active & purchasable via PayFast'
  },
  {
    name: 'Business Plan',
    description: 'Perfect for small teams',
    price: 'R499.99',
    period: 'per month',
    Icon: Building2,
    features: [
      '1,500 document scans per month',
      'Ready-to-use Excel templates',
      'PDF summary reports',
      'Full bulk processing',
      'Team collaboration tools',
      'Advanced analytics dashboard',
      'Phone & email support',
    ],
    ctaText: 'Coming Soon',
    ctaLink: '#',
    popular: false,
    status: 'construction',
    accentColor: 'hsl(258 90% 68%)',
    glowColor: 'hsl(258 90% 68% / 0.2)',
    borderColor: 'hsl(258 90% 68% / 0.3)',
    footerNote: 'Under Construction — Coming Soon'
  },
  {
    name: 'Enterprise',
    description: 'For firms & large organizations',
    price: 'R2,499.99',
    period: 'per month',
    Icon: MessageSquare,
    features: [
      '10,000 document scans per month',
      'Full API access & integrations',
      'Custom compliance exports',
      'Service Level Agreement (SLA)',
      'Dedicated account manager',
      'Priority 24/7 support',
      'Custom training & onboarding',
      'Advanced security features',
    ],
    ctaText: 'Contact Sales',
    ctaLink: '#',
    popular: false,
    status: 'locked',
    accentColor: 'hsl(142 76% 45%)',
    glowColor: 'hsl(142 76% 45% / 0.2)',
    borderColor: 'hsl(142 76% 45% / 0.3)',
    footerNote: 'Unlocked Later — Coming Soon'
  },
];

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const { toast } = useToast();

  const handlePlanClick = (plan: typeof pricingPlans[0], e: React.MouseEvent) => {
    if (plan.status !== 'active') {
      e.preventDefault();
      toast({
        title: `${plan.name} is currently under construction`,
        description: "We're working hard to bring this feature to you soon! Please check back later.",
        duration: 4000,
      });
    }
  };

  return (
    <section
      id="pricing"
      className="relative py-28 overflow-hidden"
      style={{ background: 'hsl(225, 30%, 9%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, hsl(32 98% 52% / 0.04) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{
              background: 'hsl(32 98% 52% / 0.08)',
              border: '1px solid hsl(32 98% 52% / 0.25)',
              color: 'hsl(32 98% 62%)',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'hsl(32 98% 52%)' }} />
            Flexible Subscription Plans
          </div>

          <h2
            className="text-4xl lg:text-6xl font-black mb-6 text-white"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Choose Your <span className="text-gradient-amber">Growth</span> Path
          </h2>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: 'hsl(215 20% 55%)' }}>
            All prices in ZAR. Payments processed securely via PayFast with recurring monthly billing.
          </p>
        </div>

        {/* Plans grid - items-end creates the growing baseline effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-end">
          {pricingPlans.map((plan, index) => {
            const isHovered = hoveredPlan === index;
            const isInactive = plan.status !== 'active';

            // Stagger logic: height increases with index
            const extraPadding = index * 12; // Increases card padding visually
            const minHeight = 440 + (index * 40); // Ensures visible growth

            return (
              <div
                key={index}
                className="relative group transition-all duration-500"
                style={{
                  transform: plan.popular
                    ? 'translateY(-16px)'
                    : isHovered
                      ? 'translateY(-8px)'
                      : 'translateY(0)',
                  zIndex: isHovered || plan.popular ? 20 : 10,
                }}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular / Status badge */}
                {(plan.popular || isInactive) && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider whitespace-nowrap"
                    style={{
                      background: plan.popular
                        ? 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 60%))'
                        : isInactive
                          ? 'hsl(225 30% 18%)'
                          : '',
                      color: plan.popular ? 'hsl(222 84% 5%)' : 'hsl(215 20% 60%)',
                      border: isInactive ? '1px solid hsl(225 30% 25%)' : 'none',
                      boxShadow: plan.popular ? '0 4px 16px hsl(32 98% 52% / 0.4)' : 'none',
                    }}
                  >
                    {plan.popular ? (
                      <>
                        <Star className="w-3 h-3 fill-current" />
                        Most Popular
                      </>
                    ) : (
                      <>
                        {plan.status === 'construction' ? <Construction className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
                        {plan.status === 'construction' ? 'Under Construction' : 'Coming Soon'}
                      </>
                    )}
                  </div>
                )}

                <div
                  className={`relative rounded-3xl p-7 overflow-hidden flex flex-col transition-all duration-500 ${isInactive ? 'opacity-80' : ''}`}
                  style={{
                    background: plan.popular
                      ? 'linear-gradient(160deg, hsl(225 30% 13%), hsl(225 28% 11%))'
                      : 'hsl(222 30% 11%)',
                    border: `1px solid ${isHovered ? plan.borderColor : 'hsl(225 30% 18%)'}`,
                    boxShadow: isHovered
                      ? `0 12px 40px ${plan.glowColor}, 0 4px 20px hsl(225 35% 4% / 0.5)`
                      : '0 4px 20px hsl(225 35% 4% / 0.3)',
                    paddingBottom: `${28 + extraPadding}px`, // Staggered height
                    minHeight: `${minHeight}px`, // Ensures visible growth
                  }}
                >
                  {/* Top gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl"
                    style={{ background: plan.popular ? `linear-gradient(90deg, hsl(32 98% 52%), hsl(38 100% 60%))` : plan.accentColor }}
                  />

                  {/* Plan icon + name */}
                  <div className="relative z-10 mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: plan.accentColor.replace(')', ' / 0.12)').replace('hsl(', 'hsl('),
                        border: `1px solid ${plan.borderColor}`,
                        boxShadow: isHovered ? `0 0 20px ${plan.glowColor}` : 'none',
                      }}
                    >
                      <plan.Icon className="w-6 h-6" style={{ color: plan.accentColor }} strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                      {plan.name}
                    </h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'hsl(215 20% 50%)' }}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="relative z-10 mb-8">
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="text-4xl font-black"
                        style={{
                          color: plan.popular ? 'hsl(32 98% 55%)' : 'white',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {plan.price}
                      </span>
                    </div>
                    <p className="text-xs font-medium mt-1.5" style={{ color: 'hsl(215 20% 40%)' }}>
                      {plan.period}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 space-y-3.5 mb-10 flex-1">
                    {plan.features.map((feature, fi) => (
                      <div key={fi} className="flex items-start gap-3 group/feat">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors group-hover/feat:scale-110"
                          style={{
                            background: isInactive ? 'hsl(225 30% 20%)' : plan.accentColor.replace(')', ' / 0.2)').replace('hsl(', 'hsl('),
                            border: `1px solid ${isInactive ? 'hsl(225 30% 25%)' : plan.borderColor}`,
                          }}
                        >
                          <Check className={`w-2.5 h-2.5 ${isInactive ? 'text-gray-600' : ''}`} style={{ color: isInactive ? 'inherit' : plan.accentColor }} strokeWidth={3} />
                        </div>
                        <span className="text-xs leading-relaxed" style={{ color: isInactive ? 'hsl(215 20% 40%)' : 'hsl(215 20% 55%)' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="relative z-10">
                    <a
                      href={plan.ctaLink}
                      onClick={(e) => handlePlanClick(plan, e)}
                      target={plan.ctaLink.startsWith('http') ? "_blank" : "_self"}
                      rel={plan.ctaLink.startsWith('http') ? "noopener noreferrer" : ""}
                      className={`group/btn flex items-center justify-center gap-2 w-full py-4 px-4 rounded-2xl text-sm font-bold transition-all duration-300 ${isInactive ? 'cursor-default' : 'hover:scale-[1.02] active:scale-95'}`}
                      style={
                        isInactive
                          ? { background: 'hsl(225 30% 13%)', border: '1px solid hsl(225 30% 18%)', color: 'hsl(215 20% 40%)' }
                          : plan.popular
                            ? {
                              background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 60%))',
                              color: 'hsl(222 84% 5%)',
                              boxShadow: '0 4px 20px hsl(32 98% 52% / 0.35)',
                            }
                            : {
                              background: plan.accentColor.replace(')', ' / 0.1)').replace('hsl(', 'hsl('),
                              border: `1px solid ${plan.borderColor}`,
                              color: plan.accentColor,
                            }
                      }
                    >
                      {plan.ctaText}
                      {plan.status === 'active' && <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />}
                      {isInactive && plan.status === 'locked' && <Lock className="w-4 h-4" />}
                    </a>

                    {/* Footer note inside card */}
                    <p className="text-[10px] text-center mt-4 opacity-50" style={{ color: 'hsl(215 20% 40%)' }}>
                      {plan.footerNote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 max-w-2xl mx-auto p-8 rounded-3xl" style={{ border: '1px dashed hsl(225 30% 18%)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 45%)' }}>
            Looking for something specific? We offer a <span className="text-white font-bold">7-day trial</span> on Enterprise plans while our team setups your custom environment.{' '}
            <br className="hidden sm:block" />
            <a
              href="mailto:info@nexmotiontechnologies.co.za"
              className="inline-flex items-center gap-1 font-bold transition-colors hover:text-white mt-4"
              style={{ color: 'hsl(32 98% 52%)' }}
            >
              Contact Sales Flow <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
