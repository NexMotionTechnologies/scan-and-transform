import { useState } from 'react';
import { Check, Star, ArrowRight, Zap, Building2, Users, MessageSquare, Lock, Construction, Smartphone, Mail, Truck, Minus, Plus, Package } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri';
const SALES_EMAIL = 'mailto:info@nexmotiontechnologies.co.za?subject=Enterprise%20Plan%20Inquiry';

const pricingPlans = [
  {
    name: '30-Day Free Trial',
    description: 'Perfect for testing out Pampiri',
    monthlyPrice: 'R0.00',
    annualPrice: 'R0.00',
    period: 'for 30 days',
    Icon: Smartphone,
    features: [
      'Full Personal Pro access, nothing locked',
      'Export to Spreadsheet or PDF',
      'Highly accurate text reading',
      'Full mobile app experience',
      'Email support when you need it',
    ],
    ctaText: 'Start Free Trial',
    ctaLink: PLAY_STORE_URL,
    popular: false,
    status: 'active',
    accentColor: 'hsl(186 95% 42%)',
    glowColor: 'hsl(186 95% 42% / 0.2)',
    borderColor: 'hsl(186 95% 42% / 0.3)',
    footerNote: '500MB storage · No credit card required'
  },
  {
    name: 'Personal Pro',
    description: 'Ideal for casual drivers & freelancers',
    monthlyPrice: 'R99.00',
    annualPrice: 'R999.00',
    period: 'per month',
    Icon: Zap,
    features: [
      '200 document scans every month',
      'Rapid batch scanning (multiple at once)',
      'See exactly what you keep after Uber or Bolt commission',
      'Pampiri Invoice access for client billing',
      'Export to Spreadsheet or PDF',
      '5GB safe & private storage',
      'Priority email support',
    ],
    ctaText: 'Get Started',
    ctaLink: PLAY_STORE_URL,
    popular: false,
    status: 'active',
    accentColor: 'hsl(32 98% 52%)',
    glowColor: 'hsl(32 98% 52% / 0.25)',
    borderColor: 'hsl(32 98% 52% / 0.5)',
    footerNote: 'Active & purchasable via PayFast'
  },
  {
    name: 'Gig Pro',
    description: 'For full-time gig drivers & heavy users',
    monthlyPrice: 'R199.00',
    annualPrice: 'R1,990.00',
    period: 'per month',
    Icon: Truck,
    features: [
      '500 document scans every month',
      'High-volume batch scanning',
      'Profitability dashboard (Uber, Bolt, etc.)',
      'Pampiri Invoice access for client billing',
      'Export to Spreadsheet or PDF',
      '5GB safe & private storage',
      'Priority email support',
    ],
    ctaText: 'Get Started',
    ctaLink: PLAY_STORE_URL,
    popular: true,
    status: 'active',
    accentColor: 'hsl(174 84% 45%)',
    glowColor: 'hsl(174 84% 45% / 0.25)',
    borderColor: 'hsl(174 84% 45% / 0.5)',
    footerNote: 'Active & purchasable via PayFast'
  },
  {
    name: 'Personal Business',
    description: 'Perfect for small businesses & team accounts',
    monthlyPrice: 'R799.00',
    annualPrice: 'R7,990.00',
    period: 'per month',
    Icon: Building2,
    features: [
      '1,500 document scans every month',
      'Includes up to 3 team members (500 scans each)',
      'Budget monitoring with category alerts',
      'Branded, customisable invoices',
      'See your whole team\'s scans in one shared feed',
      'Ready-to-use accountant tax packs',
      '20GB storage · Direct phone & email support',
    ],
    ctaText: 'Get Started',
    ctaLink: PLAY_STORE_URL,
    popular: false,
    status: 'active',
    accentColor: 'hsl(258 90% 68%)',
    glowColor: 'hsl(258 90% 68% / 0.2)',
    borderColor: 'hsl(258 90% 68% / 0.3)',
    footerNote: 'Active & purchasable via PayFast'
  },
  {
    name: 'Enterprise',
    description: 'For firms & large organisations',
    monthlyPrice: 'Contact Sales',
    annualPrice: 'Contact Sales',
    anchorPrice: 'From R5,999 / month',
    period: 'custom',
    Icon: MessageSquare,
    features: [
      '10,000 document scans every month',
      'Direct connection to your accounting software',
      'Custom reports built for your firm',
      'Service Level Agreement (SLA)',
      'Your own dedicated account manager',
      'Skip the line 24/7 support',
      'We train your entire team',
      '100GB storage · Maximum data security',
    ],
    ctaText: 'Contact Sales',
    ctaLink: SALES_EMAIL,
    popular: false,
    status: 'contact',
    accentColor: 'hsl(142 76% 45%)',
    glowColor: 'hsl(142 76% 45% / 0.2)',
    borderColor: 'hsl(142 76% 45% / 0.3)',
    footerNote: '30-day trial while we set up your environment'
  },
];

