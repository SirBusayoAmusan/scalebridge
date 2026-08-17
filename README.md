# Scalebridge

Institutional infrastructure finance and transaction structuring website, built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connecting the Google Sheet

Form submissions (Submit an Opportunity, Become a Capital Partner, Contact) are
appended as rows to a Google Sheet, which acts as the database. To wire it up:

1. **Create a spreadsheet** in Google Sheets. Add three tabs, named exactly:
   - `Opportunities` — header row: `Timestamp, Financing Type, Capital Requirement, Repayment Source, Counterparty, Transaction Stage, Documents, Full Name, Company, Job Title, Email, Phone`
   - `Capital Partners` — header row: `Timestamp, Institution, Name, Role, Email, Phone, Capital Type, Ticket Size, Preferred Sectors, Preferred Geography, Preferred Tenor, Additional Info`
   - `Contact` — header row: `Timestamp, Name, Email, Subject, Message`
2. **Create a Google Cloud service account** (APIs & Services → Credentials →
   Create Credentials → Service account), then create a JSON key for it and
   download it.
3. **Enable the Google Sheets API** for that project.
4. **Share the spreadsheet** with the service account's email address
   (found in the JSON key as `client_email`), giving it Editor access.
5. Copy `.env.example` to `.env.local` and fill in:
   - `GOOGLE_SHEETS_SPREADSHEET_ID` — the ID from the sheet's URL
     (`https://docs.google.com/spreadsheets/d/<THIS_PART>/edit`)
   - `GOOGLE_SHEETS_CLIENT_EMAIL` — the `client_email` field from the JSON key
   - `GOOGLE_SHEETS_PRIVATE_KEY` — the `private_key` field from the JSON key,
     kept on one line with `\n` for line breaks (this is how Google exports it
     in the JSON — paste it as-is, in quotes)

Restart the dev server after adding the env file. Until these are set, form
submissions will fail with a clear "Google Sheets is not configured" error
rather than silently pretending to succeed.

**Note on file uploads:** the Submit an Opportunity form accepts document
uploads and records the filenames in the sheet, but does not currently store
the files themselves — no cloud storage (e.g. Google Drive, S3) is wired up
yet. Add that before relying on document upload in production.

## Project structure

- `src/app` — routes (App Router)
- `src/components` — shared UI (Navbar, Footer, Button, page sections, forms)
- `src/lib/routes.ts` — central route definitions
- `src/lib/api.ts` — client-side API abstraction for form submissions
- `src/lib/googleSheets.ts` — server-side Google Sheets abstraction
- `src/app/api/*` — form submission endpoints
