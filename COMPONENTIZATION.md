# Component Structure Documentation

## Overview

The homepage has been fully componentized with WordPress headless CMS integration in mind. All data is extracted as props at the page level, ready to be replaced with WordPress API calls.

## Folder Structure

```
src/components/
├── home/                    # Homepage-specific components
│   ├── HeroSection.astro
│   ├── ServicesSection.astro
│   ├── StatsCards.astro
│   ├── ParallaxCTA.astro
│   ├── WeWorkWithSection.astro
│   ├── SupportersCarousel.astro
│   └── LatestNews.astro
├── shared/                  # Reusable across multiple pages
│   ├── NewsCard.astro      # Used in homepage + news pages
│   └── ServiceCard.astro   # Used in services sections
├── about/                   # About page components (future)
├── contractor-network/      # Contractor pages (future)
├── resources/               # Resources pages (future)
├── news/                    # News pages (future)
├── search/                  # Search page (future)
├── ui/                      # UI primitives (future)
└── layouts/                 # Layout components (existing)
    ├── Nav.astro
    ├── Footer.astro
    └── Breadcrumbs.astro
```

## Homepage (index.astro)

### Before: 1,330 lines

### After: 285 lines (78% reduction!)

All sections are now clean, composable components with TypeScript interfaces.

## WordPress Integration Plan

### Current Structure

```typescript
// Static data in index.astro
const heroData = {
  title: 'Building a More Energy-Efficient Future',
  description: '...',
  images: [...],
  ctas: [...]
};
```

### Future WordPress Structure

```typescript
// Fetch from WordPress ACF fields
const wpPage = await fetch('https://your-wp.com/wp-json/wp/v2/pages/home').then((r) => r.json());

const heroData = {
	title: wpPage.acf.hero_title,
	description: wpPage.acf.hero_description,
	images: wpPage.acf.hero_images.map((img) => ({
		src: img.sizes.large,
		alt: img.alt,
	})),
	ctas: wpPage.acf.hero_ctas,
};
```

## Component Props Documentation

### HeroSection

```typescript
interface HeroSectionProps {
	title: string;
	description: string;
	images: Array<{ src: string; alt: string }>;
	ctas: Array<{ text: string; href: string; style: 'primary' | 'secondary' }>;
}
```

**WordPress Mapping:**

- ACF Group: `hero_section`
- Fields: `hero_title`, `hero_description`, `hero_images` (gallery), `hero_ctas` (repeater)

### ServicesSection

```typescript
interface ServicesSectionProps {
	heading: string;
	description: string;
	services: ServiceCardProps[];
}
```

**WordPress Mapping:**

- ACF Group: `services_section`
- Custom Post Type: `services` (optional)
- Fields: `services_heading`, `services_description`, `services` (repeater)

### StatsCards

```typescript
interface StatsCardsProps {
	stats: Array<{
		emoji: string;
		statNumber: string;
		title: string;
		description: string;
		details: string;
		detailsSubtext: string;
		image: { src: string; alt: string };
		bgColor: string;
		textColor: string;
		link: { text: string; href: string };
	}>;
}
```

**WordPress Mapping:**

- ACF Repeater: `stats_cards`
- Fields: emoji, stat_number, title, description, etc.

### ParallaxCTA

```typescript
interface ParallaxCTAProps {
	backgroundImage: string;
	heading: string;
	description: string;
	ctas: Array<{ text: string; href: string; style: 'primary' | 'secondary' }>;
}
```

**WordPress Mapping:**

- ACF Group: `parallax_cta`
- Fields: `cta_background_image`, `cta_heading`, `cta_description`, `cta_buttons` (repeater)

### WeWorkWithSection

```typescript
interface WeWorkWithSectionProps {
	heading: string;
	description: string;
	industry: string;
	stakeholders: Array<{ label: string }>;
	sectors: Array<{ name: string; icon: string }>;
}
```

**WordPress Mapping:**

- ACF Group: `we_work_with`
- Fields: `wwith_industry`, `wwith_stakeholders` (repeater), `wwith_sectors` (repeater)

