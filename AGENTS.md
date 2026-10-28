# Project guide

N S ENTERPRISES is a chemical wholesale marketing website built with TanStack Start and React. It uses ivory and forest green with a lime accent, Manrope headings, and DM Sans body text.

## Architecture

- `src/routes/__root.tsx`: document, metadata and favicon.
- `src/routes/index.tsx`: homepage route.
- `src/components/MarketingPage.tsx`: homepage, mobile navigation, category filters, logo, inline industrial SVG and contact details. Exports shared Logo and Arrow components.
- `src/routes/products/$productId.tsx`: product loader, metadata and not-found handling.
- `src/components/ProductPage.tsx`: descriptions and prefilled email enquiries.
- `src/data/products.ts`: typed seven-product catalogue; keep IDs stable for product URLs.
- `src/data/site.ts`: business metadata.
- `src/styles.css`: design tokens, responsive layouts and reduced-motion support.
- `public/favicon.svg`: NS favicon.

## Conventions

Keep copy specific to supplied business details. Do not invent certifications, purity, pack sizes, prices or delivery promises. Phone numbers use India's +91 code. WhatsApp is available on +91 84598 29872 and +91 92268 19032; use wa.me links with India’s 91 country code. Enquiries can open WhatsApp or the customer's email application; no forms, accounts, payment or persistence are needed. The industrial SVG is an illustration, not an image of the business premises.

Preserve semantic headings, visible focus, mobile layouts and reduced-motion support. Netlify validates builds; do not run build/start/test commands during agent work.
