# Eden Huang — Personal Website

Live at **[eden-huang.vercel.app](https://eden-huang.vercel.app)**

A minimal, text-forward personal website and newsletter platform built with Next.js, Tailwind CSS, and Resend.

---

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Next.js 15](https://nextjs.org) (App Router, static export where possible) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Language | TypeScript |
| Email | [Resend](https://resend.com) (audience management + transactional email) |
| Hosting | [Vercel](https://vercel.com) |
| Repository | [GitHub](https://github.com/edenhuangSH/EdenHuangWebsite) |

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx                  # Home — hero + section previews
│   ├── layout.tsx                # Root layout (sidebar + main content)
│   ├── globals.css               # Tailwind + custom prose styles
│   ├── tech/page.tsx             # Tech projects listing
│   ├── insights/
│   │   ├── page.tsx              # Insights index
│   │   └── [slug]/page.tsx       # Individual insight article
│   ├── stories/
│   │   ├── page.tsx              # Stories index
│   │   └── [slug]/page.tsx       # Individual story
│   ├── about/page.tsx            # About Me
│   ├── links/page.tsx            # External links
│   ├── unsubscribe/page.tsx      # One-click unsubscribe page
│   ├── admin/newsletter/page.tsx # Password-protected newsletter dashboard
│   └── api/
│       ├── subscribe/route.ts        # POST — add subscriber to Resend audience
│       ├── unsubscribe/route.ts      # POST — mark contact as unsubscribed
│       └── admin/
│           ├── subscribers/route.ts  # GET — list all contacts (auth-gated)
│           └── send-newsletter/route.ts  # POST — compose & send email (auth-gated)
├── components/
│   ├── Sidebar.tsx               # Desktop sidebar + mobile header/menu
│   ├── SubscribeModal.tsx        # Email subscription modal
│   ├── ShareBar.tsx              # Share to X, LinkedIn, SMS, copy link
│   ├── SectionHeader.tsx         # Reusable section header
│   ├── InsightsSection.tsx       # Insights cards
│   ├── StoriesSection.tsx        # Stories cards
│   ├── TechSection.tsx           # Tech project cards
│   ├── AboutSection.tsx          # About preview
│   └── LinksSection.tsx          # External links
└── lib/
    ├── insights-articles.ts      # Insight article data + types
    └── stories.ts                # Story data + types

data/content/                     # Markdown/JSON content source files
public/articles/                  # Static HTML articles (e.g. civil-model.html)
public/media/                     # Video and audio files
```

---

## Local Development

```bash
# Clone
git clone https://github.com/edenhuangSH/EdenHuangWebsite.git
cd EdenHuangWebsite

# Install dependencies
npm install

# Create environment file
cp env.example .env.local
# Then fill in the values (see Environment Variables below)

# Run dev server
npm run dev
# → http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file in the project root (never committed to git):

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
RESEND_AUDIENCE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
FROM_EMAIL=Eden Huang <onboarding@resend.dev>
ADMIN_SECRET=your-strong-password
NEXT_PUBLIC_BASE_URL=https://eden-huang.vercel.app
```

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [resend.com/api-keys](https://resend.com/api-keys) |
| `RESEND_AUDIENCE_ID` | Audience UUID — fetch via `curl https://api.resend.com/audiences -H "Authorization: Bearer YOUR_KEY"` |
| `FROM_EMAIL` | Sender address. Use `onboarding@resend.dev` for testing, or `you@yourdomain.com` after domain verification |
| `ADMIN_SECRET` | Password to access `/admin/newsletter` dashboard |
| `NEXT_PUBLIC_BASE_URL` | Full site URL (no trailing slash). Used in email unsubscribe links |

---

## Deployment (Vercel)

The site auto-deploys on every push to `main`.

### Initial Setup

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected)
3. Add all 5 environment variables under **Settings → Environment Variables**
4. Deploy

### Redeploying

- **Automatic:** Every `git push origin main` triggers a new deployment
- **Manual:** Vercel dashboard → Deployments → ⋯ → Redeploy

### Custom Domain (optional)

1. Buy a domain (Namecheap, Cloudflare, etc.)
2. Vercel → Settings → Domains → Add your domain
3. Update DNS as instructed
4. Verify the domain in Resend → Domains (add SPF/DKIM records)
5. Update `FROM_EMAIL` to use your domain (e.g. `newsletter@yourdomain.com`)
6. Update `NEXT_PUBLIC_BASE_URL` to match

---

## Features

### Content Sections
- **Tech** — Utility tools and vibe-coded projects
- **Insights** — Research articles on MedTech, AI, geopolitics, capital markets
- **Stories** — Essays, personal narratives, bilingual (EN/中文) writing
- **About Me** — Bio and background
- **Links** — External profiles and resources

### Newsletter System
- **Subscribe modal** — Email + name + interest preferences (Articles, Insights, Tech Notes, Weekly Digest)
- **Admin dashboard** (`/admin/newsletter`) — View subscribers, compose and send newsletters with content-type filtering
- **Unsubscribe** — One-click unsubscribe page linked from every email
- **Powered by Resend** — Contacts stored in Resend Audiences

### Sharing
- Every article page has a share bar: **𝕏 · LinkedIn · SMS · Copy link**

### Embedded HTML Articles
- Long-form articles with complex formatting (tables, scoring matrices) can be authored as standalone HTML files in `public/articles/` and rendered inline via the `htmlFile` field in article data

---

## Scripts

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## License

Private project. All rights reserved.