### SupportersCarousel

```typescript
interface SupportersCarouselProps {
	heading: string;
	description: string;
	supporters: Array<{ name: string; logo: string; alt: string }>;
}
```

**WordPress Mapping:**

- ACF Group: `supporters`
- Fields: `supporters_heading`, `supporters_description`, `supporters_list` (repeater with image)

### LatestNews

```typescript
interface LatestNewsProps {
	heading: string;
	viewAllLink: { text: string; href: string };
	articles: NewsCardProps[];
}
```

**WordPress Mapping:**

- REST API: `/wp-json/wp/v2/posts?per_page=6&orderby=date&order=desc`
- Map to NewsCardProps format

### NewsCard (Shared)

```typescript
interface NewsCardProps {
	title: string;
	slug: string;
	excerpt: string;
	date: string;
	featuredImage: { src: string; alt: string };
	category?: string;
}
```

**WordPress Mapping:**

- Standard WordPress Post fields
- `title.rendered`, `slug`, `excerpt.rendered`, `date`, `_embedded['wp:featuredmedia']`

## Next Steps for Other Pages

### About Page Components to Extract:

- `src/components/about/HomePerformanceSection.astro`
- `src/components/about/IndustrySection.astro`
- `src/components/about/HouseSystemApproach.astro`
- `src/components/about/LandAcknowledgment.astro`
- `src/components/about/CTACards.astro`

### Contractor Network Components:

- `src/components/contractor-network/ContractorCard.astro`
- `src/components/contractor-network/FindContractorForm.astro`
- `src/components/contractor-network/ContractorList.astro`

### Resources Components:

- `src/components/resources/ResourceCard.astro`
- `src/components/resources/ResourceFilters.astro`
- `src/components/resources/DocumentCard.astro`
- `src/components/resources/GuideCard.astro`

## Benefits Achieved

1. **Reduced File Sizes**: Homepage went from 1,330 → 285 lines
2. **Type Safety**: Full TypeScript interfaces for all props
3. **Reusability**: NewsCard, ServiceCard used in multiple places
4. **Maintainability**: Change once, updates everywhere
5. **WordPress Ready**: Props structured for easy API integration
6. **Testability**: Components can be tested in isolation
7. **Performance**: Easier to optimize individual components

## WordPress Integration Example

```typescript
// src/pages/index.astro
import { fetchWordPressPage } from '../lib/wordpress';

// Fetch homepage data from WordPress
const wpData = await fetchWordPressPage('homepage');

const heroData = {
	title: wpData.acf.hero_title,
	description: wpData.acf.hero_description,
	images: wpData.acf.hero_images.map((img) => ({
		src: img.url,
		alt: img.alt,
	})),
	ctas: wpData.acf.hero_ctas,
};

// Fetch latest posts
const posts = await fetch(`${WP_URL}/wp-json/wp/v2/posts?per_page=6&_embed`).then((r) => r.json());
const latestNewsData = {
	heading: 'Latest News',
	viewAllLink: { text: 'View All', href: '/resources/news' },
	articles: posts.map((post) => ({
		title: post.title.rendered,
		slug: post.slug,
		excerpt: post.excerpt.rendered,
		date: post.date,
		featuredImage: {
			src: post._embedded['wp:featuredmedia']?.[0]?.source_url || '',
			alt: post._embedded['wp:featuredmedia']?.[0]?.alt_text || '',
		},
	})),
};
```

## Recommended WordPress ACF Structure

### Page: Homepage (Flexible Content)

- Hero Section (Group)
- Services Section (Repeater)
- Stats Cards (Repeater)
- Parallax CTA (Group)
- We Work With (Group with Repeaters)
- Supporters (Repeater)

### Custom Post Types

- `services` - Service offerings
- `team_members` - Team page
- `contractors` - Contractor directory
- `resources` - Documents/guides
- Standard `posts` - News articles

## Notes

- All components export their Props interfaces for reuse
- Components use Astro's Image component for optimization
- Scripts are co-located with components
- Data structures match WordPress REST API format
- Ready for incremental WordPress migration
