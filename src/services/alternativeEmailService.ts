import { BetaService } from './betaService';

export class AlternativeEmailService {
  // Option 1: Formspree with User Confirmation
  static async sendWithFormspree(email: string): Promise<void> {
    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_FORM_ID;

    if (!FORMSPREE_ENDPOINT) {
      throw new Error('Formspree form ID not configured');
    }

    // Send both admin notification and user confirmation
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        subject: 'New Beta Signup - Pampiri',
        message: `New beta signup from: ${email}\n\nPlease add this user to the beta testing list.`,

        // Admin notification settings
        _subject: 'New Pampiri Beta Signup',

        // User confirmation settings
        _replyto: email,
        _cc: email,

        // Auto-response to user (if enabled in Formspree settings)
        _autoresponse: 'Thank you for signing up for Pampiri beta! We\'ve received your request and will contact you soon with access details.',

        // Additional user data
        user_email: email,
        signup_date: new Date().toISOString(),
        source: 'landing-page-beta-signup'
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`Failed to send email via Formspree: ${errorData}`);
    }

    // Additional request to ensure user gets confirmation
    // This sends a direct confirmation email to the user
    await this.sendFormspreeUserConfirmation(email);
  }

  // Separate method for user confirmation email
  private static async sendFormspreeUserConfirmation(email: string): Promise<void> {
    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_FORM_ID;

    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _to: email,
          _subject: 'Welcome to Pampiri Beta!',
          message: `Hi there!\n\nThank you for signing up for the Pampiri beta program. We're excited to have you on board!\n\n🎯 What's Next?\n- We'll review your application\n- You'll receive download instructions within 2-3 business days\n- Look out for an email from the Pampiri team\n\n📱 About Pampiri:\nPampiri transforms your receipts into organized digital data using AI-powered scanning. Perfect for businesses, accountants, and anyone who wants to streamline their document management.\n\n🔗 Stay Connected:\n- Website: https://mypampiri.co.za\n- Support: support@mypampiri.co.za\n\nThanks again for joining our beta program!\n\nBest regards,\nThe Pampiri Team\nNexMotion Technologies`,

          _replyto: 'support@mypampiri.co.za',
          from_name: 'Pampiri Team',
          source: 'user-confirmation'
        }),
      });
    } catch (error) {
      // Don't throw error for confirmation email failure - admin notification already sent
      console.warn('Failed to send user confirmation via Formspree:', error);
    }
  }

  // Option 2: Netlify Forms (if deploying to Netlify)
  static async sendWithNetlifyForms(email: string): Promise<void> {
    const formData = new FormData();
    formData.append('form-name', 'beta-signup');
    formData.append('email', email);
    formData.append('subject', 'New Beta Signup');
    formData.append('message', `New beta signup from: ${email}`);

    const response = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
    });

    if (!response.ok) {
      throw new Error('Failed to send email via Netlify Forms');
    }
  }

  // Option 3: Web3Forms (Free alternative)
  static async sendWithWeb3Forms(email: string): Promise<void> {
    const API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

    if (!API_KEY) {
      throw new Error('Web3Forms API key not configured');
    }

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: API_KEY,
        email: email,
        subject: 'New Beta Signup - Pampiri',
        from_name: 'Pampiri Beta System',
        message: `New beta signup received from: ${email}\n\nPlease add this user to the beta testing list.`,
      }),
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error('Failed to send email via Web3Forms');
    }
  }

  // Option 4: EmailJS with better error handling (improved version)
  static async sendWithEmailJSImproved(email: string): Promise<void> {
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      throw new Error('EmailJS configuration incomplete');
    }

    // Dynamic import to handle potential loading issues
    const emailjs = await import('emailjs-com');

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

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS Success:', result);
    } catch (error: unknown) {
      console.error('EmailJS Error:', error);

      const err = error as { text?: string };
      // Provide more specific error messages
      if (err.text?.includes('template')) {
        throw new Error('Email template not found. Please check your EmailJS template ID.');
      } else if (err.text?.includes('service')) {
        throw new Error('Email service not configured. Please check your EmailJS service ID.');
      } else if (err.text?.includes('The public key is invalid')) {
        throw new Error('Invalid EmailJS public key. Please check your configuration.');
      } else {
        throw new Error(`Email sending failed: ${err.text || 'Unknown error'}`);
      }
    }
  }

  // Option 5: Custom webhook (for advanced users)
  static async sendWithWebhook(email: string): Promise<void> {
    const WEBHOOK_URL = import.meta.env.VITE_EMAIL_WEBHOOK_URL;

    if (!WEBHOOK_URL) {
      throw new Error('Webhook URL not configured');
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        timestamp: new Date().toISOString(),
        source: 'pampiri-beta-signup',
        message: `New beta signup from: ${email}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send webhook notification');
    }
  }

  // Main method to try multiple services with fallback
  static async sendBetaSignupEmail(email: string): Promise<void> {
    const services = [
      { name: 'EmailJS', method: () => this.sendWithEmailJSImproved(email) },
      { name: 'Web3Forms', method: () => this.sendWithWeb3Forms(email) },
      { name: 'Formspree', method: () => this.sendWithFormspree(email) },
    ];

    let lastError: Error | null = null;

    for (const service of services) {
      try {
        console.log(`Trying ${service.name}...`);
        await service.method();
        console.log(`✅ ${service.name} succeeded`);
        return; // Success, exit
      } catch (error) {
        console.warn(`❌ ${service.name} failed:`, error);
        lastError = error as Error;
        continue; // Try next service
      }
    }

    // If all services fail, throw the last error
    throw new Error(`All email services failed. Last error: ${lastError?.message}`);
  }
}
