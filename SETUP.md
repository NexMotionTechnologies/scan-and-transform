# Beta Subscription Setup Guide

## Overview
This guide will help you set up the beta subscription functionality for your Pampiri application. The implementation includes Firebase Firestore for data storage and EmailJS for sending confirmation emails.

## Prerequisites
- Node.js and npm installed
- Firebase project created
- EmailJS account

## Configuration Steps

### 1. Firebase Setup
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use an existing one
3. Enable Firestore Database:
   - Go to Firestore Database in the left sidebar
   - Click "Create database"
   - Choose "Start in test mode" for development
4. Get your Firebase configuration:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click "Add app" if you don't have a web app
   - Copy the configuration object

### 2. Email Service Setup (Choose One)

#### Option A: Web3Forms (Recommended - Free & Easy)
1. Go to [Web3Forms](https://web3forms.com/)
2. Create a free account
3. Get your Access Key from the dashboard
4. No additional setup needed!

#### Option B: Formspree
1. Go to [Formspree](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy the form endpoint ID

#### Option C: Netlify Forms (If deploying to Netlify)
1. Deploy your site to Netlify
2. Add a hidden form with `netlify` attribute
3. Forms will be automatically configured

#### Option D: EmailJS (Advanced)
1. Go to [EmailJS](https://www.emailjs.com/)
2. Create an account and sign in
3. Add a new email service:
   - Go to Email Services
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
4. Create an email template:
   - Go to Email Templates
   - Create a new template with the following content:
     ```
     Subject: Welcome to Pampiri Beta! 🎉

     Hi {{user_email}},

     Thank you for signing up for Pampiri Beta! We're excited to have you join our community of early adopters.

     Your beta access request has been received and is being processed. You'll receive an email with access instructions within the next 24-48 hours.

     In the meantime, you can:
     - Follow us on social media for updates
     - Join our Discord community
     - Check out our documentation

     Best regards,
     The Pampiri Team
     ```
5. Note down your Service ID, Template ID, and Public Key

### 3. Environment Variables
Update your `.env` file with the actual values:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_actual_messaging_sender_id
VITE_FIREBASE_APP_ID=your_actual_app_id

# Email Service Configuration (Choose ONE)
# For Web3Forms:
VITE_WEB3FORMS_API_KEY=your_web3forms_access_key

# For Formspree:
VITE_FORMSPREE_FORM_ID=your_formspree_form_id

# For EmailJS:
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key

# For Custom Webhook:
VITE_EMAIL_WEBHOOK_URL=https://your-webhook-endpoint.com/email
```

### 4. Firebase Security Rules (Optional)
For production, update your Firestore security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /beta_signups/{document} {
      allow create: if request.auth != null || true; // Allow anonymous signups
      allow read, update, delete: if request.auth != null && request.auth.token.email in ['your-admin-email@example.com'];
    }
  }
}
```

## Testing the Implementation

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Test the Beta Signup Form
1. Navigate to the page with the BetaSignup component
2. Enter a valid email address
3. Submit the form
4. Check that:
   - A success toast appears
   - The email is saved to Firebase Firestore
   - A confirmation email is sent (check your email)

### 3. Verify Firebase Data
1. Go to Firebase Console
2. Navigate to Firestore Database
3. Check the `beta_signups` collection for new documents

## Troubleshooting

### Common Issues

1. **Firebase connection errors**
   - Check that your Firebase configuration is correct
   - Ensure Firestore is enabled in your Firebase project
   - Verify that your environment variables are loaded correctly

2. **EmailJS errors**
   - Check that your EmailJS service is properly configured
   - Verify that your template ID and service ID are correct
   - Ensure your email service is active

3. **Environment variables not loading**
   - Make sure your `.env` file is in the root directory
   - Restart your development server after adding new variables
   - Check that variable names match exactly (case-sensitive)

### Debug Mode
Add console logs to check if services are working:

```javascript
// In BetaSignup component
console.log('Firebase config:', import.meta.env.VITE_FIREBASE_API_KEY);
console.log('EmailJS config:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
```

## Production Deployment

### 1. Update Firebase Security Rules
For production, restrict Firestore access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /beta_signups/{document} {
      allow create: if true; // Allow anonymous signups
      allow read, update, delete: if false; // Restrict admin access
    }
  }
}
```

### 2. Environment Variables
Make sure to set environment variables in your hosting platform (Vercel, Netlify, etc.).

### 3. Email Template Updates
Update the EmailJS template with production-ready content and branding.

## Support
If you encounter any issues:
1. Check the browser console for error messages
2. Verify all configuration steps are completed
3. Test with the demo values first
4. Check Firebase and EmailJS dashboards for any service issues

## Next Steps
- Monitor beta signups in Firebase
- Set up automated email sequences
- Create admin dashboard for managing beta users
- Implement user authentication for beta access
