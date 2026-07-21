import { FileText, ShieldCheck, MessageCircle, Users2, Repeat, Calculator, ArrowRight, Sparkles } from 'lucide-react';

const highlights = [
  {
    Icon: FileText,
    title: 'Unlimited Invoices',
    description: 'No limit, ever. Create, send, and store as many invoices as your business needs.',
  },
  {
    Icon: ShieldCheck,
    title: 'Can\'t Be Faked',
    description: 'Every invoice is sealed the moment it\'s sent. Nobody, not even us, can quietly change it afterwards.',
  },
  {
    Icon: Calculator,
    title: 'VAT, Sorted',
    description: 'We work out what VAT you owe and what you can claim back, ready to hand straight to SARS.',
  },
  {
    Icon: MessageCircle,
    title: 'WhatsApp Payment Links',
    description: 'Add your SnapScan, Yoco, or PayFast link once. It shows up automatically on every invoice you send.',
  },
  {
    Icon: Users2,
    title: 'Client Management',
    description: 'Save client details once. Pick them from a list every time you bill, no retyping addresses.',
  },
  {
    Icon: Repeat,
    title: 'Built for Repeat Billing',
    description: 'Copy any past invoice into a fresh draft in one tap. Perfect for billing the same client every month.',
  },
];

const InvoiceSpotlight = () => {
  return (
    <section
      id="invoice"
      className="relative py-28 overflow-hidden"
      style={{ background: 'hsl(225, 30%, 9%)' }}
    >
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, hsl(32 98% 52% / 0.06) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">

          {/* Left: pitch */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: 'hsl(32 98% 52% / 0.08)',
                border: '1px solid hsl(32 98% 52% / 0.25)',
                color: 'hsl(32 98% 62%)',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Included from Personal Pro
            </div>

            <h2
              className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Meet <span className="text-gradient-amber">Pampiri Invoice</span>
            </h2>

            <p className="text-lg leading-relaxed mb-8" style={{ color: 'hsl(215 20% 60%)' }}>
              A simple web app that turns your scanned receipts and tracked income into professional invoices.
              No design skills needed, no separate login, no spreadsheet headaches.
            </p>

            <a
              href="https://invoice.mypampiri.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
                color: 'hsl(222 84% 5%)',
                boxShadow: '0 8px 32px hsl(32 98% 52% / 0.35)',
              }}
            >
              Open Pampiri Invoice
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs mt-4" style={{ color: 'hsl(215 20% 40%)' }}>
              Signs in with your existing Pampiri account. Nothing new to register.
            </p>
          </div>

          {/* Right: highlight grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {highlights.map(({ Icon, title, description }, i) => (
              <div
                key={i}
                className="group p-6 rounded-3xl flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-400 hover:-translate-y-1"
                style={{
                  background: 'hsl(222 30% 11%)',
                  border: '1px solid hsl(225 30% 18%)',
                  boxShadow: '0 4px 20px hsl(225 35% 4% / 0.4)',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'hsl(32 98% 52% / 0.35)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'hsl(225 30% 18%)';
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'hsl(32 98% 52% / 0.12)', border: '1px solid hsl(32 98% 52% / 0.3)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: 'hsl(32 98% 55%)' }} strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 52%)' }}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoiceSpotlight;
