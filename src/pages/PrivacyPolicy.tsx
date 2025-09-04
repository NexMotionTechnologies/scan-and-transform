import { useState } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy'>('terms');

  const showTab = (tabName: 'terms' | 'privacy') => {
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(135deg, #36546dff 0%, #545c74ff 50%, #634f92ff 100%)',
      color: '#e0e0e0',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      minHeight: '100vh',
      padding: '2rem'
    }}>
      <Link 
        to="/" 
        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full mb-8 hover:bg-blue-700 transition-colors"
        style={{ textDecoration: 'none' }}
      >
        ← Back to Pampiri
      </Link>
      
      <div className="text-center mb-12 py-8 border-b-2 border-blue-500">
        <h1 className="text-4xl font-bold text-blue-400 mb-4">📋 Legal Information</h1>
        <p className="text-xl text-gray-300">Your rights, our responsibilities, and how we protect your data</p>
      </div>

      <div className="flex justify-center mb-8 gap-4 flex-wrap">
        <button 
          className={`px-8 py-4 rounded-full border-2 border-blue-500 font-semibold transition-all ${
            activeTab === 'terms' 
              ? 'bg-blue-500 text-white' 
              : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white'
          }`}
          onClick={() => showTab('terms')}
        >
          📜 Terms & Conditions
        </button>
        <button 
          className={`px-8 py-4 rounded-full border-2 border-blue-500 font-semibold transition-all ${
            activeTab === 'privacy' 
              ? 'bg-blue-500 text-white' 
              : 'bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white'
          }`}
          onClick={() => showTab('privacy')}
        >
          🔒 Privacy Policy
        </button>
      </div>

      {/* TERMS & CONDITIONS */}
      <div className={`${activeTab === 'terms' ? 'block' : 'hidden'} animate-fadeIn`}>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-2">📜 Terms and Conditions</h2>
          <p className="mb-4 text-gray-300">
            <strong>Welcome to Pampiri!</strong> These terms explain how you can use our AI document processing app and what we expect from each other.
          </p>
          
          <div className="bg-green-500/10 border-l-4 border-green-400 p-4 my-4 rounded-r-lg">
            <strong>Quick Summary:</strong> By using Pampiri, you agree to use our service responsibly, pay any applicable fees, and follow these rules. We'll provide you with a reliable document processing service in return.
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🎯 What is Pampiri?</h3>
          <p className="mb-4 text-gray-300">Pampiri is a mobile app that transforms your physical documents into digital, editable formats using artificial intelligence. You can:</p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Scan documents with your phone camera or upload files</li>
            <li>Convert them to Word, Excel, CSV, or other formats</li>
            <li>Save and organize your processed documents</li>
            <li>Access premium features with a subscription</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">👤 Your Account and Responsibilities</h3>
          <p className="mb-4 text-gray-300"><strong>Creating an Account:</strong> You need to provide accurate information when signing up and keep your login details secure.</p>
          
          <p className="mb-4 text-gray-300"><strong>What You Can Do:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Process your own documents or documents you have permission to use</li>
            <li>Download and save your processed files</li>
            <li>Share results with others if needed for business purposes</li>
          </ul>

          <p className="mb-4 text-gray-300"><strong>What You Cannot Do:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Upload illegal content, copyrighted material you don't own, or sensitive personal data of others</li>
            <li>Try to hack, reverse-engineer, or misuse our service</li>
            <li>Share your account with others or create fake accounts</li>
            <li>Use our service for any illegal activities</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">💳 Subscriptions and Payments</h3>
          <p className="mb-4 text-gray-300"><strong>Free Plan:</strong> Includes basic document processing with monthly limits.</p>
          <p className="mb-4 text-gray-300"><strong>Paid Plans:</strong> Unlock more features, higher limits, and priority processing.</p>
          
          <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
            <strong>Payment Terms:</strong>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Subscriptions auto-renew monthly or annually</li>
              <li>You can cancel anytime from your account settings</li>
              <li>Refunds are handled according to app store policies</li>
              <li>We may change pricing with 30 days' notice</li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🔧 Our Service Commitment</h3>
          <p className="mb-4 text-gray-300">We strive to provide:</p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>High-quality document processing (targeting 98% accuracy for clear documents)</li>
            <li>Fast processing times (typically under 3 seconds per page)</li>
            <li>Secure handling of your documents</li>
            <li>Regular updates and improvements</li>
          </ul>

          <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
            <strong>Service Limitations:</strong> While we work hard to provide excellent service, we cannot guarantee 100% uptime or perfect accuracy for all documents. Processing quality depends on document clarity and complexity.
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🛡️ Intellectual Property</h3>
          <p className="mb-4 text-gray-300"><strong>Your Content:</strong> You own the documents you upload and the processed results. We don't claim ownership of your content.</p>
          <p className="mb-4 text-gray-300"><strong>Our Technology:</strong> Pampiri's software, AI models, and technology are owned by NexMotion Technologies.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">⚖️ Liability and Disputes</h3>
          <p className="mb-4 text-gray-300">We're committed to providing good service, but please understand:</p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Use Pampiri at your own risk for business-critical documents</li>
            <li>Always review processed documents before using them for important purposes</li>
            <li>We're not responsible for decisions you make based on processed content</li>
            <li>Any disputes will be resolved under South African law</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🔄 Changes to These Terms</h3>
          <p className="mb-4 text-gray-300">We may update these terms occasionally to reflect new features or legal requirements. We'll notify you of significant changes through the app or email.</p>
        </div>
      </div>

      {/* PRIVACY POLICY */}
      <div className={`${activeTab === 'privacy' ? 'block' : 'hidden'} animate-fadeIn`}>
        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center gap-2">🔒 Privacy Policy</h2>
          <p className="mb-4 text-gray-300">
            <strong>Your privacy matters to us.</strong> This policy explains what information we collect, how we use it, and your rights under South Africa's Protection of Personal Information Act (POPIA).
          </p>
          
          <div className="bg-green-500/10 border-l-4 border-green-400 p-4 my-4 rounded-r-lg">
            <strong>POPIA Compliance Statement:</strong> We are committed to protecting your personal information in accordance with the Protection of Personal Information Act (POPIA) and other applicable data protection laws.
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">📊 What Information We Collect</h3>
          
          <p className="mb-4 text-gray-300"><strong>Account Information:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Name and email address (for account creation)</li>
            <li>Payment information (processed securely by Stripe/payment providers)</li>
            <li>Subscription preferences and usage history</li>
          </ul>

          <p className="mb-4 text-gray-300"><strong>Document Data:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Images and files you upload for processing</li>
            <li>Processed text and formatted output</li>
            <li>Document metadata (file size, type, processing time)</li>
          </ul>

          <p className="mb-4 text-gray-300"><strong>Technical Information:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Device type, operating system, and app version</li>
            <li>Usage analytics (features used, error reports)</li>
            <li>Performance data to improve our service</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🎯 How We Use Your Information</h3>
          
          <p className="mb-4 text-gray-300"><strong>Primary Purposes:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Process your documents using AI and OCR technology</li>
            <li>Manage your account and subscription</li>
            <li>Provide customer support</li>
            <li>Improve our AI accuracy and app features</li>
          </ul>

          <p className="mb-4 text-gray-300"><strong>Legal Basis (POPIA Compliance):</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li><strong>Contract Performance:</strong> Processing documents as part of our service agreement</li>
            <li><strong>Legitimate Interest:</strong> Improving our AI models and app performance</li>
            <li><strong>Consent:</strong> Marketing communications (only with your permission)</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🔐 How We Protect Your Data</h3>
          
          <p className="mb-4 text-gray-300"><strong>Security Measures:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
            <li><strong>Secure Cloud Storage:</strong> We use Google Firebase with enterprise-grade security</li>
            <li><strong>Access Controls:</strong> Only authorized personnel can access user data</li>
            <li><strong>Regular Security Audits:</strong> We continuously monitor and improve our security</li>
          </ul>

          <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
            <strong>Document Retention:</strong> Your processed documents are stored securely and can be deleted from your account settings at any time. We automatically delete inactive accounts after 24 months.
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🌐 Data Sharing and Third Parties</h3>
          
          <p className="mb-4 text-gray-300"><strong>AI Processing Partners:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li><strong>Google Vision API:</strong> For optical character recognition (OCR)</li>
            <li><strong>DeepSeek AI:</strong> For intelligent document structuring and formatting</li>
            <li><strong>Firebase:</strong> For secure data storage and user authentication</li>
          </ul>

          <p><strong>We Never:</strong></p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>Sell your personal information to third parties</li>
            <li>Use your documents for marketing or advertising</li>
            <li>Share your content with competitors</li>
            <li>Access your documents unless you request support</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🏠 Data Location and International Transfers</h3>
          <p className="mb-4 text-gray-300">Your data is primarily stored in Google Cloud servers. While these servers may be located in various countries, we ensure:</p>
          <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
            <li>All transfers comply with POPIA requirements</li>
            <li>Appropriate safeguards are in place</li>
            <li>Data is processed according to South African privacy standards</li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">👤 Your Rights Under POPIA</h3>
          
          <div className="bg-green-500/10 border-l-4 border-green-400 p-4 my-4 rounded-r-lg">
            <strong>You have the right to:</strong>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Ask us to correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Get your data in a portable format</li>
              <li><strong>Object:</strong> Object to certain types of processing</li>
              <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing or optional features</li>
            </ul>
          </div>

          <p className="mb-4 text-gray-300">To exercise these rights: Contact us at <strong>privacy@pampiri.co.za</strong> or use the data controls in your app settings.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">👶 Children's Privacy</h3>
          <p className="mb-4 text-gray-300">Pampiri is not intended for children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">🔄 Policy Updates</h3>
          <p className="mb-4 text-gray-300">We may update this privacy policy to reflect changes in our practices or legal requirements. We'll notify you of significant changes and ask for your consent where required by law.</p>
        </div>

        <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 mb-8 border border-blue-500/20">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">📞 Data Protection Officer</h3>
          <div className="bg-blue-500/10 rounded-lg p-6 text-center">
            <p><strong>For privacy-related questions or concerns:</strong></p>
            <p>📧 <strong>privacy@pampiri.co.za</strong></p>
            <p>📞 <strong>+27 78 175 8732</strong></p>
            <p>🏢 <strong>NexMotion Technologies</strong><br />Johannesburg, South Africa</p>
          </div>

          <div className="bg-yellow-500/10 border-l-4 border-yellow-400 p-4 my-4 rounded-r-lg">
            <strong>Complaints:</strong> If you're not satisfied with how we handle your privacy concerns, you can lodge a complaint with the Information Regulator of South Africa at <strong>www.justice.gov.za/inforeg</strong>
          </div>
        </div>

        <div className="text-center text-gray-500 italic mt-8 pt-8 border-t border-blue-500/20">
          <p>Last Updated: July 20, 2025</p>
          <p>Version: 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

