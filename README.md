# Home Performance Standards Council Website

⚠️ **DEV ENVIRONMENT** - This site is configured to be unindexable by search engines.

## SEO Blocking Configuration

- `public/robots.txt` - Blocks all crawlers
- `src/layouts/Layout.astro` - Default robots meta tag set to `noindex, nofollow`
- Sitemap configured at `astro.config.mjs` with site URL

## 🚀 Tech Stack

- **Framework**: Astro 5.14.1
- **Styling**: Tailwind CSS 4.1.14 (latest v4 with CSS-first configuration)
- **Deployment**: Cloudflare Pages (@astrojs/cloudflare)
- **Font**: Montserrat (Google Fonts)
- **Code Quality**: ESLint + Prettier
- **Feedback**: Marker.io widget integration

## 📂 Project Structure

```text
/
├── public/
│   ├── favicon.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── HPSC_Logo2024.png
│   │   ├── BC_Hydro.png
│   │   ├── FortisBC-Secondary-W-RGB_Small-480x227.png
│   │   ├── bc-logo.jpg
│   │   └── Vancity_Logo_ReadyRead_RGB-480x215.png
│   ├── components/
│   │   ├── AccessibilityTab.astro (currently disabled)
│   │   ├── Welcome.astro
│   │   └── layouts/
│   │       ├── Breadcrumbs.astro
│   │       ├── Footer.astro
│   │       └── Nav.astro
│   ├── layouts/
│   │   └── Layout.astro (SEO-optimized with OG, Twitter, JSON-LD)
│   ├── pages/
│   │   ├── index.astro (homepage)
│   │   ├── contact.astro
│   │   └── resources/
│   │       ├── documents/
│   │       │   ├── index.astro
│   │       │   └── [slug].astro
│   │       ├── guides/
│   │       │   ├── index.astro (search/filter)
│   │       │   └── [slug].astro (9 guides)
│   │       └── news/
│   │           ├── index.astro
│   │           └── [slug].astro (8 articles)
│   └── styles/
│       └── global.css
├── tailwind.config.ts
├── astro.config.mjs
└── package.json
```

## 🎨 Design System

### Color Palette (from homeperformance.ca)

**Primary Blue** (`#00b6f0`)

- Full scale from 50-900
- Light variant: `#33c4f3`
- Dark variant: `#0095c7`

**Accent Colors**

- Cyan: `#abb8c3`
- Pink: `#f78da7`
- Red: `#cf2e2e`
- Orange: `#ff6900`
- Green: `#00d084`
- Blue: `#0693e3`
- Purple: `#9b51e0`

### Typography

- **Font Family**: Montserrat (weights: 400, 500, 600, 700, 800)
- **Fallback**: Helvetica, Arial, Lucida, sans-serif

## 📅 Development Log - October 6, 2025

### Major Accomplishments

#### 1. **Homepage Development** (`src/pages/index.astro`)

- ✅ Built comprehensive homepage with hero section, stats cards, services, carousel, and CTA
- ✅ Removed redundant "Home" breadcrumb from index page
- ✅ Fixed hero section styling with consistent primary blue buttons and white borders
- ✅ Removed unwanted spacing between navigation and hero (-mt-8 offset)
- ✅ Added consistent mobile padding (px-4 md:px-0/px-16) across all sections:
  - Hero section
  - "What We Do" services section
  - "We Work With" section
  - CTA section

#### 2. **Interactive Stats Cards**

- ✅ Implemented hover/tap reveal functionality for service cards
- ✅ Fixed mobile tap support with proper CSS targeting
- ✅ Active state management with JavaScript click handlers
- ✅ Cards slide up to reveal detailed information on interaction

#### 3. **Supporter Logo Carousel**

- ✅ Added BC Hydro, FortisBC, CleanBC, and Vancity logos
- ✅ Implemented responsive carousel:
  - **Mobile**: Shows 1 logo at a time (4 slides total)
  - **Desktop**: Shows all 4 logos (2 slides for animation)
- ✅ Swipe/drag functionality for both mobile and desktop
- ✅ Dot navigation with proper screen-size awareness
- ✅ Auto-resize handling to prevent stuck states

#### 4. **Navigation Component** (`src/components/layouts/Nav.astro`)

- ✅ Sticky header with top contact bar
- ✅ Responsive hamburger menu with animated X transformation
- ✅ Changed hamburger lines from gray to primary blue
- ✅ Dropdown submenus for desktop
- ✅ Mobile accordion-style submenus
- ✅ Search bar integration (desktop and mobile)
- ✅ Active link detection with visual indicators
- ✅ Top bar hides on scroll down, shows when scrolling up

