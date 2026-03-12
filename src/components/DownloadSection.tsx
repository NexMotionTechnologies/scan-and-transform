import { Download, Smartphone, Zap, Target, ShieldCheck, ArrowRight, Star } from 'lucide-react';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.nexmotiontechnologies.pampiri';

const GooglePlayIcon = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M3.18 23.76a2 2 0 0 1-.86-.21 2.05 2.05 0 0 1-1.1-1.84V2.29A2.05 2.05 0 0 1 2.32.45a2 2 0 0 1 2.12.26l13.47 9.73-2.5 2.5L3.18 23.76z" />
        <path d="m17.66 12.56-2.74 2.74 2.74 1.98 3.07-1.76a1.16 1.16 0 0 0 0-2l-3.07-1.76-.99.8z" opacity=".6" />
        <path d="m3.18 23.76 12.23-8.82-2.26-2.26L3.18 23.76z" opacity=".4" />
        <path d="m3.18.24 9.97 9.97-2.26 2.26L3.18.24z" opacity=".4" />
    </svg>
);

const benefits = [
    {
        Icon: Zap,
        title: 'Instant Download',
        description: 'Available now on Google Play. One tap to get started.',
        color: 'hsl(32 98% 52%)',
        glow: 'hsl(32 98% 52% / 0.2)',
        border: 'hsl(32 98% 52% / 0.3)',
    },
    {
        Icon: Target,
        title: '30-Day Free Trial',
        description: 'Experience every Pro feature for a full month. No credit card required.',
        color: 'hsl(186 95% 42%)',
        glow: 'hsl(186 95% 42% / 0.2)',
        border: 'hsl(186 95% 42% / 0.3)',
    },
    {
        Icon: ShieldCheck,
        title: '100% Private & Secure',
        description: 'Your data is safe with strict security measures.',
        color: 'hsl(258 90% 68%)',
        glow: 'hsl(258 90% 68% / 0.2)',
        border: 'hsl(258 90% 68% / 0.3)',
    },
];

const DownloadSection = () => {
    return (
        <section
            id="download"
            className="relative py-28 overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, hsl(225 35% 7%) 0%, hsl(225 30% 10%) 50%, hsl(258 30% 9%) 100%)',
            }}
        >
            {/* Grid background */}
            <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

            {/* Ambient glow orbs */}
            <div
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, hsl(32 98% 52% / 0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}
            />
            <div
                className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, hsl(186 95% 42% / 0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
            />
            <div
                className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, hsl(258 90% 68% / 0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">

                    {/* Main content */}
                    <div className="text-center mb-16">
                        {/* Live badge */}
                        <div
                            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-semibold mb-8"
                            style={{
                                background: 'hsl(142 76% 45% / 0.1)',
                                border: '1px solid hsl(142 76% 45% / 0.35)',
                                color: 'hsl(142 76% 55%)',
                            }}
                        >
                            <span className="w-2 h-2 rounded-full animate-pulse bg-green-400" />
                            Available Now on Google Play Store
                            <Star className="w-4 h-4 fill-current" />
                        </div>

                        {/* Headline */}
                        <h2
                            className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6"
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            Stop the paperwork chaos.{' '}
                            <span className="text-gradient-brand">Start scanning.</span>
                        </h2>

                        <p
                            className="text-xl leading-relaxed max-w-3xl mx-auto mb-12"
                            style={{ color: 'hsl(215 20% 55%)' }}
                        >
                            Join thousands of smart business owners who have reclaimed their weekends from manual entry. Get Pampiri now and see the difference in seconds.
                        </p>

                        {/* Primary CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                            {/* Google Play Button */}
                            <a
                                href={PLAY_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                                style={{
                                    background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
                                    color: 'hsl(222 84% 5%)',
                                    boxShadow: '0 10px 40px hsl(32 98% 52% / 0.4), 0 2px 10px hsl(32 98% 52% / 0.2)',
                                    minWidth: '240px',
                                }}
                            >
                                <GooglePlayIcon />
                                <div className="text-left">
                                    <div className="text-xs font-medium opacity-70 leading-none mb-1">Download on</div>
                                    <div className="text-lg font-black leading-none">Google Play</div>
                                </div>
                                <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                            </a>

                            {/* iOS Coming Soon */}
                            <div
                                className="flex items-center gap-4 px-8 py-5 rounded-2xl cursor-not-allowed select-none"
                                style={{
                                    background: 'hsl(225 30% 12%)',
                                    border: '1px solid hsl(225 30% 20%)',
                                    minWidth: '240px',
                                    opacity: 0.6,
                                }}
                            >
                                <Smartphone className="w-7 h-7" style={{ color: 'hsl(215 20% 50%)' }} />
                                <div className="text-left">
                                    <div className="text-xs font-medium leading-none mb-1" style={{ color: 'hsl(215 20% 45%)' }}>Coming Soon to</div>
                                    <div
                                        className="text-lg font-black leading-none"
                                        style={{ color: 'hsl(215 20% 55%)' }}
                                    >
                                        App Store
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct link */}
                        <p className="text-sm mb-12" style={{ color: 'hsl(215 20% 38%)' }}>
                            Or scan the QR code in the app store ·{' '}
                            <a
                                href={PLAY_STORE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium transition-colors hover:underline"
                                style={{ color: 'hsl(32 98% 55%)' }}
                            >
                                Direct link →
                            </a>
                        </p>
                    </div>

                    {/* Benefits grid */}
                    <div className="grid md:grid-cols-3 gap-5">
                        {benefits.map(({ Icon, title, description, color, glow, border }, i) => (
                            <div
                                key={i}
                                className="group flex flex-col items-center text-center p-7 rounded-3xl transition-all duration-400 hover:-translate-y-2"
                                style={{
                                    background: 'hsl(222 30% 11%)',
                                    border: `1px solid hsl(225 30% 18%)`,
                                    boxShadow: '0 4px 20px hsl(225 35% 4% / 0.4)',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = border;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${glow}, 0 4px 20px hsl(225 35% 4% / 0.4)`;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLElement).style.borderColor = 'hsl(225 30% 18%)';
                                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px hsl(225 35% 4% / 0.4)';
                                }}
                            >
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                                    style={{
                                        background: color.replace(')', ' / 0.12)').replace('hsl(', 'hsl('),
                                        border: `1px solid ${border}`,
                                        boxShadow: `0 0 20px ${glow}`,
                                    }}
                                >
                                    <Icon className="w-8 h-8" style={{ color }} strokeWidth={2} />
                                </div>
                                <h3
                                    className="text-lg font-bold text-white mb-3"
                                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                >
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: 'hsl(215 20% 50%)' }}>
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Rating / social proof */}
                    <div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 pt-12"
                        style={{ borderTop: '1px solid hsl(225 30% 18%)' }}
                    >
                        <div className="flex items-center gap-2" style={{ color: 'hsl(215 20% 45%)' }}>
                            <Download className="w-4 h-4" style={{ color: 'hsl(32 98% 52%)' }} />
                            <span className="text-sm">Free to download</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: 'hsl(225 30% 25%)' }} />
                        <div className="flex items-center gap-2" style={{ color: 'hsl(215 20% 45%)' }}>
                            <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(186 95% 42%)' }} />
                            <span className="text-sm">No subscription required to try</span>
                        </div>
                        <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: 'hsl(225 30% 25%)' }} />
                        <div className="flex items-center gap-2" style={{ color: 'hsl(215 20% 45%)' }}>
                            <Zap className="w-4 h-4" style={{ color: 'hsl(258 90% 68%)' }} />
                            <span className="text-sm">Smart and intuitive from day one</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