const FLEET_BASE = 299;
const FLEET_PER_SEAT = 99;
const FLEET_PER_VEHICLE = 49;
const FLEET_STORAGE_BLOCK = 29; // per +1GB block

const formatZAR = (value: number) =>
  `R${value.toLocaleString('en-ZA', { minimumFractionDigits: 0 })}`;

const Pricing = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [isAnnual, setIsAnnual] = useState(false);
  const [seats, setSeats] = useState(0);
  const [vehicles, setVehicles] = useState(0);
  const [storageBlocks, setStorageBlocks] = useState(0);
  const { toast } = useToast();

  const fleetTotal =
    FLEET_BASE + seats * FLEET_PER_SEAT + vehicles * FLEET_PER_VEHICLE + storageBlocks * FLEET_STORAGE_BLOCK;

  const handlePlanClick = (plan: typeof pricingPlans[0], e: React.MouseEvent) => {
    if (plan.status === 'construction' || plan.status === 'locked') {
      e.preventDefault();
      toast({
        title: `${plan.name} is currently under construction`,
        description: "We're working hard to bring this feature to you soon! Please check back later.",
        duration: 4000,
      });
    }
  };

  const Stepper = ({
    value,
    onChange,
    max,
    accentColor,
  }: {
    value: number;
    onChange: (v: number) => void;
    max: number;
    accentColor: string;
  }) => (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ background: 'hsl(225 30% 16%)', border: '1px solid hsl(225 30% 24%)', color: 'hsl(215 20% 70%)' }}
        aria-label="Decrease"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span
        className="w-10 text-center text-lg font-black"
        style={{ color: 'white', fontFamily: "'Space Grotesk', sans-serif" }}
      >
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ background: `${accentColor.replace(')', ' / 0.15)')}`, border: `1px solid ${accentColor.replace(')', ' / 0.4)')}`, color: accentColor }}
        aria-label="Increase"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );

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
          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-12" style={{ color: 'hsl(215 20% 55%)' }}>
            All prices in ZAR. Payments processed securely via PayFast with recurring monthly billing.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <Label
              htmlFor="billing-frequency"
              className={`text-sm font-bold transition-all duration-300 ${!isAnnual ? 'text-white' : 'text-neutral-500'}`}
            >
              Monthly
            </Label>
            <div className="relative flex items-center">
              <Switch
                id="billing-frequency"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-amber-500 data-[state=unchecked]:bg-neutral-800"
              />
            </div>
            <div className="flex items-center gap-3">
              <Label
                htmlFor="billing-frequency"
                className={`text-sm font-bold transition-all duration-300 ${isAnnual ? 'text-white' : 'text-neutral-500'}`}
              >
                Annual
              </Label>
              <span
                className={`hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-black transition-all duration-500 uppercase tracking-tighter ${
                  isAnnual
                    ? 'bg-teal-500/20 border-teal-500/50 text-teal-400 scale-110 shadow-[0_0_15px_rgba(20,184,166,0.4)]'
                    : 'bg-teal-500/10 border-teal-500/30 text-teal-400/60 opacity-70'
                } border`}
              >
                Best Value
              </span>
            </div>
          </div>
        </div>

        {/* Plans grid - items-end creates the growing baseline effect */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-[90rem] mx-auto items-end">
          {pricingPlans.map((plan, index) => {
            const isHovered = hoveredPlan === index;
            const isInactive = plan.status === 'construction' || plan.status === 'locked';

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
                  <div className="relative z-10 mb-8 flex flex-col items-center lg:items-start text-center lg:text-left">
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
                  <div className="relative z-10 mb-8 flex flex-col items-center lg:items-start">
                    <div className="flex items-baseline gap-1.5 justify-center lg:justify-start">
                      <span
                        className={plan.status === 'contact' ? 'text-2xl font-black' : 'text-4xl font-black'}
                        style={{
                          color: plan.popular ? 'hsl(32 98% 55%)' : 'white',
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      >
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                    </div>
                    {plan.anchorPrice && (
                      <p className="text-xs font-semibold mt-1" style={{ color: plan.accentColor }}>
                        {plan.anchorPrice}
                      </p>
                    )}
                    <p className="text-xs font-medium mt-1.5 text-center lg:text-left" style={{ color: 'hsl(215 20% 40%)' }}>
                      {plan.status === 'contact'
                        ? 'billed to fit your organisation'
                        : plan.name === '30-Day Free Trial'
                          ? plan.period
                          : (isAnnual ? 'per year' : 'per month')}
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
                      {plan.status === 'contact' && <Mail className="w-4 h-4" />}
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

        {/* Fleet Pro: composable pricing + live calculator */}
        <div id="fleet-pricing" className="max-w-5xl mx-auto mt-24 scroll-mt-32">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: 'hsl(142 76% 45% / 0.08)',
                border: '1px solid hsl(142 76% 45% / 0.25)',
                color: 'hsl(142 76% 55%)',
              }}
            >
              <Truck className="w-3.5 h-3.5" />
              For Fleet Managers
            </div>
            <h3 className="text-3xl lg:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="text-gradient-teal">Fleet Pro.</span> Pay for exactly what you run.
            </h3>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(215 20% 55%)' }}>
              No WhatsApp chaos, no lost slips. Every driver scans, every receipt lands in your approval inbox automatically. Build your plan below and watch the total update live, with no surprises at checkout.
            </p>
          </div>

          <div
            className="relative rounded-3xl p-8 lg:p-10 grid lg:grid-cols-2 gap-10"
            style={{
              background: 'linear-gradient(160deg, hsl(225 30% 13%), hsl(225 28% 11%))',
              border: '1px solid hsl(142 76% 45% / 0.25)',
              boxShadow: '0 12px 40px hsl(142 76% 45% / 0.08), 0 4px 20px hsl(225 35% 4% / 0.5)',
            }}
          >
            {/* Configurator */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">Fleet Pro base</span>
                  <span className="text-sm font-bold" style={{ color: 'hsl(142 76% 55%)' }}>{formatZAR(FLEET_BASE)}/mo</span>
                </div>
                <p className="text-xs" style={{ color: 'hsl(215 20% 50%)' }}>
                  Fleet Manager account, 1 vehicle, receipt routing & approval inbox, branded invoicing, 10GB storage.
                </p>
              </div>

              <div className="h-px" style={{ background: 'hsl(225 30% 20%)' }} />

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4" style={{ color: 'hsl(142 76% 55%)' }} />
                    Driver seats
                  </span>
                  <p className="text-xs mt-1" style={{ color: 'hsl(215 20% 50%)' }}>R99/driver/month · 200 scans each</p>
                </div>
                <Stepper value={seats} onChange={setSeats} max={100} accentColor="hsl(142 76% 45%)" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <Truck className="w-4 h-4" style={{ color: 'hsl(142 76% 55%)' }} />
                    Additional vehicles
                  </span>
                  <p className="text-xs mt-1" style={{ color: 'hsl(215 20% 50%)' }}>R49/vehicle/month · beyond the first</p>
                </div>
                <Stepper value={vehicles} onChange={setVehicles} max={50} accentColor="hsl(142 76% 45%)" />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <Package className="w-4 h-4" style={{ color: 'hsl(142 76% 55%)' }} />
                    Extra storage
                  </span>
                  <p className="text-xs mt-1" style={{ color: 'hsl(215 20% 50%)' }}>+1GB blocks at R29/month</p>
                </div>
                <Stepper value={storageBlocks} onChange={setStorageBlocks} max={20} accentColor="hsl(142 76% 45%)" />
              </div>

              <p className="text-[11px] pt-2" style={{ color: 'hsl(215 20% 40%)' }}>
                Storage add-ons are also available in +500MB/R19 blocks, and apply to every plan tier, not just Fleet Pro.
              </p>
            </div>

            {/* Live total */}
            <div
              className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
              style={{ background: 'hsl(222 30% 9%)', border: '1px solid hsl(142 76% 45% / 0.2)' }}
            >
              <span className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: 'hsl(215 20% 45%)' }}>
                Your monthly total
              </span>
              <span
                className="text-6xl font-black mb-2 transition-all duration-300"
                style={{ color: 'hsl(142 76% 55%)', fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {formatZAR(fleetTotal)}
              </span>
              <span className="text-sm mb-8" style={{ color: 'hsl(215 20% 50%)' }}>
                per month · {seats} driver{seats === 1 ? '' : 's'} · {1 + vehicles} vehicle{vehicles === 0 ? '' : 's'}
              </span>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center justify-center gap-2 w-full py-4 px-4 rounded-2xl text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, hsl(142 76% 45%), hsl(160 80% 45%))',
                  color: 'hsl(222 84% 5%)',
                  boxShadow: '0 4px 20px hsl(142 76% 45% / 0.35)',
                }}
              >
                Set Up My Fleet
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] mt-4" style={{ color: 'hsl(215 20% 40%)' }}>
                e.g. 5 drivers, 3 vehicles = R892/month
              </p>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 max-w-2xl mx-auto p-8 rounded-3xl" style={{ border: '1px dashed hsl(225 30% 18%)' }}>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 45%)' }}>
            Looking for something specific? We offer a <span className="text-white font-bold">30-day trial</span> on Enterprise plans while our team setups your custom environment.{' '}
            <br className="hidden sm:block" />
            <a
              href={SALES_EMAIL}
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
