import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-gray-200 p-8">
      <Link to="/" className="inline-block mb-8 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
        ← Back to Pampiri
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-center">📞 Contact Us</h1>
      <p className="text-center mb-12 text-lg">Get in touch with our team - we'd love to hear from you!</p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p>privacy@pampiri.co.za</p>
                <p className="text-sm text-gray-400">For privacy and data protection inquiries</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p>+27 78 175 8732</p>
                <p className="text-sm text-gray-400">Available during business hours</p>
              </div>
              <div>
                <h3 className="font-semibold">Office</h3>
                <p>NexMotion Technologies</p>
                <p>Johannesburg, South Africa</p>
              </div>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Why Choose Pampiri?</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>AI-powered document processing</li>
              <li>99% accuracy on clear documents</li>
              <li>Multiple export formats</li>
              <li>Secure and encrypted storage</li>
              <li>POPIA compliant data handling</li>
            </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 rounded bg-gray-800 text-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium">Subject *</label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-800 text-white"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="billing">Billing Question</option>
              <option value="privacy">Privacy Concern</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message *</label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 rounded bg-gray-800 text-white"
              placeholder="Tell us how we can help you..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 py-3 rounded text-white font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          <p className="text-center text-gray-400 text-sm mt-2">
            We typically respond within 24 hours during business days.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Contact;
