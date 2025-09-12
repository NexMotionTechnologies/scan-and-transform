import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, FileText, Clock, AlertTriangle, CheckCircle, Target, User, CreditCard, Settings, BarChart3, Phone, Mail, Building, Download } from 'lucide-react';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const showTab = (tabName: 'terms' | 'privacy') => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadPDF = (fileName: string, displayName: string) => {
    try {
      // Create a link element and trigger download from public assets
      const link = document.createElement('a');
      link.href = `./assets/${fileName}`;
      link.download = displayName;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      // Fallback: open in new tab
      window.open(`./assets/${fileName}`, '_blank');
    }
  };

  const pdfForms = [
    {
      fileName: "FORM-1-OBJECTION-TO-THE-PROCESSING-OF-PERSONAL-INFORMATION 1.pdf",
      displayName: "FORM-1-Objection-to-Processing-Personal-Information.pdf",
      title: "Form 1: Objection to Processing of Personal Information",
      description: "Use this form to object to the processing of your personal information under POPIA."
    },
    {
      fileName: "FORM-2-REQUEST-FOR-CORRECTION-OR-DELETION-OF-PERSONAL-INFORMATION-OR (1).pdf",
      displayName: "FORM-2-Request-for-Correction-or-Deletion.pdf",
      title: "Form 2: Request for Correction or Deletion of Personal Information",
      description: "Request corrections to inaccurate personal information or deletion when no longer necessary."
    },
    {
      fileName: "FORM-5-COMPLAINT-REGARDING-INTERFERENCE-WITH-THE-PROTECTION-OF-AN-ADJUDICATOR (1).pdf",
      displayName: "FORM-5-Complaint-Regarding-Interference.pdf",
      title: "Form 5: Complaint Regarding Interference with Protection of an Adjudicator",
      description: "Lodge a complaint regarding interference with the protection of personal information."
    },
    {
      fileName: "InfoRegSA-PAIA-Form02-Reg7 (1).pdf",
      displayName: "InfoRegSA-PAIA-Form02-Reg7.pdf",
      title: "PAIA Form 02 (Regulation 7): Request for Access to Information",
      description: "Official form for requesting access to information under the Promotion of Access to Information Act (PAIA)."
    },
    {
      fileName: "PAIA-Manual-NMT-PAMPIRI-1-14.pdf",
      displayName: "PAIA-Manual-NMT-Pampiri.pdf",
      title: "PAIA Manual - NexMotion Technologies (Pampiri)",
      description: "Complete PAIA manual detailing information categories, request procedures, and contact information."
    }
  ];

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
            
            {/* Company Information Header */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                NexMotion Technologies - Comprehensive Privacy Policy
              </h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6 text-sm">
                <div><strong>Company Registration:</strong> 2025/227658/07</div>
                <div><strong>Trading As:</strong> Pampiri</div>
                <div><strong>Document Version:</strong> 2.1</div>
                <div><strong>Last Updated:</strong> September 12, 2025</div>
              </div>
              
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">POPIA Compliance Statement:</strong>
                    <p className="text-muted-foreground mt-1">Your privacy matters to us. This Privacy Policy explains how NexMotion Technologies ("we," "us," "our," or "Pampiri") collects, uses, processes, and protects your personal information in accordance with South Africa's Protection of Personal Information Act (POPIA) and other applicable data protection laws.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Table of Contents</h3>
              <div className="grid md:grid-cols-2 gap-2 text-sm">
                <div className="space-y-2">
                  <div>1. Company Information & Contact Details</div>
                  <div>2. Privacy Policy - Complete</div>
                  <div>3. PAIA Manual Integration</div>
                </div>
                <div className="space-y-2">
                  <div>4. Technical System Documentation</div>
                  <div>5. Legal Framework & Compliance</div>
                  <div>6. Downloadable Forms</div>
                </div>
              </div>
            </div>

            {/* Company Information & Contact Details */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Building className="w-6 h-6 text-primary" />
                1. Company Information & Contact Details
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Corporate Details</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div><strong>Company Name:</strong> NexMotion Technologies Pty (LTD)</div>
                    <div><strong>Registration Number:</strong> 2025/227658/07</div>
                    <div><strong>Trading Name:</strong> Pampiri</div>
                    <div><strong>Industry:</strong> Document Processing Technology Platform</div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <div><strong>Chief Information Officer:</strong> Casious Segeale Mookamedi</div>
                    <div><strong>Telephone:</strong> 0781758732 / 0685517535</div>
                    <div><strong>Email:</strong> info@nexmotiontechnologies.co.za / mookamedi@nexmotiontechnologies.co.za</div>
                    <div><strong>Support Email:</strong> support@mypampiri.co.za</div>
                    <div><strong>Compliance Email:</strong> compliance@mypampiri.co.za</div>
                    <div><strong>Websites:</strong> www.mypampiri.co.za / www.nexmotiontechnologies.co.za</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-foreground mb-4">PAIA Compliance Officers</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div><strong>Information Officer:</strong> Casious Segeale Mookamedi</div>
                  <div><strong>Deputy Information Officer:</strong> N/A</div>
                  <div><strong>Data Protection Officer:</strong> support@mypampiri.co.za</div>
                </div>
              </div>
            </div>

            {/* Legal Basis for Processing */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-secondary" />
                2. Legal Basis for Processing
              </h3>
              
              <p className="text-muted-foreground mb-4">We process your personal information based on the following lawful grounds under POPIA:</p>
              
              <div className="grid gap-4">
                <div className="bg-primary/5 p-4 rounded-xl">
                  <div className="font-semibold text-foreground">Consent</div>
                  <div className="text-muted-foreground">When you voluntarily provide information or consent to specific processing activities</div>
                </div>
                <div className="bg-secondary/5 p-4 rounded-xl">
                  <div className="font-semibold text-foreground">Contract Performance</div>
                  <div className="text-muted-foreground">To provide our document processing services as agreed in our Terms of Service</div>
                </div>
                <div className="bg-accent/5 p-4 rounded-xl">
                  <div className="font-semibold text-foreground">Legitimate Interests</div>
                  <div className="text-muted-foreground">For service improvement, security, fraud prevention, and business operations (where not overridden by your privacy interests)</div>
                </div>
                <div className="bg-muted/20 p-4 rounded-xl">
                  <div className="font-semibold text-foreground">Legal Obligations</div>
                  <div className="text-muted-foreground">To comply with applicable laws, regulations, and legal processes</div>
                </div>
              </div>
            </div>

            {/* Categories of Personal Information */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-primary" />
                3. Categories of Personal Information We Collect
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">3.1 Account and Profile Information</h4>
                  <ul className="space-y-2">
                    {[
                      "What we collect: Full name, email address, username, password (encrypted), phone number, company name, job title",
                      "How collected: Registration forms, account settings, profile updates",
                      "Legal basis: Contract performance, consent",
                      "Required/Optional: Name and email required; other information optional"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">3.2 Payment and Billing Information</h4>
                  <ul className="space-y-2">
                    {[
                      "What we collect: Credit card details, billing address, VAT number, payment history",
                      "How collected: Payment forms processed by our payment providers (Stripe & PayFast)",
                      "Legal basis: Contract performance",
                      "Required/Optional: Required for paid subscriptions"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">3.3 Document Data and Content</h4>
                  <ul className="space-y-2">
                    {[
                      "What we collect: Uploaded files and images (all formats), Document content and text extracted through processing, Document metadata (file size, type, creation date, processing timestamps), Processing results and formatted output",
                      "How collected: File uploads, document processing activities",
                      "Legal basis: Contract performance, consent",
                      "Required/Optional: Required for service functionality"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">3.4 Usage and Technical Information</h4>
                  <ul className="space-y-2">
                    {[
                      "What we collect: IP address, browser type, device information, operating system, Login times, feature usage, session duration, Error logs, performance data, crash reports, Cookies and similar tracking technologies",
                      "How collected: Automatic collection through our platform and analytics tools",
                      "Legal basis: Legitimate interests, consent (for non-essential cookies)",
                      "Required/Optional: Essential data collected automatically; analytics optional"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">3.5 Communications Data</h4>
                  <ul className="space-y-2">
                    {[
                      "What we collect: Support tickets, chat messages, email correspondence, feedback",
                      "How collected: Support forms, direct communications",
                      "Legal basis: Contract performance, legitimate interests",
                      "Required/Optional: Required when you contact us"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Rights Under POPIA */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-primary" />
                4. Your Rights Under POPIA
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Right of Access</h4>
                    <p className="text-muted-foreground text-sm">Request confirmation of personal information processing, receive copy of personal information held about you. Response time: 30 days maximum.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Right to Correction</h4>
                    <p className="text-muted-foreground text-sm">Request correction of inaccurate or incomplete information. Update account details directly through your profile.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Right to Deletion</h4>
                    <p className="text-muted-foreground text-sm">Request deletion of personal information when no longer necessary. Account closure triggers comprehensive data deletion.</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Right to Object</h4>
                    <p className="text-muted-foreground text-sm">Object to processing based on legitimate interests, opt-out of marketing communications, request restriction of certain processing activities.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Right to Data Portability</h4>
                    <p className="text-muted-foreground text-sm">Receive personal information in structured, machine-readable format. Transfer information to another service provider.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Right to Withdraw Consent</h4>
                    <p className="text-muted-foreground text-sm">Withdraw consent for any consent-based processing. Does not affect lawfulness of processing before withdrawal.</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl mt-6">
                <strong className="text-foreground">How to Exercise Your Rights:</strong>
                <p className="text-muted-foreground mt-1">Contact us at <strong>support@mypampiri.co.za</strong> with your request. We will respond within 30 days and verify your identity before processing any requests.</p>
              </div>
            </div>

            {/* Data Security Measures */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-6 h-6 text-accent" />
                5. Data Security Measures
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Technical Safeguards</h4>
                  <ul className="space-y-2">
                    {[
                      "Encryption: AES-256 encryption at rest, TLS 1.3 in transit",
                      "Access Controls: Multi-factor authentication, role-based permissions",
                      "Network Security: Firewalls, intrusion detection, VPN access",
                      "Monitoring: 24/7 security monitoring and incident response"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Organizational Measures</h4>
                  <ul className="space-y-2">
                    {[
                      "Regular security training for all employees",
                      "Background checks for personnel with data access",
                      "Confidentiality agreements and security policies",
                      "Regular security audits and penetration testing"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{item}</span>
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
                6. Contact Information & Complaints
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Data Protection Officer</h4>
                  <div className="bg-primary/5 rounded-xl p-6">
                    <div className="space-y-3 text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <strong>support@mypampiri.co.za</strong>
                      </p>
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-secondary" />
                        <strong>+27 78 175 8732</strong>
                      </p>
                      <p className="flex items-start gap-2">
                        <Building className="w-4 h-4 text-accent mt-1" />
                        <div>
                          <strong>NexMotion Technologies</strong><br />
                          <span className="text-sm">1188 Nkomanini, Tzaneen, Limpopo, 0870</span>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">External Complaints</h4>
                  <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-xl">
                    <strong className="text-foreground">Information Regulator of South Africa:</strong>
                    <div className="mt-2 space-y-1 text-muted-foreground text-sm">
                      <div><strong>Website:</strong> www.justice.gov.za/inforeg</div>
                      <div><strong>Email:</strong> inforeg@justice.gov.za</div>
                      <div><strong>Phone:</strong> +27 12 406 4818</div>
                      <div><strong>Address:</strong> JD House, 27 Stiemens Street, Braamfontein, Johannesburg, 2001</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloadable Forms */}
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Download className="w-6 h-6 text-secondary" />
                7. Downloadable Forms
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Download the official forms required for exercising your rights under POPIA and PAIA. All forms are provided in PDF format and can be printed, completed, and submitted as instructed.
              </p>

              <div className="grid gap-4">
                {pdfForms.map((form, index) => (
                  <div key={index} className="bg-background border border-border rounded-xl p-6 hover:bg-accent/5 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" />
                          {form.title}
                        </h4>
                        <p className="text-muted-foreground text-sm mb-3">{form.description}</p>
                      </div>
                      <Button
                        onClick={() => handleDownloadPDF(form.fileName, form.displayName)}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2 whitespace-nowrap"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-xl mt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-foreground">Important Notes:</strong>
                    <ul className="mt-2 space-y-1 text-muted-foreground text-sm">
                      <li>• Complete all required fields on the forms before submission</li>
                      <li>• Submit forms to the contact information provided in each document</li>
                      <li>• Keep copies of all submitted forms for your records</li>
                      <li>• Response times are specified within each form and governed by applicable legislation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-muted-foreground border-t border-border pt-8">
              <p className="mb-2"><strong>Document Control</strong></p>
              <p>Document Owner: Casious Segeale Mookamedi, CEO</p>
              <p>Last Updated: September 12, 2025 | Version: 2.1</p>
              <p>Next Review Date: September 12, 2026</p>
              <p className="mt-4 text-sm italic">This document combines privacy policy, PAIA manual, and technical documentation in compliance with South African data protection and access to information legislation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;