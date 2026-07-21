import { useState, useEffect } from 'react';
import { X, Cookie, ShieldCheck, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const COOKIE_KEY = 'pampiri_cookie_consent';

type ConsentState = 'accepted' | 'declined' | null;

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

const updateAnalyticsConsent = (granted: boolean) => {
    // Guarded: gtag is loaded via an external script (index.html) that
    // trackers/ad-blockers (Brave Shields, uBlock, strict Firefox ETP) may
    // block outright. In that case there's nothing to update, which is fine.
    if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
            analytics_storage: granted ? 'granted' : 'denied',
            ad_storage: granted ? 'granted' : 'denied',
            ad_user_data: granted ? 'granted' : 'denied',
            ad_personalization: granted ? 'granted' : 'denied',
        });
    }
};

const CookieConsent = () => {
    const [consent, setConsent] = useState<ConsentState>(null);
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [animateOut, setAnimateOut] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(COOKIE_KEY) as ConsentState;
        if (!stored) {
            // Delay showing the banner slightly so page loads first
            const timer = setTimeout(() => setVisible(true), 1800);
            return () => clearTimeout(timer);
        } else {
            setConsent(stored);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        setConsent('accepted');
        updateAnalyticsConsent(true);
        dismiss();
    };

    const handleDecline = () => {
        localStorage.setItem(COOKIE_KEY, 'declined');
        setConsent('declined');
        updateAnalyticsConsent(false);
        dismiss();
    };

    const dismiss = () => {
        setAnimateOut(true);
        setTimeout(() => setVisible(false), 400);
    };

    if (!visible || consent !== null) return null;

    return (
        <div
            className="fixed bottom-0 left-0 right-0 z-[9999] px-4 pb-4 pointer-events-none"
            role="dialog"
            aria-labelledby="cookie-title"
            aria-describedby="cookie-desc"
        >
            <div
                className="max-w-4xl mx-auto pointer-events-auto"
                style={{
                    transform: animateOut ? 'translateY(120%)' : 'translateY(0)',
                    opacity: animateOut ? 0 : 1,
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease',
                    animation: !animateOut ? 'slideUpCookie 0.5s cubic-bezier(0.2, 0, 0, 1) forwards' : undefined,
                }}
            >
                <div
                    className="rounded-3xl overflow-hidden"
                    style={{
                        background: 'hsl(225 30% 10% / 0.95)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid hsl(225 30% 22%)',
                        boxShadow: '0 -4px 40px hsl(225 35% 4% / 0.6), 0 0 0 1px hsl(32 98% 52% / 0.08)',
                    }}
                >
                    {/* Top accent line */}
                    <div
                        className="h-0.5 w-full"
                        style={{ background: 'linear-gradient(90deg, transparent 0%, hsl(32 98% 52%) 30%, hsl(186 95% 42%) 70%, transparent 100%)' }}
                    />

                    <div className="p-5 sm:p-6">
                        {/* Main row */}
                        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">

                            {/* Icon + Text */}
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                                <div
                                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{
                                        background: 'hsl(32 98% 52% / 0.12)',
                                        border: '1px solid hsl(32 98% 52% / 0.3)',
                                    }}
                                >
                                    <Cookie className="w-5 h-5" style={{ color: 'hsl(32 98% 55%)' }} />
                                </div>

                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3
                                            id="cookie-title"
                                            className="text-sm font-bold text-white"
                                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                                        >
                                            We use cookies
                                        </h3>
                                        <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'hsl(142 76% 45%)' }} />
                                    </div>
                                    <p
                                        id="cookie-desc"
                                        className="text-xs leading-relaxed"
                                        style={{ color: 'hsl(215 20% 50%)' }}
                                    >
                                        We use cookies to enhance your experience, analyse traffic, and personalise content.
                                        By clicking "Accept", you consent to our use of cookies.{' '}
                                        <a
                                            href="/privacy-policy"
                                            className="inline-flex items-center gap-0.5 font-medium underline-offset-2 hover:underline transition-colors"
                                            style={{ color: 'hsl(32 98% 55%)' }}
                                        >
                                            Privacy Policy
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </p>

                                    {/* Details toggle */}
                                    <button
                                        onClick={() => setShowDetails(!showDetails)}
                                        className="flex items-center gap-1 text-xs mt-2 transition-colors hover:text-white"
                                        style={{ color: 'hsl(215 20% 40%)' }}
                                    >
                                        {showDetails ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                                        {showDetails ? 'Hide details' : 'What we collect'}
                                    </button>
                                </div>
                            </div>

                            {/* Action buttons */}
                            <div className="flex items-center gap-3 flex-shrink-0 w-full sm:w-auto">
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:scale-105"
                                    style={{
                                        background: 'hsl(225 30% 16%)',
                                        border: '1px solid hsl(225 30% 24%)',
                                        color: 'hsl(215 20% 55%)',
                                    }}
                                >
                                    Decline
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(135deg, hsl(32 98% 52%), hsl(38 100% 58%))',
                                        color: 'hsl(222 84% 5%)',
                                        boxShadow: '0 2px 12px hsl(32 98% 52% / 0.35)',
                                    }}
                                >
                                    Accept All
                                </button>
                                <button
                                    onClick={dismiss}
                                    className="p-2 rounded-xl transition-all duration-200 hover:scale-105 flex-shrink-0"
                                    style={{
                                        background: 'hsl(225 30% 14%)',
                                        color: 'hsl(215 20% 45%)',
                                    }}
                                    aria-label="Dismiss"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Expanded details */}
                        {showDetails && (
                            <div
                                className="mt-5 pt-5 grid sm:grid-cols-3 gap-4"
                                style={{ borderTop: '1px solid hsl(225 30% 18%)' }}
                            >
                                {[
                                    {
                                        title: 'Essential',
                                        desc: 'Required for the site to function. Always active.',
                                        color: 'hsl(142 76% 45%)',
                                        always: true,
                                    },
                                    {
                                        title: 'Analytics',
                                        desc: 'Help us understand how you use Pampiri.',
                                        color: 'hsl(186 95% 42%)',
                                        always: false,
                                    },
                                    {
                                        title: 'Marketing',
                                        desc: 'Used to deliver relevant advertising.',
                                        color: 'hsl(32 98% 52%)',
                                        always: false,
                                    },
                                ].map(({ title, desc, color, always }) => (
                                    <div
                                        key={title}
                                        className="flex items-start gap-3 p-3 rounded-xl"
                                        style={{ background: 'hsl(225 30% 13%)', border: '1px solid hsl(225 30% 18%)' }}
                                    >
                                        <div className="w-2 h-2 rounded-full mt-1 flex-shrink-0" style={{ background: color }} />
                                        <div>
                                            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                                                {title}
                                                {always && (
                                                    <span
                                                        className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                                                        style={{ background: `${color.replace(')', ' / 0.15)').replace('hsl(', 'hsl(')}`, color }}
                                                    >
                                                        Always on
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[11px] mt-0.5 leading-relaxed" style={{ color: 'hsl(215 20% 45%)' }}>
                                                {desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes slideUpCookie {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </div>
    );
};

export default CookieConsent;
