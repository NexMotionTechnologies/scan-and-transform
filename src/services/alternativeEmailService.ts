import { BetaService } from './betaService';

export class AlternativeEmailService {
  // Option 1: Formspree (Simplest)
  static async sendWithFormspree(email: string): Promise<void> {
    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_FORM_ID;

    if (!FORMSPREE_ENDPOINT) {
      throw new Error('Formspree form ID not configured');
    }

    const response = await fetch(`https://formspree.io/f/${FORMSPREE_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        subject: 'New Beta Signup',
        message: `New beta signup from: ${email}`,
        _subject: 'Pampiri Beta Signup Notification'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email via Formspree');
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
      body: new URLSearchParams(formData as any).toString(),
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
      user_email: email,
      to_name: email.split('@')[0], // Extract name from email
      from_name: 'Pampiri Team',
      signup_date: new Date().toLocaleDateString(),
    };

    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS Success:', result);
    } catch (error: any) {
      console.error('EmailJS Error:', error);

      // Provide more specific error messages
      if (error?.text?.includes('template')) {
        throw new Error('Email template not found. Please check your EmailJS template ID.');
      } else if (error?.text?.includes('service')) {
        throw new Error('Email service not configured. Please check your EmailJS service ID.');
      } else if (error?.text?.includes('The public key is invalid')) {
        throw new Error('Invalid EmailJS public key. Please check your configuration.');
      } else {
        throw new Error(`Email sending failed: ${error?.text || 'Unknown error'}`);
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