#### 5. **Contact Page** (`src/pages/contact.astro`)

- ✅ Built comprehensive contact form with Cloudflare Turnstile
- ✅ Added mobile-responsive padding (p-4 md:p-8)
- ✅ Form validation: submit button disabled until all required fields filled
- ✅ Dual validation: required fields + Turnstile verification
- ✅ Contact information cards with icons
- ✅ Google Maps embed
- ✅ FAQ section with smooth accordion animations
- ✅ Success/error message handling
- ✅ Changed page width from max-w-7xl to w-full for better mobile experience

#### 6. **Layout & SEO** (`src/layouts/Layout.astro`)

- ✅ Yoast-style comprehensive SEO support:
  - Meta descriptions
  - Open Graph tags (Facebook)
  - Twitter Card tags
  - JSON-LD structured data
  - Canonical URLs
  - Keywords and author meta tags
- ✅ Robots meta tag (noindex/nofollow for dev)
- ✅ Skip to main content link for accessibility
- ✅ Marker.io feedback widget integration
- ✅ Flexbox layout with sticky footer
- ✅ AccessibilityTab component (currently commented out due to mobile issues)

#### 7. **Footer Component** (`src/components/layouts/Footer.astro`)

- ✅ Multi-column responsive layout
- ✅ Newsletter signup form
- ✅ Social media links
- ✅ Quick links and resources sections
- ✅ Policies section (Terms, Cookie Policy, Accessibility)
- ✅ Copyright with dynamic year

#### 8. **Accessibility Features** (`src/components/AccessibilityTab.astro`)

- 🟡 Built comprehensive accessibility panel (currently disabled):
  - Font size controls (A-, A, A+)
  - High contrast mode toggle
  - Increased line height toggle
  - Letter spacing toggle
  - Reduce motion toggle
  - LocalStorage persistence
  - Mobile slide-out panel
- ⚠️ Currently commented out in Layout due to mobile visibility conflicts

#### 9. **Code Quality & Tooling**

- ✅ ESLint configuration with Astro support
- ✅ Prettier formatting with Astro plugin
- ✅ TypeScript support throughout
- ✅ Tailwind CSS v4 with custom configuration
- ✅ Git hooks for pre-commit formatting

### Bug Fixes

1. **Stats Cards Mobile Interaction**
   - Problem: Cards weren't responding to tap on mobile
   - Solution: Rewrote CSS with specific selectors and mobile-only media queries

2. **CTA Section Mobile Cutoff**
   - Problem: "Ready to Improve Your Home" CTA was cut off on mobile
   - Solution: Changed from fixed `h-96` to `min-h-96 md:h-96` with proper padding

3. **Carousel Logo Visibility**
   - Problem: All 4 logos showing stacked on mobile instead of 1 at a time
   - Solution: Restructured slides with `md:hidden` and dynamic slide counting based on screen size

4. **Form Button State**
   - Problem: Button should only be enabled when fields are filled AND Turnstile verified
   - Solution: Added dual validation with input listeners and state management

5. **Spacing Issues**
   - Problem: Inconsistent padding across mobile/desktop
   - Solution: Systematically applied px-4 md:px-0/px-16 pattern to all sections

### Mobile-First Improvements

- Consistent `px-4` padding on mobile for all content sections
- Responsive carousel (1 logo mobile, 4 logos desktop)
- Touch-friendly stat cards with tap support
- Mobile-optimized contact form with reduced padding
- FAQ accordion works on both touch and click
- Hamburger menu with smooth animations

### Performance Optimizations

- Lazy loading for images
- Efficient carousel with transform-based animations
- Debounced resize handlers
- LocalStorage for accessibility preferences
- Grayscale-to-color hover effects on logos

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Run ESLint and auto-fix issues                   |
| `npm run format`          | Format code with Prettier                        |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🔄 Git Workflow

Recent commits demonstrate incremental development:

1. Initial Tailwind config with HPSC theme and SEO layout
2. Nav search bar, Footer policies section, and mock home page
3. Complete homepage design with interactive components
4. Site made unindexable for dev environment
5. ESLint and Prettier configuration

## 🚧 Known Issues & Future Work

### Known Issues

1. **AccessibilityTab** - Currently disabled due to mobile visibility conflicts with CSS rules
2. **Contact Form API** - Currently simulated, needs backend endpoint for production

