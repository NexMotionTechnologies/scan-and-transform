import { ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';
import manualStressImg from '@/assets/manual_stress_optimized.jpg';
import digitalClarityImg from '@/assets/photo-1460925895917-afdab827c52f.avif';

const Transformation = () => {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'hsl(225 35% 6%)' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            From Paper Chaos to <span className="text-gradient-amber">Digital Clarity</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'hsl(215 20% 60%)' }}>
            Traditional receipt management is a nightmare of lost paper and manual entry.
            Pampiri transforms that stress into a streamlined, automated workflow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Before: The Nightmare */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[hsl(225,30%,10%)] border border-red-500/20 rounded-3xl overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={manualStressImg}
                  alt="Overworked person with receipts"
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,30%,10%)] to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-500 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  The Old Way
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  Manual Stress
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: 'hsl(215 20% 50%)' }}>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5"></span>
                    Hours spent on manual data entry every week
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5"></span>
                    High risk of human error and missed tax deductions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5"></span>
                    Physical receipts fade, get lost, or stained
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* After: The Dream */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-amber-500/30 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-[hsl(225,30%,12%)] border border-teal-500/30 rounded-3xl overflow-hidden ring-1 ring-teal-500/20">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={digitalClarityImg}
                  alt="Clean workspace with digital organization"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(225,30%,12%)] to-transparent"></div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full text-teal-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  The Pampiri Way
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  Effortless Control
                </h3>
                <ul className="space-y-3 text-sm" style={{ color: 'hsl(215 20% 70%)' }}>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5"></span>
                    Scan and extract data in under 5 seconds
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5"></span>
                    Export perfect spreadsheets directly to your accountant
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5"></span>
                    Cloud-backed digital copies that never fade or vanish
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Arrow (Visual Only on Desktop) */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-amber-500 p-[1px] shadow-2xl shadow-teal-500/20">
            <div className="w-full h-full rounded-full bg-[hsl(225,35%,6%)] flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
