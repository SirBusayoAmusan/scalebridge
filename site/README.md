# Scalebridge website

Full 11-page static site. Plain HTML/CSS/vanilla JS — no build step, no framework
dependency, deploys as-is to Netlify, Vercel, GitHub Pages, or any static host.

## Deploy

Drag this whole folder into Netlify/Vercel, or push it to a repo and connect it.
`index.html` is the homepage. All internal links have been checked and resolve
correctly (see the "everything links together" verification below).

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `what-we-do.html` | What We Do |
| `for-businesses.html` | For Businesses |
| `for-capital-partners.html` | For Capital Partners |
| `about.html` | About |
| `insights.html` | Insights |
| `become-a-capital-partner.html` | Become a Capital Partner (form) |
| `submit-an-opportunity.html` | Submit an Opportunity (5-step form) |
| `contact.html` | Contact (form) |
| `infrastructure-and-project-finance.html` | Infrastructure & Project Finance |
| `transaction-structuring-and-capital-mobilisation.html` | Transaction Structuring & Capital Mobilisation |

## Connecting the forms to Google Sheets

Three forms post to a Google Sheet via a Google Apps Script Web App, the same
pattern used on your other builds (e.g. Website 1 / Synced Wealth):

1. Create a new Google Sheet (this becomes your submissions database).
2. In the Sheet, go to **Extensions > Apps Script**.
3. Delete the placeholder code and paste in the contents of
   `google-apps-script/Code.gs`.
4. In the Apps Script editor, run `setupSheets` once (select it in the
   function dropdown, click Run). Approve the permission prompts. This
   creates three tabs — `Opportunities`, `CapitalPartners`, `Contact` — with
   headers already in place.
5. **Deploy > New deployment > Web app.**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Copy the deployment's `/exec` URL.
7. Open `js/config.js` in this folder and replace `REPLACE_WITH_YOUR_APPS_SCRIPT_WEB_APP_URL`
   with that URL. Redeploy your site.

That's it — submissions from all three forms will land as new rows in the
Sheet. "Submit an Opportunity" also base64-encodes any uploaded files and
sends them to the same script; if you set `DRIVE_FOLDER_ID` near the top of
`Code.gs` to a Drive folder ID, attachments will be saved there and a link
added to the row. Leave it blank to skip file storage.

Note: Apps Script Web Apps don't return CORS headers by default, so the
front end posts in `no-cors` mode — it can't read a response back, but the
row is still written. If a submission silently fails, check the Apps
Script **Executions** log (in the Apps Script editor) for errors first.

## Known placeholders to fill in before launch

- Homepage stats strip: capital mobilised / transactions / sectors figures
  are marked "Illustrative — pending verified figures."
- Footer "Registered address — placeholder" (all pages).
- Contact page: registered office address, email, and phone are placeholders.
- `DRIVE_FOLDER_ID` in `Code.gs` if you want file uploads saved to Drive.

## Assets

Three photos live in `assets/` (hero, infrastructure, logistics), compressed
to ~200KB each. Original design system used custom scroll-reveal animations
(`animation-timeline: view()`) — these are Chrome/Edge only; other browsers
get the content immediately visible with no animation (graceful fallback,
already handled in `css/style.css`).
