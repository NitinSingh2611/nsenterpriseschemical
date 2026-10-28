# N S ENTERPRISES

A responsive website for a chemical and acid wholesaler in MIDC Hingna, Nagpur. Includes a filterable seven-product catalogue, individual product descriptions, and direct phone, email and map links.

Built with React, TypeScript, TanStack Start, Vite, and CSS. Hosted on Netlify.

## Local development

Install dependencies with `pnpm install`, then use `pnpm dev`. For Netlify emulation, use `netlify dev --port 8889`. The platform handles production builds and deployment.

Product content lives in `src/data/products.ts`; business metadata lives in `src/data/site.ts`. Contact details are rendered in `src/components/MarketingPage.tsx` and `ProductPage.tsx`.

Enquiry links open a customer's email application. The website does not collect or store submissions. Product grades, concentrations, packaging, pricing and stock are confirmed directly with the business.
