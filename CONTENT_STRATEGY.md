# Content Strategy & WordPress Integration Guide

## Date: January 2025

## Purpose: Content Management & CMS Integration Roadmap

---

## Executive Summary

**Current State**: 56 pages generated with 75% using mock data
**Target State**: WordPress headless CMS integration with componentized architecture
**Progress**: 25% componentized (6/24 main pages)

This document outlines the content strategy, WordPress integration plan, and componentization roadmap for the HPSC website.

---

## Page Inventory & Status

### ✅ Fully Componentized (6 pages - 25%)

1. **Homepage** (`/`) - 285 lines (was 1,330)
   - Components: 7 (HeroSection, StatsCards, ServicesGrid, SupportersCarousel, LatestNews, CallToAction, Welcome)
   - Content Source: Ready for WordPress

2. **About** (`/about`) - Componentized
   - Components: AboutHero, MissionVision, ImpactStats
   - Content Source: Ready for WordPress

3. **Our Team** (`/about/our-team`) - Componentized
   - Components: TeamGrid, LeadershipSection
   - Content Source: Ready for WordPress

4. **Strategy** (`/about/strategy`) - Componentized
   - Components: StrategyHero, PillarsGrid, GoalsSection
   - Content Source: Ready for WordPress

5. **The Big Picture** (`/the-big-picture`) - Componentized
   - Components: VisionHero, TimelineSection, StakeholdersGrid
   - Content Source: Ready for WordPress

6. **Contractor Network** (`/contractor-network`) - Componentized
   - Components: NetworkHero, BenefitsGrid, StatsSection
   - Content Source: Ready for WordPress

### 🔄 Needs Componentization (18 pages - 75%)

#### High Priority (Large, Complex Pages)

7. **Training** (`/training`) - 622 lines
   - Needs: TrainingProgramCard, CategoryFilter, BenefitsGrid
   - Content: 6 training programs (mock)

8. **Events** (`/events`) - 473 lines
   - Needs: EventCard, EventFilter, EventCalendar
   - Content: 8 events (mock)

9. **Resources Index** (`/resources`) - 487 lines
   - Needs: ResourceCategoryCard, FeaturedResources
   - Content: Multiple resource types (mock)

10. **Get Involved** (`/get-involved`) - Already componentized in parts
    - Status: Partial componentization
    - Content: 6 involvement options (mock)

#### Medium Priority (Moderate Size)

11. **Search** (`/search`) - 275 lines
    - Needs: SearchForm, SearchResults, SearchFilters
    - Content: Pagefind integration (working)

12. **Find a Contractor** (`/contractor-network/find-a-contractor`) - Large
    - Needs: ContractorCard, SearchFilters, InterestForm (exists)
    - Content: Mock contractors (ready for API)

#### Low Priority (Small/Static Pages)

13. **Contact** (`/contact`) - Functional forms
14. **Privacy Policy** (`/privacy`) - Static legal content
15. **Terms of Service** (`/terms`) - Static legal content
16. **Disclaimers** (`/disclaimers`) - Static legal content
17. **Cookies** (`/cookies`) - Static legal content
18. **Accessibility** (`/accessibility`) - Static + interactive tab
19. **Sitemap** (`/sitemap`) - Auto-generated
20. **404** (`/404`) - Static error page

#### Dynamic Pages (Working)

21-24. **News Articles** (`/news/[slug]`, `/news/[...page]`) - Working with mock data
25-28. **Resource Guides** (`/resources/guides/[slug]`) - Working with mock data
29-32. **Resource Documents** (`/resources/documents/[slug]`) - Working with mock data

---

## Component Library Needed

### Content Components (To Be Created)

#### 1. Training Components

```typescript
// TrainingProgramCard.astro
interface Props {
	title: string;
	category: string;
	duration: string;
	level: string;
	format: string;
	description: string;
	image: string;
	topics: string[];
	price: string;
	link?: string;
}
```

#### 2. Event Components

```typescript
// EventCard.astro
interface Props {
	title: string;
	date: Date;
	time: string;
	location: string;
	type: 'workshop' | 'webinar' | 'conference' | 'networking';
	description: string;
	image: string;
	price?: string;
	registrationLink?: string;
	spotsRemaining?: number;
}
```

#### 3. Resource Components

```typescript
// ResourceCategoryCard.astro
interface Props {
	title: string;
	description: string;
	icon: string;
	count: number;
	href: string;
	color?: string;
}
```

#### 4. Filter Components

```typescript
// CategoryFilter.astro
interface Props {
	categories: string[];
	activeCategory?: string;
	onChange?: string; // JavaScript function name
}
```

#### 5. Search Components

