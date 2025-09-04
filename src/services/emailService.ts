import emailjs from 'emailjs-com';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

export class EmailService {
  static async sendBetaSignupEmail(email: string): Promise<void> {
    // Debug logging
    console.log('EmailJS Config Check:', {
      hasServiceId: !!SERVICE_ID,
      hasTemplateId: !!TEMPLATE_ID,
      hasPublicKey: !!PUBLIC_KEY,
      serviceId: SERVICE_ID ? SERVICE_ID.substring(0, 8) + '...' : 'missing',
      templateId: TEMPLATE_ID ? TEMPLATE_ID.substring(0, 8) + '...' : 'missing',
      publicKey: PUBLIC_KEY ? PUBLIC_KEY.substring(0, 8) + '...' : 'missing'
    });

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const missing = [];
      if (!SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID');
      if (!TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID');
      if (!PUBLIC_KEY) missing.push('VITE_EMAILJS_PUBLIC_KEY');
      
      throw new Error(`EmailJS environment variables missing: ${missing.join(', ')}`);
    }

    const templateParams = {
      // EmailJS recipient parameters (multiple formats for compatibility)
      to_email: email,
      reply_to: email,
      email: email,
      user_email: email,
      
      // Template content parameters
      to_name: email.split('@')[0], // Extract name from email
      from_name: 'Pampiri Team',
      app_name: 'Pampiri',
      company: 'NexMotion Technologies',
      website_url: 'https://mypampiri.co.za',
      support_email: 'support@mypampiri.co.za',
      signup_date: new Date().toLocaleDateString(),
      welcome_message: 'Welcome to the Pampiri Beta Program!',
      next_steps: 'We\'ll review your application and send you download instructions within 2-3 business days.',
      app_description: 'Pampiri transforms your receipts into organized digital data using AI-powered scanning. Perfect for businesses, accountants, and anyone who wants to streamline their document management.',
      beta_benefits: [
        '🎯 Exclusive early access to all features',
        '💰 50% discount on your first year subscription', 
        '📞 Direct line to our development team',
        '🚀 Shape the future of receipt processing'
      ].join('\n'),
      download_expectation: 'Look out for an email from the Pampiri team with your beta download link within the next 2-3 business days.'
    };

    console.log('Sending email with params:', templateParams);

    try {
      const result = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log('EmailJS Success:', result);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      // More specific error handling
      if (error instanceof Error) {
        if (error.message.includes('template')) {
          throw new Error('Email template not found. Please check your template ID.');
        } else if (error.message.includes('service')) {
          throw new Error('Email service not found. Please check your service ID.');
        } else if (error.message.includes('public_key') || error.message.includes('user_id')) {
          throw new Error('Invalid public key. Please check your EmailJS public key.');
        }
      }
      
      throw new Error('Failed to send confirmation email. Please try again later.');
    }
  }
}