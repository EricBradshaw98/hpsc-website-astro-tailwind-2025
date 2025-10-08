# Spacing & Design Standards

## Overview

This document defines the standardized spacing and design patterns for all pages in the HPSC website.

## Layout Spacing

### Standard Pages

For content pages (About, Contact, Resources, etc.):

```astro
<Layout title="..." description="...">
	<!-- Content automatically gets container mx-auto px-4 py-8 max-w-7xl -->
</Layout>
```

### Full-Width Pages

For pages with full-width sections (Homepage, Landing Pages):

```astro
<Layout title="..." description="..." fullWidth={true}>
	<!-- No automatic container, each section manages its own width -->
</Layout>
```

## Spacing Scale (Tailwind)

### Vertical Spacing (py/mt/mb)

- **Section gaps**: `py-12` (3rem / 48px) - between major sections
- **Content blocks**: `py-8` (2rem / 32px) - between content blocks within sections
- **Element groups**: `py-4` (1rem / 16px) - between related elements
- **Tight spacing**: `py-2` (0.5rem / 8px) - within components

### Horizontal Spacing (px/ml/mr)

- **Page container**: `px-4` (1rem / 16px) - consistent on all pages
- **Card/component padding**: `p-6` (1.5rem / 24px) for desktop, `p-4` (1rem / 16px) for mobile
- **Grid gaps**: `gap-8` (2rem / 32px) for major grids, `gap-4` (1rem / 16px) for minor grids

### Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## Typography Scale

### Headings

```astro
<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page Title</h1>
<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Section Title</h2>
<h3 class="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Subsection</h3>
<h4 class="text-xl font-semibold text-gray-900 mb-3">Card Title</h4>
```

### Body Text

```astro
<p class="text-lg text-gray-700 leading-relaxed mb-4">Large body text</p>
<p class="text-base text-gray-600 leading-relaxed mb-4">Standard body text</p>
<p class="text-sm text-gray-600">Small text / captions</p>
```

## Component Patterns

### Page Header Pattern

```astro
<div class="mb-12">
	<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Page Title</h1>
	<p class="text-xl text-gray-600 max-w-3xl">Subtitle or description</p>
</div>
```

### Card Pattern

```astro
<div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
	<h3 class="text-xl font-semibold text-gray-900 mb-3">Card Title</h3>
	<p class="text-gray-600 leading-relaxed mb-4">Card content</p>
	<a href="..." class="text-primary hover:text-primary-dark font-medium"> Learn More → </a>
</div>
```

### Section Pattern

```astro
<section class="py-12 bg-gray-50">
	<div class="container mx-auto px-4 max-w-7xl">
		<h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Section Title</h2>
		<p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">Section description</p>
		<!-- Content -->
	</div>
</section>
```

### Grid Pattern

```astro
<!-- 3-column responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
	<!-- Cards -->
</div>

<!-- 2-column responsive grid -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
	<!-- Content blocks -->
</div>
```

## Color Palette

### Primary Colors

