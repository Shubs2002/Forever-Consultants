# EmailJS Setup Guide

This project uses EmailJS to handle contact form submissions. Follow these steps to set it up:

## 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Add an Email Service

1. Go to the [Email Services](https://dashboard.emailjs.com/admin/integration) page
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (you'll need this later)

## 3. Create Email Templates

You need to create TWO templates:

### Template 1: Admin Notification (to receive contact form submissions)

1. Go to the [Email Templates](https://dashboard.emailjs.com/admin/templates) page
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New Contact Request from {{name}}

**Body:**
```
New contact form submission from Forever Consultants website:

Name: {{name}}
Email: {{email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from the Forever Consultants contact form.
```

4. Save the template and copy the **Template ID**

### Template 2: Auto-Reply (to send thank you to users)

1. Click "Create New Template" again
2. Use this template structure:

**To Email:** {{to_email}}

**Subject:** Thank You for Contacting Forever Consultants

**Body:**
```
Dear {{to_name}},

Thank you for reaching out to Forever Consultants!

We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24 hours.

In the meantime, feel free to explore our services:
- LIC Insurance & Life Protection
- Mutual Funds & Wealth Creation
- Health Insurance & Mediclaim

If you have any urgent questions, please don't hesitate to call us at:
Nitin: +91 9769660363
Sujata: +91 8087907776

Best regards,
Forever Consultants Team
Securing Your Future, Forever.

---
This is an automated response. Please do not reply to this email.
```

3. **IMPORTANT:** In the template settings, make sure to set:
   - **To Email:** Use the variable `{{to_email}}`
   - This ensures the auto-reply goes to the user's email

4. Save the template and copy the **Auto-Reply Template ID**

## 4. Get Your Public Key

1. Go to [Account Settings](https://dashboard.emailjs.com/admin/account)
2. Find your **Public Key** (also called API Key)
3. Copy it

## 5. Configure Environment Variables

1. Open the `.env.local` file in the project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_admin_template_id_here
NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Note:** The auto-reply template is optional. If you don't want to send auto-replies, you can leave `NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID` empty.

## 6. Test the Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/contact` page
3. Fill out and submit the form
4. Check your email inbox for the message

## Template Variables

### Admin Notification Template:
- `{{name}}` - User's full name
- `{{email}}` - User's email address
- `{{phone}}` - User's phone number
- `{{message}}` - User's message

### Auto-Reply Template:
- `{{to_email}}` - User's email (used in "To Email" field)
- `{{to_name}}` - User's name for personalization
- `{{user_name}}` - Alternative variable for user's name

Make sure your EmailJS templates include these variables to receive all the form data.

## Troubleshooting

### Form not sending?
- Check that all environment variables are set correctly
- Verify your EmailJS service is active
- Check browser console for error messages
- Ensure your EmailJS account has remaining email quota

### Not receiving emails?
- Check your spam folder
- Verify the email address in your EmailJS service settings
- Test the template directly in EmailJS dashboard

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

For higher volume, consider upgrading to a paid plan.
