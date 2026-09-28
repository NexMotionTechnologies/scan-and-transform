import { useSeo } from '@/hooks/use-seo';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Transformation from '@/components/Transformation';
import Personas from '@/components/Personas';
import Features from '@/components/Features';
import InvoiceSpotlight from '@/components/InvoiceSpotlight';
import Pricing from '@/components/Pricing';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/ScrollToTop';
import CookieConsent from '@/components/CookieConsent';

const Index = () => {
  useSeo({
    title: 'Pampiri – AI Receipt Scanner for South Africa | Scan, Extract, Simplify',
    description:
      "Turn receipts into organised data in seconds with AI. Built for gig drivers, small businesses & fleets across South Africa. Free on Google Play, now in beta on iPhone via TestFlight.",
    path: '/',
  });

  return (
    <div className="min-h-screen" style={{ background: 'hsl(225, 35%, 6%)' }}>
      <Hero />
      <HowItWorks />
      <Transformation />
      <Personas />
      <Features />
      <InvoiceSpotlight />
      <Pricing />
      <DownloadSection />
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Index;
