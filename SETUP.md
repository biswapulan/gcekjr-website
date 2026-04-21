# GCEKJR Website — Admin Panel Setup & Fix Guide

## What Was Fixed

### Bug 1 (CRITICAL) — Wrong NEXTAUTH_URL
The most important fix. When `NEXTAUTH_URL` doesn't match the actual server URL,
`getServerSession()` fails silently and every POST/DELETE API route returns 401.
This is why NO add/delete/save operation worked.

**Fix:** Set `NEXTAUTH_URL=http://localhost:3000` for local dev, or your production domain for deployment.

### Bug 2 — auth() function not async
`lib/auth.ts` export was `function auth()` instead of `async function auth()`.
Now fixed with proper async and JWT/session callbacks.

### Bug 3 — Missing response check on delete (FacultyTab, NirfTab, DownloadsTab)
Some tabs weren't checking `if (!r.ok)` after delete calls, so errors were silently ignored.

### Bug 4 — Google Sheet column headers must match exactly
The code reads headers directly from row 1 of each sheet. They are case-sensitive.

---

## Quick Start

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Create your .env.local
Copy `.env.local.example` to `.env.local` and fill in all values:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local`:

```env
# Generate secret: node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
NEXTAUTH_SECRET=your-generated-secret

# LOCAL DEV — must be localhost!
NEXTAUTH_URL=http://localhost:3000

# Admin login credentials
ADMIN_EMAIL=admin@gcekjr.ac.in
ADMIN_PASSWORD=yourpassword

# Google Sheets (see Step 3)
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMII...\n-----END RSA PRIVATE KEY-----"
GOOGLE_SPREADSHEET_ID=your-spreadsheet-id
```

### Step 3: Set up Google Sheets API
1. Go to https://console.cloud.google.com
2. Create a new project (or use existing)
3. Enable **Google Sheets API** and **Google Drive API**
4. Go to **IAM & Admin → Service Accounts** → Create Service Account
5. Download the JSON key file
6. From the JSON key, copy:
   - `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → `GOOGLE_PRIVATE_KEY` (keep all `\n` as literal `\n`)
7. Create a Google Spreadsheet
8. Share it with your service account email as **Editor**
9. Copy the spreadsheet ID from the URL → `GOOGLE_SPREADSHEET_ID`

### Step 4: Set up Google Sheet tabs
Create these exact sheet tabs (case-sensitive) with these exact column headers in Row 1:

| Sheet Tab | Column Headers (Row 1) |
|-----------|------------------------|
| `Notices` | `Date` · `Title` · `Category` · `PdfUrl` · `IsNew` |
| `Events` | `DateRange` · `Title` · `Description` |
| `Faculty` | `Name` · `Designation` · `Department` · `Qualification` · `PhotoUrl` |
| `Gallery` | `Title` · `ImageUrl` · `Category` |
| `Slider` | `Tag` · `Title` · `Description` · `ImageUrl` |
| `Downloads` | `Title` · `Description` · `DriveUrl` · `Category` · `FileSize` |
| `Nirf` | `Year` · `Title` · `DriveUrl` · `Type` |
| `Recruiters` | `Name` · `Sector` |
| `Testimonials` | `Quote` · `Name` · `Designation` · `Company` |
| `Contact` | `Phone` · `Email` · `EstablishmentEmail` · `Address` · `OfficeHours` · `CollegeTimings` · `TpoEmail` · `TpoPhone` |

**Headers are case-sensitive!** `Date` ≠ `date`.

### Step 5: Run the dev server
```bash
npm run dev
```

Visit http://localhost:3000/admin/login and sign in with your ADMIN_EMAIL + ADMIN_PASSWORD.

---

## Production Deployment

Change `NEXTAUTH_URL` to your real domain:
```env
NEXTAUTH_URL=https://gcekjr.ac.in
```

---

## Troubleshooting

**"Failed to add" / "Failed to delete" errors in admin panel**
→ Check your `.env.local` exists and `NEXTAUTH_URL` matches your actual URL.
→ Check browser DevTools → Network tab for the API response status.

**Admin features return 401**
→ `NEXTAUTH_URL` is wrong, or `NEXTAUTH_SECRET` is missing.

**Data loads but shows empty / wrong columns**
→ Your Google Sheet column headers don't match exactly. Check the table above.

**Can't log in to admin**
→ Verify `ADMIN_EMAIL` and `ADMIN_PASSWORD` in `.env.local`.
→ Make sure `NEXTAUTH_SECRET` is set.

**Google Sheets API errors**
→ Make sure the sheet is shared with your service account email as **Editor**.
→ Make sure both "Google Sheets API" and "Google Drive API" are enabled in Google Cloud Console.