```typescript
// SearchForm.astro
interface Props {
	placeholder?: string;
	autofocus?: boolean;
}

// SearchResults.astro
interface Props {
	results: any[]; // Pagefind results
	query: string;
}
```

---

## WordPress Integration Plan

### Phase 1: Content Types Setup (Week 1-2)

#### Custom Post Types

1. **News Articles** (already structured)
   - Fields: title, excerpt, content, featured_image, author, date, category, tags
   - API Endpoint: `/wp-json/wp/v2/news`

2. **Training Programs**
   - Fields: title, description, category, duration, level, format, topics, price, image
   - API Endpoint: `/wp-json/wp/v2/training`

3. **Events**
   - Fields: title, date, time, location, type, description, price, registration_link, spots
   - API Endpoint: `/wp-json/wp/v2/events`

4. **Resources - Guides**
   - Fields: title, description, category, difficulty, read_time, steps, author, date
   - API Endpoint: `/wp-json/wp/v2/guides`

5. **Resources - Documents**
   - Fields: title, description, file_url, file_size, file_type, category, date
   - API Endpoint: `/wp-json/wp/v2/documents`

6. **Team Members**
   - Fields: name, role, bio, photo, email, linkedin
   - API Endpoint: `/wp-json/wp/v2/team`

7. **Contractors**
   - Fields: name, company, services, location, certifications, contact
   - API Endpoint: `/wp-json/wp/v2/contractors`

### Phase 2: API Integration (Week 3-4)

#### Fetch Functions

```typescript
// src/lib/wordpress.ts
export async function fetchNews() {
	const response = await fetch(`${WP_API_URL}/news`);
	return response.json();
}

export async function fetchTrainingPrograms() {
	const response = await fetch(`${WP_API_URL}/training`);
	return response.json();
}

export async function fetchEvents() {
	const response = await fetch(`${WP_API_URL}/events`);
	return response.json();
}
```

#### Build-time Data Fetching

```astro
---
// pages/training.astro
import { fetchTrainingPrograms } from '../lib/wordpress';
const programs = await fetchTrainingPrograms();
---
```

### Phase 3: Content Migration (Week 5-6)

1. Import existing mock data into WordPress
2. Validate API responses match TypeScript interfaces
3. Update all pages to use WordPress data
4. Test build process with real data

---

## Mock Data vs Real Data

### Current Mock Data Sources

#### News Articles (12 articles)

- **Source**: `src/data/news.ts`
- **Fields**: Complete (ready for WordPress)
- **Images**: Unsplash (placeholder)
- **Status**: ✅ Structure ready for API

#### Training Programs (6 programs)

- **Source**: Inline in `pages/training.astro`
- **Fields**: Complete
- **Images**: Unsplash (placeholder)
- **Status**: 🔄 Needs extraction to data file

#### Events (8 events)

- **Source**: Inline in `pages/events.astro`
- **Fields**: Complete
- **Images**: Unsplash (placeholder)
- **Status**: 🔄 Needs extraction to data file

#### Resource Guides (9 guides)

- **Source**: Inline in `pages/resources/guides/[slug].astro`
- **Fields**: Complete with content
- **Images**: Unsplash (placeholder)
- **Status**: 🔄 Needs extraction to data file

#### Team Members (3 members)

- **Source**: `src/data/team.ts`
- **Fields**: Complete
- **Images**: UI Avatars (placeholder)
- **Status**: ✅ Structure ready for API

---

## Content Consistency Issues

### 1. Varying Depth of Content

**Problem**: Some pages highly detailed (homepage, about) while others sparse (contact, legal)

**Solution**:

- Create content templates for each page type
- Define minimum content requirements
- Use consistent section structures

### 2. Image Inconsistency

**Problem**: Mix of Unsplash, UI Avatars, local images

**Solution**:

- Define image requirements (size, format, alt text)
- Create image library in WordPress Media
- Use consistent image optimization (WebP, lazy loading)

### 3. Call-to-Action Inconsistency

**Problem**: Different CTA styles and placements across pages

**Solution**:

- Create `CallToAction.astro` component (exists)
- Define standard CTA patterns (primary, secondary, tertiary)
- Use consistently across all pages

### 4. Missing Content Sections

**Training Page** needs:

- Instructor profiles
- Student testimonials
- Certification pathways
- Schedule/calendar

**Events Page** needs:

- Past events archive
- Event categories explanation
- Registration process details

**Resources Page** needs:

- Featured resources
- Resource submission process
- Resource categories explanation

---

## Componentization Priority

### Phase 1 (High Impact - This Week)

1. ✅ Training page components
2. ✅ Events page components
3. ✅ Resources index components

