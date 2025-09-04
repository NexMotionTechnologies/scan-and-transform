# EmailJS Template Content

## Template Configuration (for service_qetzx6m, template_ail6snb)

### Subject Line:
```
{{welcome_message}} - {{app_name}} Beta Access
```

### Email Body (HTML):
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{welcome_message}}</title>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f4f6f9; }
        .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #007cba 0%, #005a8b 100%); color: white; padding: 40px 30px; text-align: center; }
        .logo { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
        .header-subtitle { opacity: 0.9; font-size: 18px; }
        .content { padding: 40px 30px; }
        .welcome-badge { display: inline-block; background: #e8f5e8; color: #2d5016; padding: 8px 16px; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #007cba; font-size: 20px; margin-bottom: 15px; }
        .benefits { background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 20px 0; }
        .benefits li { margin-bottom: 8px; }
        .cta-box { background: #007cba; color: white; padding: 25px; text-align: center; border-radius: 8px; margin: 25px 0; }
        .cta-text { font-size: 16px; font-weight: 600; margin-bottom: 10px; }
        .next-steps { background: #fff3cd; border-left: 4px solid #ffc107; padding: 20px; margin: 20px 0; }
        .footer { background: #f8f9fa; padding: 30px; text-align: center; color: #666; border-top: 1px solid #eee; }
        .footer-links { margin-top: 15px; }
        .footer-links a { color: #007cba; text-decoration: none; margin: 0 10px; }
        @media (max-width: 600px) {
            .container { margin: 0 10px; }
            .header, .content { padding: 30px 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">{{app_name}}</div>
            <div class="header-subtitle">Scan. Extract. Simplify.</div>
        </div>

        <!-- Content -->
        <div class="content">
            <div class="welcome-badge">🎉 Beta Access Confirmed</div>
            
            <h1>Hi {{to_name}},</h1>
            
            <p style="font-size: 18px; color: #007cba; font-weight: 600;">{{welcome_message}}</p>
            
            <p>Thank you for signing up for the {{app_name}} beta program on {{signup_date}}. We're thrilled to have you join our community of early adopters!</p>

            <!-- App Description -->
            <div class="section">
                <h2>🚀 About {{app_name}}</h2>
                <p>{{app_description}}</p>
            </div>

            <!-- Next Steps -->
            <div class="next-steps">
                <h3 style="margin-top: 0; color: #856404;">📅 What Happens Next?</h3>
                <p style="margin-bottom: 0;">{{next_steps}}</p>
                <p style="margin-bottom: 0; font-weight: 600;">{{download_expectation}}</p>
            </div>

            <!-- Benefits -->
            <div class="benefits">
                <h3 style="margin-top: 0;">🎯 Your Beta Benefits:</h3>
                <div style="white-space: pre-line;">{{beta_benefits}}</div>
            </div>

            <!-- CTA Box -->
            <div class="cta-box">
                <div class="cta-text">🔔 Stay Connected</div>
                <p style="margin: 0;">We'll send your download link to: <strong>{{user_email}}</strong></p>
            </div>

            <!-- Support -->
            <div class="section">
                <h2>💬 Need Help?</h2>
                <p>Our team is here to help! Reach out to us at <strong>{{support_email}}</strong> for any questions or feedback.</p>
            </div>

            <!-- Signature -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
                <p>Best regards,<br>
                <strong>The {{app_name}} Team</strong><br>
                {{company}}</p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>This email was sent to {{user_email}} because you signed up for {{app_name}} beta access.</p>
            <div class="footer-links">
                <a href="{{website_url}}">Visit Website</a> | 
                <a href="mailto:{{support_email}}">Contact Support</a> | 
                <a href="{{website_url}}/privacy-policy">Privacy Policy</a>
            </div>
            <p style="font-size: 12px; margin-top: 15px;">© 2025 {{company}}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

### Text Version (Plain Text):
```
{{welcome_message}} - {{app_name}}

Hi {{to_name}},

{{welcome_message}}

Thank you for signing up for the {{app_name}} beta program on {{signup_date}}. We're thrilled to have you join our community of early adopters!

🚀 About {{app_name}}:
{{app_description}}

📅 What Happens Next?
{{next_steps}}
{{download_expectation}}

🎯 Your Beta Benefits:
{{beta_benefits}}

🔔 Stay Connected
We'll send your download link to: {{user_email}}

💬 Need Help?
Our team is here to help! Reach out to us at {{support_email}} for any questions or feedback.

Best regards,
The {{app_name}} Team
{{company}}

---
Visit us at: {{website_url}}
Contact: {{support_email}}
Privacy Policy: {{website_url}}/privacy-policy

© 2025 {{company}}. All rights reserved.
```

## Template Variables Used:
- {{user_email}} - The recipient's email address
- {{to_name}} - Name extracted from email (before @)
- {{from_name}} - Sender name: "Pampiri Team"
- {{app_name}} - Application name: "Pampiri"
- {{company}} - Company name: "NexMotion Technologies"
- {{website_url}} - Website URL: "https://mypampiri.co.za"
- {{support_email}} - Support email: "support@mypampiri.co.za"
- {{signup_date}} - Date of signup
- {{welcome_message}} - Welcome message
- {{next_steps}} - What happens next explanation
- {{app_description}} - App description text
- {{beta_benefits}} - List of beta benefits
- {{download_expectation}} - Download timeline expectations

## Setup Instructions:

### IMPORTANT: Fix Email Recipients Issue
The "recipients address is empty" error means your EmailJS template isn't configured with the correct recipient field.

1. **Log into EmailJS Dashboard**: https://www.emailjs.com
2. **Go to Email Templates**: Find template `template_ail6snb`
3. **Configure Template Settings**:
   - **To Email**: Set to `{{to_email}}` or `{{email}}`
   - **Reply To**: Set to `{{reply_to}}`  
   - **From Name**: Set to `{{from_name}}`
4. **Template Content**: Replace with the HTML version above
5. **Subject Line**: Set to `{{welcome_message}} - {{app_name}} Beta Access`

### Critical Template Configuration:
In your EmailJS template settings, make sure these fields are set:
- **To**: `{{to_email}}`
- **From Name**: `{{from_name}}`
- **Reply To**: `{{reply_to}}`
- **Subject**: `{{welcome_message}} - {{app_name}} Beta Access`

### Test Steps:
1. Save template configuration
2. Test with the debug button on your landing page at http://localhost:8081
3. Check EmailJS events dashboard for success