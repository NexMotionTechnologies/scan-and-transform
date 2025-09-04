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
      user_email: email,
      to_name: email, // Add this if your template uses it
      from_name: 'Pampiri Team', // Add this if your template uses it
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