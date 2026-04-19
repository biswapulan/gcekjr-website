# GCEKJR Official Website

Next.js 14 website for Government College of Engineering, Keonjhar (gcekjr.ac.in)

---

## ⚡ Quick Setup (5 minutes)

### 1. Install dependencies
```bash
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
```
Edit `.env.local` and fill in all values (see below).

### 3. Run locally
```bash
npm run dev
```
Visit http://localhost:3000

### 4. Deploy to Vercel
```bash
npx vercel
```
Add all `.env.local` variables in Vercel Dashboard → Settings → Environment Variables.

---

## 🔑 Environment Variables Explained

### Admin Login
```
ADMIN_EMAIL=principal@gcekjr.ac.in
ADMIN_PASSWORD=choose-a-strong-password
NEXTAUTH_SECRET=run: openssl rand -base64 32
NEXTAUTH_URL=https://gcekjr.ac.in
```

### Google Sheets Setup (step by step)

1. Go to https://console.cloud.google.com
2. Create a new project → name it "gcekjr-website"
3. Enable APIs:
   - Go to "APIs & Services" → "Library"
   - Search and enable **Google Sheets API**
   - Search and enable **Google Drive API**
4. Create Service Account:
   - "APIs & Services" → "Credentials" → "Create Credentials" → "Service Account"
   - Name: gcekjr-sheets-bot
   - Download the JSON key file
5. From the JSON file, copy:
   - `client_email` → paste as GOOGLE_SERVICE_ACCOUNT_EMAIL
   - `private_key`  → paste as GOOGLE_PRIVATE_KEY
6. Create a new Google Sheet at https://sheets.google.com
7. Share the sheet with your service account email (Editor access)
8. Copy the Sheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/COPY_THIS_PART/edit`
   → Paste as GOOGLE_SPREADSHEET_ID

### Google Sheet Structure

Create these tabs (sheets) with exact names and headers:

**Notices** tab — Row 1 headers:
```
Date | Title | Category | PdfUrl | IsNew
```

**Events** tab — Row 1 headers:
```
DateRange | Title | Description
```

**Faculty** tab — Row 1 headers:
```
Name | Designation | Department | Qualification | PhotoUrl
```

**Gallery** tab — Row 1 headers:
```
Title | ImageUrl | Category
```

**Slider** tab — Row 1 headers:
```
Tag | Title | Description | ImageUrl
```

---

## 📁 Project Structure

```
gcekjr/
├── app/
│   ├── page.tsx              ← Home page
│   ├── notices/page.tsx      ← All notices
│   ├── faculty/page.tsx      ← Faculty listing
│   ├── gallery/page.tsx      ← Photo gallery
│   ├── admin/
│   │   ├── layout.tsx        ← Session provider
│   │   ├── page.tsx          ← Admin dashboard
│   │   └── login/page.tsx    ← Login page
│   └── api/
│       ├── notices/route.ts  ← CRUD for notices
│       ├── events/route.ts   ← CRUD for events
│       ├── faculty/route.ts  ← CRUD for faculty
│       ├── gallery/route.ts  ← CRUD for gallery
│       └── slider/route.ts   ← CRUD for slider
├── components/
│   ├── UtilBar.tsx
│   ├── Header.tsx
│   ├── Nav.tsx
│   ├── NoticeStrip.tsx       ← Live scrolling notices
│   ├── HeroSlider.tsx        ← Auto-rotating hero
│   ├── StatsStrip.tsx        ← Animated counters
│   ├── NoticeBoard.tsx       ← Notice list
│   ├── Sidebar.tsx           ← Quick links + events
│   └── Footer.tsx
├── lib/
│   ├── sheets.ts             ← Google Sheets API helpers
│   └── auth.ts               ← NextAuth config
├── middleware.ts              ← Admin route protection
└── .env.local.example        ← Copy to .env.local
```

---

## 🖥 Admin Panel

Visit: `/admin` (or `/admin/login`)

The admin can:
- ✅ Add / delete notices with PDF links
- ✅ Add / delete events
- ✅ Add / delete faculty members
- ✅ Add / delete gallery photos
- ✅ Add / delete hero slider slides

All data is stored in Google Sheets — no database required.

---

## 📎 PDF Notices Workflow (for admin)

1. Upload the PDF to Google Drive
2. Right-click → Share → Change to "Anyone with the link" → Copy link
3. Paste the link in the Admin Panel → Notices → PDF Link field
4. Done — users can click the notice to open the PDF

---

## 🚀 Deployment to Vercel

```bash
# Install Vercel CLI if not already
npm i -g vercel

# Deploy
vercel

# For production domain (gcekjr.ac.in)
vercel --prod
```

After deploy:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all variables from .env.local
3. Change NEXTAUTH_URL to https://gcekjr.ac.in
4. Redeploy

---

## 🌐 Custom Domain Setup

In Vercel Dashboard → Project → Settings → Domains:
1. Add `gcekjr.ac.in`
2. Add `www.gcekjr.ac.in`
3. Update DNS records at your domain registrar as shown by Vercel

---

Built with Next.js 14 · Google Sheets · NextAuth · Vercel
