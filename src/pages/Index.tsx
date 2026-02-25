import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ background: 'hsl(225, 35%, 6%)' }}>
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <DownloadSection />
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
