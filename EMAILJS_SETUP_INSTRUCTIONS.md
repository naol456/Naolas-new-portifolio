# 📧 EmailJS Setup Instructions for Naol Daniel

## ✅ Step 1: Create EmailJS Account (2 minutes)

1. **Go to:** https://www.emailjs.com/
2. **Click:** "Sign Up" button (top right)
3. **Sign up with:**
   - Email: danielnaol393@gmail.com
   - Or use Google Sign-in
4. **Verify your email** (check inbox)

---

## ✅ Step 2: Add Email Service (3 minutes)

1. **Login to EmailJS Dashboard:** https://dashboard.emailjs.com/
2. **Click:** "Email Services" in left sidebar
3. **Click:** "Add New Service" button
4. **Choose:** "Gmail" (or your email provider)
5. **Click:** "Connect Account"
6. **Login with:** danielnaol393@gmail.com
7. **Allow EmailJS** to send emails on your behalf
8. **Copy the Service ID** (looks like: `service_abc123`)
   - ⚠️ SAVE THIS! You'll need it later

**Your Service ID:** `_________________` (write it here)

---

## ✅ Step 3: Create Email Template (3 minutes)

1. **Click:** "Email Templates" in left sidebar
2. **Click:** "Create New Template" button
3. **Template Name:** "Portfolio Contact Form"
4. **Edit the template:**

### Subject Line:
```
New Contact from {{from_name}} - {{subject}}
```

### Email Content (Body):
```
Hello Naol,

You have received a new message from your portfolio website!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FROM:
Name: {{from_name}}
Email: {{from_email}}

SUBJECT:
{{subject}}

MESSAGE:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this person at: {{from_email}}

---
This message was sent from your portfolio contact form.
```

5. **To Email:** danielnaol393@gmail.com (should be pre-filled)
6. **From Name:** {{from_name}}
7. **Reply To:** {{from_email}}
8. **Click:** "Save" button
9. **Copy the Template ID** (looks like: `template_xyz789`)
   - ⚠️ SAVE THIS! You'll need it later

**Your Template ID:** `_________________` (write it here)

---

## ✅ Step 4: Get Your Public Key (1 minute)

1. **Click:** "Account" in left sidebar
2. **Click:** "General" tab
3. **Find:** "Public Key" section
4. **Copy the Public Key** (looks like: `abcdefghijk123`)
   - ⚠️ SAVE THIS! You'll need it later

**Your Public Key:** `_________________` (write it here)

---

## ✅ Step 5: Update Your Code (2 minutes)

1. **Open:** `src/components/Contact.js`
2. **Find these lines** (around line 40):

```javascript
const serviceID = 'YOUR_SERVICE_ID';      // e.g., 'service_abc123'
const templateID = 'YOUR_TEMPLATE_ID';    // e.g., 'template_xyz789'
const publicKey = 'YOUR_PUBLIC_KEY';      // e.g., 'abcdefghijk123'
```

3. **Replace with YOUR actual IDs:**

```javascript
const serviceID = 'service_abc123';      // ← Your Service ID from Step 2
const templateID = 'template_xyz789';    // ← Your Template ID from Step 3
const publicKey = 'abcdefghijk123';      // ← Your Public Key from Step 4
```

4. **Save the file** (Ctrl + S)

---

## ✅ Step 6: Test Your Contact Form (1 minute)

1. **Make sure your app is running:**
   ```bash
   npm start
   ```

2. **Go to your portfolio** in the browser

3. **Scroll to "Get In Touch" section**

4. **Fill out the form:**
   - Name: Test User
   - Email: test@example.com
   - Subject: Testing Contact Form
   - Message: This is a test message!

5. **Click:** "Send Message"

6. **You should see:**
   - Button changes to "Sending..."
   - Then shows success alert: "✅ Message sent successfully!"

7. **Check your email:** danielnaol393@gmail.com
   - You should receive the test message!
   - Check spam folder if you don't see it

---

## 🎉 Success! Your Contact Form is Now Working!

### What happens now when someone contacts you:

```
User fills form → Clicks "Send Message" → EmailJS sends email → You receive email at danielnaol393@gmail.com ✅
```

---

## 📊 EmailJS Free Plan Limits:

- ✅ **200 emails per month** (enough for a portfolio)
- ✅ **Unlimited templates**
- ✅ **Email support**
- ✅ **No credit card required**

If you need more, upgrade to paid plan ($7/month for 1000 emails)

---

## 🔧 Troubleshooting:

### Problem: "Failed to send message" error

**Solution 1:** Check your IDs
- Make sure Service ID, Template ID, and Public Key are correct
- No extra spaces or quotes

**Solution 2:** Check EmailJS Dashboard
- Go to https://dashboard.emailjs.com/
- Check "Email Services" - make sure Gmail is connected
- Check "Email Templates" - make sure template is saved

**Solution 3:** Check browser console
- Press F12 to open Developer Tools
- Click "Console" tab
- Look for error messages
- Send me the error if you need help

### Problem: Email not received

**Solution 1:** Check spam folder
- EmailJS emails sometimes go to spam first time
- Mark as "Not Spam" to fix this

**Solution 2:** Check EmailJS Dashboard
- Go to "History" tab
- See if email was sent successfully
- Check for any errors

**Solution 3:** Verify email service
- Go to "Email Services"
- Make sure Gmail is connected (green checkmark)
- Try reconnecting if needed

---

## 📝 Quick Reference:

### Your EmailJS Credentials:
```javascript
Service ID:  _________________
Template ID: _________________
Public Key:  _________________
```

### Where to find them:
- **Service ID:** Email Services → Click on your service
- **Template ID:** Email Templates → Click on your template
- **Public Key:** Account → General

### Important Links:
- **Dashboard:** https://dashboard.emailjs.com/
- **Documentation:** https://www.emailjs.com/docs/
- **Support:** https://www.emailjs.com/support/

---

## 🎯 Next Steps:

1. ✅ Complete Steps 1-6 above
2. ✅ Test the form
3. ✅ Receive your first test email
4. ✅ Share your portfolio with the world!

---

## ❓ Need Help?

If you get stuck:
1. Check the troubleshooting section above
2. Check EmailJS documentation: https://www.emailjs.com/docs/
3. Ask me for help - I'm here to assist!

---

Made with ❤️ for Naol Daniel's Portfolio
Contact Form powered by EmailJS 📧
