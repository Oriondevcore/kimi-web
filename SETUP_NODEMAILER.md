# ORION Demo Form - Nodemailer Setup (Gmail SMTP)

## Quick Setup (5 minutes)

### Step 1: Install Nodemailer

```bash
npm install nodemailer
npm install -D @types/nodemailer
```

### Step 2: Update `.env.local`

Add these two lines to your `.env.local`:

```
GMAIL_USER=mikehunt7099@gmail.com
GMAIL_APP_PASSWORD=vcpf titt djtf askm
```

⚠️ **IMPORTANT:** Keep this file secret. Never commit to GitHub.

### Step 3: Replace API Route

Replace your `app/api/demo-request/route.ts` with the new `route-nodemailer.ts` file.

### Step 4: Firebase Still Required

You still need Firebase credentials in `.env.local`:

```
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### Step 5: Test Locally

```bash
npm run dev
```

1. Go to your form
2. Fill in demo request
3. Click "Request Demo"
4. Check mikehunt7099@gmail.com for:
   - ✅ Confirmation email to user
   - ✅ Admin notification to you
5. Check Firestore for data storage

---

## How It Works

**Form Submission Flow:**

```
User submits form
    ↓
Zod validates data
    ↓
Store in Firestore
    ↓
Send confirmation email via Gmail SMTP
    ↓
Send admin notification to mikehunt7099@gmail.com
    ↓
User sees success toast
```

**Email Routes:**

- **From:** mikehunt7099@gmail.com (Gmail app)
- **To User:** Their email address (confirmation)
- **To Graham:** mikehunt7099@gmail.com (via Cloudflare forwarding)
  - graham@oriondevcore.com → mikehunt7099@gmail.com ✅
  - hello@oriondevcore.com → mikehunt7099@gmail.com ✅
  - info@oriondevcore.com → mikehunt7099@gmail.com ✅

---

## Why Nodemailer + Gmail?

✅ **Free** - No API keys needed
✅ **Simple** - Just Gmail SMTP
✅ **Reliable** - Gmail's infrastructure
✅ **Works locally** - ngrok + Nodemailer = no problems
✅ **Works on Vercel** - Standard SMTP
✅ **Cloudflare forwarding** - All your domains → one inbox

---

## Troubleshooting

### "Gmail says password is wrong"
- Make sure you generated an **app password** (not regular password)
- Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
- Select "Mail" + "Windows Computer"
- Copy the 16-char password exactly
- Add to `.env.local`: `GMAIL_APP_PASSWORD=your_16_char_password`

### "Emails not sending"
1. Check `.env.local` has both `GMAIL_USER` and `GMAIL_APP_PASSWORD`
2. Check browser console for errors
3. Check `npm run dev` terminal for error logs
4. Try sending a test email manually:

```bash
node -e "const nodemailer = require('nodemailer'); const t = nodemailer.createTransport({service:'gmail', auth:{user:'mikehunt7099@gmail.com', pass:'vcpf titt djtf askm'}}); t.sendMail({from:'mikehunt7099@gmail.com', to:'test@example.com', subject:'Test', text:'Hello'}, (e,i) => console.log(e || 'Sent'));"
```

### "Firestore error"
- Make sure Firebase credentials are correct
- Make sure Firestore rules allow `create` on `demo_requests` collection

---

## Security Notes

⚠️ **What's Secure:**
- App password = specific to Gmail apps only (not your main password)
- Never stored in code, only in `.env.local`
- `.gitignore` prevents accidental commit

⚠️ **What to Watch:**
- Keep `.env.local` out of GitHub
- Don't share this file
- If compromised, regenerate Gmail app password

---

## File Locations

```
your-project/
├── .env.local                    ← Gmail credentials (NOT in GitHub)
├── app/
│   └── api/
│       └── demo-request/
│           └── route.ts          ← Replace with route-nodemailer.ts
└── lib/
    └── firebase.ts               ← Same as before
```

---

## Next Steps

1. **Install Nodemailer:** `npm install nodemailer`
2. **Add credentials to `.env.local`**
3. **Replace API route** with `route-nodemailer.ts`
4. **Test locally** with ngrok
5. **Deploy to Vercel** (same `.env` setup)

You're ready to go! 🚀
