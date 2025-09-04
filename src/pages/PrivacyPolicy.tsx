import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, FileText, Clock, AlertTriangle, CheckCircle, Target, User, CreditCard, Settings, BarChart3, Phone, Mail, Building } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const showTab = (tabName: 'terms' | 'privacy') => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 container mx-auto px-4 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Pampiri
          </Link>

          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Legal Information</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your rights, our responsibilities, and how we protect your data
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            variant={activeTab === 'terms' ? 'default' : 'outline'}
            onClick={() => showTab('terms')}
            className="flex items-center gap-2 px-6 py-3"
          >
            <FileText className="w-5 h-5" />
            Terms & Conditions
          </Button>
          <Button
            variant={activeTab === 'privacy' ? 'default' : 'outline'}
            onClick={() => showTab('privacy')}
            className="flex items-center gap-2 px-6 py-3"
          >
            <Shield className="w-5 h-5" />
            Privacy Policy
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          
          {/* TERMS & CONDITIONS */}
          <div className={`${activeTab === 'terms' ? 'block' : 'hidden'} space-y-8`}>
            
            {/* Introduction */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Terms and Conditions
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                <strong className="text-foreground">Welcome to Pampiri!</strong> These terms explain how you can use our AI document processing app and what we expect from each other.
              </p>
              
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Quick Summary:</strong>
                    <p className="text-muted-foreground mt-1">By using Pampiri, you agree to use our service responsibly, pay any applicable fees, and follow these rules. We'll provide you with a reliable document processing service in return.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What is Pampiri */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                What is Pampiri?
              </h3>
              <p className="text-muted-foreground mb-4">Pampiri is a mobile app that transforms your physical documents into digital, editable formats using artificial intelligence. You can:</p>
              <ul className="space-y-2">
                {[
                  "Scan documents with your phone camera or upload files",
                  "Convert them to Word, Excel, CSV, or other formats",
                  "Save and organize your processed documents",
                  "Access premium features with a subscription"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account and Responsibilities */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <User className="w-6 h-6 text-secondary" />
                Your Account and Responsibilities
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Creating an Account:</h4>
                  <p className="text-muted-foreground">You need to provide accurate information when signing up and keep your login details secure.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You Can Do:</h4>
                  <ul className="space-y-2">
                    {[
                      "Process your own documents or documents you have permission to use",
                      "Download and save your processed files",
                      "Share results with others if needed for business purposes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">What You Cannot Do:</h4>
                  <ul className="space-y-2">
                    {[
                      "Upload illegal content, copyrighted material you don't own, or sensitive personal data of others",
                      "Try to hack, reverse-engineer, or misuse our service",
                      "Share your account with others or create fake accounts",
                      "Use our service for any illegal activities"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-accent" />
                Subscriptions and Payments
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-background border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Free Plan:</h4>
                  <p className="text-muted-foreground">Includes basic document processing with monthly limits.</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-4">
                  <h4 className="font-semibold text-foreground mb-2">Paid Plans:</h4>
                  <p className="text-muted-foreground">Unlock more features, higher limits, and priority processing.</p>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Payment Terms:</strong>
                    <ul className="mt-2 space-y-1">
                      {[
                        "Subscriptions auto-renew monthly or annually",
                        "You can cancel anytime from your account settings", 
                        "Refunds are handled according to app store policies",
                        "We may change pricing with 30 days' notice"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional sections with similar styling... */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                Our Service Commitment
              </h3>
              <p className="text-muted-foreground mb-4">We strive to provide:</p>
              <ul className="space-y-2">
                {[
                  "High-quality document processing (targeting 98% accuracy for clear documents)",
                  "Fast processing times (typically under 3 seconds per page)",
                  "Secure handling of your documents",
                  "Regular updates and improvements"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl mt-6">
                <strong className="text-foreground">Service Limitations:</strong>
                <p className="text-muted-foreground mt-1">While we work hard to provide excellent service, we cannot guarantee 100% uptime or perfect accuracy for all documents. Processing quality depends on document clarity and complexity.</p>
              </div>
            </div>
          </div>

          {/* PRIVACY POLICY */}
          <div className={`${activeTab === 'privacy' ? 'block' : 'hidden'} space-y-8`}>
            
            {/* Privacy Introduction */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Privacy Policy
              </h2>
              <p className="text-muted-foreground mb-6 text-lg">
                <strong className="text-foreground">Your privacy matters to us.</strong> This policy explains what information we collect, how we use it, and your rights under South Africa's Protection of Personal Information Act (POPIA).
              </p>
              
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">POPIA Compliance Statement:</strong>
                    <p className="text-muted-foreground mt-1">We are committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) and other applicable data protection laws.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Collection */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-secondary" />
                What Information We Collect
              </h3>
              
              <div className="grid gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Account Information:</h4>
                  <ul className="space-y-2">
                    {[
                      "Name and email address (for account creation)",
                      "Payment information (processed securely by Stripe/payment providers)",
                      "Subscription preferences and usage history"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Document Data:</h4>
                  <ul className="space-y-2">
                    {[
                      "Images and files you upload for processing",
                      "Processed text and formatted output", 
                      "Document metadata (file size, type, processing time)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                Data Protection Officer
              </h3>
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <p className="text-foreground font-semibold mb-4">For privacy-related questions or concerns:</p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <strong>privacy@pampiri.co.za</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-secondary" />
                    <strong>+27 78 175 8732</strong>
                  </p>
                  <p className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-accent" />
                    <strong>NexMotion Technologies</strong>
                  </p>
                  <p className="text-muted-foreground ml-6">Johannesburg, South Africa</p>
                </div>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl mt-6">
                <strong className="text-foreground">Complaints:</strong>
                <p className="text-muted-foreground mt-1">If you're not satisfied with how we handle your privacy concerns, you can lodge a complaint with the Information Regulator of South Africa at <strong>www.justice.gov.za/inforeg</strong></p>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-muted-foreground border-t border-border pt-8">
              <p>Last Updated: July 20, 2025</p>
              <p>Version: 1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;