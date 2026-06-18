<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Architectural Conventions

### 1. Feature-Based Architecture
We organize code by business/UI features inside the `features/` directory rather than dumping everything in global components.
- Path structure: `features/<feature-name>/components/` or `features/<feature-name>/hooks/`
- Navigation feature: `features/navigation/` (contains Navbar, Footer)
- Landing page features: `features/landing/` (contains Hero, Stats, PainPoints, Steps, Solution, Security)
- Success Stories feature: `features/success-stories/` (contains CaseStudiesList, StatsSummaryBanner, SuccessStoriesCTA, SuccessStoriesPage)
- Secure Galleries feature: `features/secure-galleries/` (contains SecureHero, SecurityFeaturesGrid, GDPRComplianceDetails, SignedUrlExplanation, Certifications, AntiTheftMeasures, SecureCTA, SecureGalleriesPage)
- Share global components inside `components/common/` only if they are reused across multiple feature modules.

### 2. Localization (i18n) Setup
We use `next-intl` for standard Next.js App Router localization.
- Supported Locales: `['en', 'fr', 'de']`
- Routing & Redirects: Managed by `proxy.ts` (which acts as Next.js 16 request middleware/proxy) and `i18n/request.ts`.
- Translation Files: Stored in `/messages/` directory (`en.json`, `fr.json`, `de.json`). Load keys using `useTranslations()` or server-side messaging utilities.

### 3. Theming & Design Systems
- Tailwind CSS Version: `Tailwind v4`.
- Theme colors are mapped to HSL variables in `app/globals.css`.
- Primary Brand Color: `--brand` (`hsl(221, 83%, 53%)`), usable with custom utilities like `bg-brand`, `text-brand`, etc.
- Always implement fully responsive structures with mobile navigation alternatives, micro-animations, and glassmorphism.