- **Primary**: `bg-primary` (#00b6f0) - Main brand color
- **Primary Light**: `bg-primary-light` (#33c4f3)
- **Primary Dark**: `bg-primary-dark` (#0095c7)

### Accent Colors

- **Cyan**: `bg-accent-cyan` (#abb8c3)
- **Pink**: `bg-accent-pink` (#f78da7)
- **Red**: `bg-accent-red` (#cf2e2e)
- **Orange**: `bg-accent-orange` (#ff6900)
- **Green**: `bg-accent-green` (#00d084)
- **Blue**: `bg-accent-blue` (#0693e3)
- **Purple**: `bg-accent-purple` (#9b51e0)

### Grays

- **Background**: `bg-gray-50` - Page backgrounds
- **Card**: `bg-white` - Card/component backgrounds
- **Text Primary**: `text-gray-900` - Headings
- **Text Secondary**: `text-gray-700` - Body text
- **Text Tertiary**: `text-gray-600` - Subtitles, captions
- **Borders**: `border-gray-200` - Dividers, borders

## Button Styles

### Primary Button

```astro
<button
	class="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg"
>
	Primary Action
</button>
```

### Secondary Button

```astro
<button
	class="px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
>
	Secondary Action
</button>
```

### Text Link

```astro
<a href="..." class="text-primary hover:text-primary-dark font-medium transition-colors">
	Link Text →
</a>
```

## Form Inputs

### Text Input

```astro
<input
	type="text"
	class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
	placeholder="Enter text..."
/>
```

### Select Dropdown

```astro
<select
	class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
>
	<option>Option 1</option>
</select>
```

### Textarea

```astro
<textarea
	rows="5"
	class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
	placeholder="Enter message..."></textarea>
```

## Animation Standards

### Transitions

- **Default duration**: `transition-colors duration-300`
- **Hover effects**: `hover:shadow-xl transition-shadow duration-300`
- **Transform**: `transition-transform duration-300`

### Hover States

```astro
<!-- Cards -->
<div class="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
	<!-- Buttons -->
	<button class="hover:bg-primary-dark transition-colors duration-300">
		<!-- Links -->
		<a class="hover:text-primary-dark transition-colors duration-200"></a></button>
</div>
```

## Accessibility Requirements

### Focus States

All interactive elements must have visible focus indicators:

```css
focus:ring-2 focus:ring-primary focus:border-primary outline-none
```

### Skip Links

Always available at top of page (see Layout.astro)

### ARIA Labels

All icons and decorative elements need proper ARIA labels:

```astro
<svg aria-hidden="true">...</svg>
<button aria-label="Close menu">...</button>
```

### Color Contrast

- Minimum contrast ratio: **4.5:1** for normal text
- Minimum contrast ratio: **3:1** for large text (18pt+)

## Responsive Design

### Mobile-First Approach

Always design for mobile first, then enhance for larger screens:

```astro
<!-- Mobile: stack vertically --><!-- Tablet: 2 columns --><!-- Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"></div>
```

### Common Responsive Patterns

```astro
<!-- Text size responsive -->
<h1 class="text-3xl sm:text-4xl md:text-5xl">
	<!-- Padding responsive -->
	<div class="p-4 md:p-6 lg:p-8">
		<!-- Grid responsive -->
		<div class="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Hide on mobile, show on desktop -->
			<div class="hidden md:block">
				<!-- Show on mobile, hide on desktop -->
				<div class="block md:hidden"></div>
			</div>
		</div>
	</div>
</h1>
```

## Image Standards

### Aspect Ratios

- **Hero images**: 16:9 (1920x1080)
- **Card images**: 4:3 (800x600)
- **Team photos**: 1:1 (400x400)
- **Logo images**: Maintain original aspect ratio

### Alt Text

Always provide descriptive alt text:

```astro
<Image src={image} alt="Descriptive text of what the image shows" />
```

### Lazy Loading

Images below the fold should lazy load (Astro does this automatically)

## Implementation Checklist

When creating a new page:

- [ ] Use Layout component with appropriate `fullWidth` setting
- [ ] Apply consistent heading hierarchy (h1 → h2 → h3)
- [ ] Use standardized spacing scale (py-8, py-12, gap-8, etc.)
- [ ] Implement responsive grid patterns
- [ ] Add hover states with transitions
- [ ] Ensure focus states on all interactive elements
- [ ] Provide ARIA labels where needed
- [ ] Test mobile, tablet, and desktop layouts
- [ ] Verify color contrast ratios
- [ ] Add proper breadcrumbs via Layout

## Examples

See these pages for reference:

- **Homepage**: Full-width pattern with sections (`fullWidth={true}`)
- **About page**: Standard content pattern with PageHeader component
- **Contact page**: Form patterns and grid layout
- **The Big Picture**: Custom component composition
