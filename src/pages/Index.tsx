import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import BetaSignup from '@/components/BetaSignup';
import Footer from '@/components/footer';   

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <BetaSignup />
      <Footer />
    </div>
  );
};

export default Index;
