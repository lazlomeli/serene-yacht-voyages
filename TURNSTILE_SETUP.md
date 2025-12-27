# Cloudflare Turnstile Setup

## Get Your Turnstile Keys

1. Go to https://dash.cloudflare.com/?to=/:account/turnstile
2. Click "Add site"
3. Enter:
   - **Site name**: SV Iron Monkey (or your preferred name)
   - **Domain**: Add `localhost` for development and your production domain
   - **Widget Mode**: Select "Managed" (recommended)
4. Click "Create"
5. Copy your:
   - **Site Key** (public)
   - **Secret Key** (private)

## Configure Environment Variables

### Local Development

Add to `.env.local`:
```bash
VITE_TURNSTILE_SITE_KEY=your-site-key-here
TURNSTILE_SECRET_KEY=your-secret-key-here
```

### Vercel Production

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add:
   - `VITE_TURNSTILE_SITE_KEY` = your-site-key
   - `TURNSTILE_SECRET_KEY` = your-secret-key
3. Select Production, Preview, and Development
4. Redeploy

## Test

```bash
npm run dev:full
```

Visit http://localhost:5102 and test the contact form. The Turnstile widget should appear automatically.

