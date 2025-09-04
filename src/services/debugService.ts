export class DebugService {
  static logEnvironmentVariables() {
    console.log('🔍 Environment Variables Debug:');
    console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID ? '✅ Set' : '❌ Missing');
    console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID ? '✅ Set' : '❌ Missing');
    console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? '✅ Set' : '❌ Missing');

    console.log('\n📋 Actual Values (first 8 chars):');
    console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID?.substring(0, 8) + '...');
    console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.substring(0, 8) + '...');
    console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 8) + '...');
  }

  static async testEmailJSConnection() {
    console.log('🧪 Testing EmailJS Connection...');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('❌ EmailJS configuration incomplete');
      return false;
    }

    try {
      // Import EmailJS dynamically to test
      const emailjs = await import('emailjs-com');

      console.log('✅ EmailJS library loaded successfully');
      console.log('📧 Attempting to send test email...');

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: 'test@example.com',
          to_name: 'Test User',
          from_name: 'Pampiri Debug'
        },
        PUBLIC_KEY
      );

      console.log('✅ Email sent successfully:', result);
      return true;
    } catch (error) {
      console.error('❌ EmailJS test failed:', error);
      return false;
    }
  }
}
