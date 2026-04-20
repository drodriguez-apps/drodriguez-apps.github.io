# Design System

## Direction
Personality: Bold editorial SaaS for a mobile app portfolio
Foundation: White and charcoal planes with disciplined yellow accents
Depth: Soft modern elevation, crisp low-opacity borders, oversized type

## Tokens
### Colors
--page: #ffffff (Primary canvas)
--page-dark: #171e19 (Charcoal section)
--page-dark-alt: #272727 (Support dark panel)
--accent: #ffe17c (Golden yellow highlight)
--sage: #b7c6c2 (Muted supporting tone)
--text: #171e19
--text-inverse: #ffffff
--border-light: rgba(23, 30, 25, 0.10)
--border-dark: rgba(183, 198, 194, 0.10)

### Typography
--font-heading: 'Anton', sans-serif
--font-body: 'Satoshi', sans-serif
Headlines: uppercase, line-height 0.9, normal letter-spacing
Body: weights 400, 500, 700

### Spacing
Base: 8px
Scale: 8, 12, 16, 24, 32, 48, 64, 80, 120

### Borders & Shadows
--border-light: 1px solid rgba(23, 30, 25, 0.10)
--border-dark: 1px solid rgba(183, 198, 194, 0.10)
--shadow-card: 0 24px 60px rgba(23, 30, 25, 0.08)
--shadow-strong: 0 40px 100px rgba(23, 30, 25, 0.14)
--radius-sm: 14px
--radius-md: 20px
--radius-lg: 28px
--radius-pill: 999px

### Effects
--transition-surface: 300ms cubic-bezier(0.4, 0, 0.2, 1)

## Patterns
### Hero
- Full-width light canvas with 40px grid background
- Anton headline with yellow slab highlight behind the final word
- Direct action row paired with a staggered rail of real app banners and icons

### Cards
- Light cards use white or #f8f9fa surfaces and light borders
- Dark cards use #171e19 or #272727 with sage-tinted borders
- Hover states lift with subtle translate and stronger shadow
- Portfolio cards stay lean: category, banner, icon, summary, and CTA only

### Detail Pages
- Product pages use a full-width banner followed by an overlapping content sheet
- Actions, quick facts, and overview copy live in the same reading flow instead of a side inspector
- On narrow screens, the reading sheet comes first and the banner drops below the overview instead of hiding behind the opening card

### Global Chrome
- The fixed header uses its measured rendered height as the shared offset for main layout spacing and hash-link landing positions
- Locale switching lives in the footer connect area, not in the fixed header

### Conversion Elements
- Yellow is reserved for the highest-priority CTA and emphasis marks
- Dark pill button in the header, larger yellow Anton button in conversion forms