### Phase 2 (Medium Impact - Next Week)

4. Search page components
5. Contractor search enhancements
6. Get Involved improvements

### Phase 3 (Polish - Week 3)

7. Legal page consistency
8. Contact form enhancements
9. Content refinement

---

## Content Guidelines

### Writing Style

- **Tone**: Professional, helpful, accessible
- **Voice**: Active voice, second person when appropriate
- **Length**:
  - Hero descriptions: 150-200 characters
  - Card descriptions: 50-100 words
  - Page content: 300-500 words per section

### SEO Requirements

- **Title**: 50-60 characters
- **Meta Description**: 150-160 characters
- **Keywords**: 3-5 primary, 5-10 secondary
- **Headings**: Proper H1-H6 hierarchy
- **Alt Text**: Descriptive, 125 characters max

### Image Requirements

- **Hero Images**: 1920x1080px, WebP, < 200 KB
- **Card Images**: 800x600px, WebP, < 100 KB
- **Thumbnails**: 400x300px, WebP, < 50 KB
- **Logos**: SVG preferred, PNG fallback

---

## WordPress Setup Checklist

### Required Plugins

- [ ] **Advanced Custom Fields Pro** - Custom fields
- [ ] **Custom Post Type UI** - Custom post types
- [ ] **WP REST API** - API access
- [ ] **Yoast SEO** - SEO management
- [ ] **Smush** - Image optimization
- [ ] **WPGraphQL** (optional) - GraphQL API

### API Configuration

- [ ] Enable REST API
- [ ] Configure CORS headers
- [ ] Set up authentication (if needed)
- [ ] Create API documentation
- [ ] Test all endpoints

### Content Import

- [ ] Prepare CSV/JSON exports
- [ ] Map fields to WordPress
- [ ] Import media files
- [ ] Verify data integrity
- [ ] Test build with real data

---

## Build Process Updates

### Current Build

```bash
1. Fetch data at build time (mock data)
2. Generate 56 static pages
3. Optimize images (58 cached)
4. Create search index (56 pages)
5. Generate sitemap
```

### Future Build (with WordPress)

```bash
1. Fetch data from WordPress API
2. Transform data to match interfaces
3. Generate static pages (same 56+)
4. Optimize images from WordPress Media
5. Create search index
6. Generate sitemap
```

**No Breaking Changes** - Same output, different data source

---

## Testing Strategy

### Component Testing

1. Test each component in isolation
2. Verify props interface matches data
3. Test responsive behavior
4. Check accessibility

### Integration Testing

1. Test full pages with components
2. Verify data flow from WordPress
3. Test build process end-to-end
4. Check SEO meta tags

### Performance Testing

1. Measure build time with real data
2. Check bundle size impact
3. Verify image optimization
4. Test page load times

---

## Content Migration Timeline

### Week 1: Component Creation

- [ ] Create training components
- [ ] Create events components
- [ ] Create resource components
- [ ] Create filter components

### Week 2: Data Extraction

- [ ] Extract training data to `src/data/training.ts`
- [ ] Extract events data to `src/data/events.ts`
- [ ] Extract resources data to `src/data/resources.ts`
- [ ] Update pages to use data files

### Week 3: WordPress Setup

- [ ] Install and configure WordPress
- [ ] Create custom post types
- [ ] Import mock data to WordPress
- [ ] Test API endpoints

### Week 4: API Integration

- [ ] Create WordPress fetch functions
- [ ] Update pages to fetch from API
- [ ] Test build process
- [ ] Deploy and verify

---

## Success Metrics

### Content Completeness

- ✅ All pages have consistent structure
- ✅ All images optimized and alt text
- ✅ All sections have meaningful content
- ✅ All CTAs properly placed

### WordPress Integration

- ✅ All custom post types created
- ✅ All data successfully migrated
- ✅ API endpoints working
- ✅ Build process automated

### Performance

- ✅ Build time < 15s with real data
- ✅ Bundle size unchanged
- ✅ All images optimized
- ✅ SEO scores maintained (98/100)

---

## Conclusion

The HPSC website has a **solid foundation** with 25% componentization complete. The remaining 75% follows established patterns and can be systematically componentized. WordPress integration is straightforward with existing data structures already matching WordPress custom post types.

### Immediate Next Steps:

1. Create shared component library
2. Componentize training, events, resources pages
3. Extract mock data to data files
4. Document WordPress integration

**Status**: Ready for systematic componentization and CMS integration 🚀

---

## Contact

For content questions:

- Content Strategy: HPSC Marketing Team
- WordPress Setup: DevOps Team
- Component Development: Claude Code Implementation

**Last Updated**: January 2025
**Next Review**: February 2025
