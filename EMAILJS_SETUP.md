# 📧 EmailJS Setup Guide for Contact Form

This guide will help you set up the contact form to send emails directly to `subashs2573@gmail.com` without a backend server.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (recommended)
4. Follow the OAuth flow to connect your Gmail account
5. **Important**: Use the Gmail account that can send emails on behalf of your domain
6. Copy the **Service ID** (something like `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Set up your template:

```html
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Message: {{message}}

---
This message was sent from your portfolio contact form.
```

4. In the template settings:
   - **To Email**: `subashs2573@gmail.com`
   - **From Name**: `{{from_name}}`
   - **Reply To**: `{{from_email}}`
5. Copy the **Template ID** (something like `template_abc123`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (something like `abc123def456`)

### Step 5: Update Environment Variables
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_abc123
VITE_APP_EMAILJS_TEMPLATE_ID=template_abc123  
VITE_APP_EMAILJS_PUBLIC_KEY=abc123def456
```

### Step 6: Test the Setup
1. Restart your development server: `npm run dev`
2. Go to the contact section of your portfolio
3. Fill out the form and submit
4. Check `subashs2573@gmail.com` for the test email

## 📝 Template Variables
The form sends these variables to your email template:
- `{{from_name}}` - Visitor's name
- `{{from_email}}` - Visitor's email  
- `{{message}}` - Visitor's message

## ✅ Benefits
- ✨ **No Backend Required**: Pure frontend solution
- 🆓 **Free Tier**: 200 emails/month on free plan
- 🔒 **Secure**: No API keys exposed to frontend
- 📱 **Responsive**: Works on all devices
- 🎯 **Reliable**: Enterprise-grade email delivery

## 🔧 Troubleshooting

### Form shows "Email service not configured"
- Check that all environment variables are set correctly
- Restart your development server after updating `.env`
- Make sure values don't contain "your_*_here"

### Emails not being received
- Check spam folder in Gmail
- Verify the "To Email" in EmailJS template is correct
- Test with EmailJS dashboard test feature first

### "Service not found" error
- Double-check the Service ID in your `.env` file
- Make sure the email service is active in EmailJS dashboard

## 📞 Support
If you need help with setup, contact me at subashs2573@gmail.com