### Planned Features

- [ ] Re-enable and fix AccessibilityTab for mobile
- [ ] Connect contact form to backend API
- [ ] Add remaining pages (About, Resources, Contractor Network)
- [ ] Implement blog/news system
- [ ] Add contractor directory with search/filter
- [ ] Set up analytics

## 📚 Guides System (Guides.co Replacement)

### ✅ Currently Implemented Features

The guides system successfully replaces the functionality from Guides.co with the following features:

**Content & Media:**

- ✅ Rich text content with full HTML support
- ✅ Single images with captions
- ✅ Image carousels (multiple images with prev/next navigation)
- ✅ YouTube video embeds
- ✅ Inline PDF viewers with download buttons
- ✅ Data comparison tables
- ✅ Featured hero images
- ✅ Callout boxes (tips, warnings, important notes)

**Navigation & Progress:**

- ✅ Step-by-step structure with numbered badges
- ✅ Sticky progress sidebar showing all steps
- ✅ Auto-progress tracking (Intersection Observer highlights current step)
- ✅ Smooth scroll navigation between steps
- ✅ Breadcrumbs with Schema.org structured data
- ✅ Visual step completion indicator

**Metadata & Organization:**

- ✅ Category badges (Homeowners/Contractors)
- ✅ Difficulty levels (Beginner/Intermediate/Advanced)
- ✅ Estimated reading time
- ✅ Step count display
- ✅ Author attribution and publication date
- ✅ Full SEO meta tags (title, description, OG, Twitter cards)
- ✅ Sitemap inclusion for all guides
- ✅ Canonical URLs

**User Experience:**

- ✅ Related guides recommendations (2 per guide)
- ✅ Next action CTAs (Browse More Guides, Contact Us)
- ✅ Fully responsive mobile design
- ✅ Search and filter on index page (category, difficulty, keywords)
- ✅ Featured guides highlighting
- ✅ Guide completion celebration section

**Current Guide Content:**

- 6 fully functional guides with rich media:
  1. Heat Pump Installation Checklist (8 steps)
  2. Getting Started with Home Energy Assessments (5 steps)
  3. Understanding BC Rebate Programs (5 steps - inline PDF, video, tables)
  4. Air Sealing Best Practices (5 steps - 3-image carousel, video, PDF)
  5. Choosing the Right Insulation (5 steps - 4-image carousel, tables, video, PDF)
  6. Complete Guide to Blower Door Testing (5 steps - 3-image carousel, video, inline PDF)
- 3 additional guides with placeholder content (ready for content migration)

### 🔮 Possible Future Enhancements

These features could be added later if needed:

**Interactive Features:**

- Print-friendly version
- Social sharing buttons (Twitter, Facebook, LinkedIn)
- Bookmark/Save for later functionality
- Email guide to friend
- Download PDF version of entire guide
- Copy link to specific step
- Dark mode toggle

**User Engagement:**

- Comments section
- Star ratings/reviews
- "Was this helpful?" feedback buttons
- User accounts/authentication
- Personal progress saving (requires auth)
- Completion certificates
- Multi-language support

**Content Enhancements:**

- Prerequisites section
- Required tools/materials checklist
- Estimated cost breakdown
- Glossary/definitions popup
- FAQs within guide
- Interactive quizzes/knowledge checks
- Downloadable checklists
- Voice narration

**Advanced Features:**

- Font size adjustment controls
- Estimated savings calculator (for energy guides)
- Contractor finder integration
- Related resources library
- Version history/changelog
- Community contributions/edits

### 📊 Content Migration Plan

When migrating from Guides.co:

1. Export existing guide content from Guides.co
2. Set up WordPress headless CMS with custom post types for guides
3. Configure Cloudflare R2 for media storage (images, videos, PDFs)
4. Create guide templates in WordPress matching current data structure
5. Import/migrate existing guides through WordPress admin
6. Future guides can be created by non-technical editors in WordPress

The current implementation provides all core functionality needed. Additional features can be prioritized based on user feedback and analytics after launch.

## 📝 Notes

- This is a development environment with SEO blocking enabled
- All color schemes extracted from homeperformance.ca
- Using Tailwind CSS v4 (CSS-first configuration with @theme directive)
- Marker.io feedback widget configured with project ID: 68e3e2d8b41dfc82a3e25eea
- Mobile-first responsive design approach
- Cloudflare Turnstile configured for contact form (test key: 1x00000000000000000000AA)

## 👀 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
