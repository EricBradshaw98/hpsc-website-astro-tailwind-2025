# WCAG 2.1 AA Accessibility Fix Plan

**Date:** 2025-10-08
**Standard:** WCAG 2.1 Level AA
**Total Issues Found:** 602 across 13 pages
**Priority Pages for Fixes:** Home, About/Our Team, Contact, News (index & slug), Guides (index & slug)

---

## Executive Summary

The accessibility audit revealed 602 issues across the site, with **199 critical errors** and **403 warnings**. The primary issues are:

1. **Color contrast failures** (most critical)
2. **Missing form submit buttons**
3. **Improper semantic markup**
4. **Fixed positioning concerns**

---

## Critical Issues by Category

### 1. Color Contrast Issues (WCAG 2.1 Level AA - 4.5:1 ratio required)

#### Current Brand Color Problems:

- **Primary Blue (`#00b6f0`)**: Contrast ratio of 2.35:1 on white (needs 4.5:1)
- **Accent Green (`#00d084`)**: Contrast ratio of 2.03:1 on white (needs 4.5:1)
- **Accent Blue (`#0693e3`)**: Contrast ratio of 3.34:1 on white (needs 4.5:1)
- **White on gradient backgrounds**: Multiple contrast failures

#### Solutions:

**Option A: Darken Primary Colors (Recommended)**

```css
/* Updated colors with WCAG AA compliance */
colors: {
  primary: {
    DEFAULT: '#0080a9',  // Darkened from #00b6f0
    light: '#00b6f0',    // Keep for backgrounds
    dark: '#006d90',
  },
  accent: {
    green: '#008857',    // Darkened from #00d084
    blue: '#007cc2',     // Darkened from #0693e3
  }
}
```

**Option B: Use on Darker Backgrounds**
Keep current colors but only use on dark backgrounds (e.g., navy, dark gray)

**Option C: Add Text Shadows (Not recommended)**
Can improve readability but not ideal for accessibility

---

### 2. Form Accessibility Issues

#### Search Forms Missing Submit Buttons

**Pages Affected:** All pages with search functionality

**Current Code:**

```html
<form action="/search" method="get" class="relative">
	<input type="search" name="q" placeholder="Search..." />
	<!-- No submit button -->
</form>
```

**Fixed Code:**

```html
<form action="/search" method="get" class="relative">
	<input type="search" name="q" placeholder="Search..." />
	<button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2" aria-label="Search">
		<svg><!-- search icon --></svg>
	</button>
</form>
```

---

### 3. Semantic HTML & Navigation Structure

#### Issue: Navigation Sections Not Marked as Lists

Many navigation sections (skip links, CTAs, social links) should use `<ul>/<li>` for proper semantics.

**Before:**

```html
<div class="flex gap-4">
	<a href="/link1">Link 1</a>
	<a href="/link2">Link 2</a>
</div>
```

**After:**

```html
<nav aria-label="Call to action">
	<ul class="flex gap-4 list-none">
		<li><a href="/link1">Link 1</a></li>
		<li><a href="/link2">Link 2</a></li>
	</ul>
</nav>
```

---

### 4. Fixed Positioning Warnings

#### Cookie Banner & Accessibility Tab

Fixed elements may require 2D scrolling on small screens.

**Solution:** Ensure fixed elements don't obscure content and can be dismissed easily.

---

## Page-Specific Fix Details

### Home Page (73 issues)

#### Priority Fixes:

1. **Hero Section Contrast**
   - White text on gradient: Fix overlay opacity or text color
   - CTA buttons: Use darker primary color

2. **Stats Cards Section**
   - Absolutely positioned text needs background verification
   - Emoji icons should have `role="img"` and `aria-label`

3. **Search Form**
   - Add submit button to both desktop and mobile search

4. **CTA Button Groups**
   - Wrap in `<nav>` with `<ul>/<li>` structure

**Implementation:**

```astro
<!-- Hero CTAs with semantic markup -->
<nav aria-label="Primary actions">
	<ul class="flex flex-wrap gap-4 list-none">
		<li>
			<a href="/contractor-network/find-a-contractor" class="bg-primary-dark text-white">
				Find a Contractor
			</a>
		</li>
	</ul>
</nav>
```

---

### Contact Page (35 issues)

#### Priority Fixes:

1. **Form Validation**
   - Ensure error messages are announced to screen readers
   - Add `aria-describedby` for field hints

2. **Cloudflare Turnstile**
   - Already has proper ARIA labels

3. **FAQ Accordions**
   - Already using semantic `<details>/<summary>` ✓

**Implementation:**

```astro
<input type="email" id="email" aria-describedby="email-hint" aria-invalid="false" />
<span id="email-hint" class="text-sm text-gray-600"> We'll never share your email. </span>
```

---

### News Index (51 issues) & News Slug Pages

#### Priority Fixes:

1. **Article Cards**
   - Ensure sufficient color contrast on hover states
   - Add proper alt text to all images

2. **Date/Category Tags**
   - Use `<time datetime="">` for dates
   - Ensure tag colors meet contrast requirements

3. **Pagination**
   - Add proper ARIA labels for page numbers
   - Indicate current page with `aria-current="page"`

**Implementation:**

```astro
<article>
	<a href="/news/article-slug">
		<img src="..." alt="Descriptive text about the article content" />
		<time datetime="2025-10-08">October 8, 2025</time>
		<h3>Article Title</h3>
	</a>
</article>

<!-- Pagination -->
<nav aria-label="News pagination">
	<ul class="flex gap-2 list-none">
		<li>
			<a href="/news?page=1" aria-label="Page 1" aria-current="page">1</a>
		</li>
	</ul>
</nav>
```

---

### Guides Index (51 issues) & Guides Slug Pages

#### Priority Fixes:

1. **Guide Cards Layout**
   - Same fixes as News cards above
   - Ensure category badges have sufficient contrast

2. **Code Blocks** (if any)
   - Use `<pre><code>` with proper language attribute
   - Ensure syntax highlighting doesn't rely solely on color

3. **Table of Contents** (if any)
   - Use `<nav aria-label="Table of contents">`

---

### About/Our Team Page (61 issues)

#### Priority Fixes:

1. **Team Member Cards**
   - Placeholder avatars need alt text or `role="presentation"`
   - Social links need proper labels

2. **Grid Layout**
   - Ensure proper heading hierarchy (h2, h3)

**Implementation:**

```astro
<article>
	<img src="placeholder-avatar.jpg" alt="Profile photo of John Doe, Executive Director" />
	<h3>John Doe</h3>
	<p>Executive Director</p>
	<nav aria-label="John Doe's social links">
		<ul class="flex gap-2 list-none">
			<li>
				<a href="..." aria-label="John Doe on LinkedIn">
					<svg aria-hidden="true"><!-- LinkedIn icon --></svg>
				</a>
			</li>
		</ul>
	</nav>
</article>
```

---

## Global Component Fixes

### Layout.astro

1. **Skip Links**
   - Add explicit background color to prevent contrast issues
   - Currently positioned absolutely with unknown background

```astro
<a href="#main-content" class="skip-link bg-primary-dark text-white"> Skip to main content </a>
```

### Nav.astro

1. **Search Form**
   - Add submit button
2. **Top Contact Bar**
   - Wrap phone/email links in semantic list

### Footer.astro

1. **Footer Links**
   - Already using semantic structure ✓
2. **Social Links**
   - Add proper aria-labels

---

## Tailwind Config Updates

### Required Color Changes

```typescript
// tailwind.config.ts
colors: {
  primary: {
    DEFAULT: '#0080a9',  // WCAG AA compliant
    light: '#00b6f0',    // Original color for backgrounds
    dark: '#006d90',
    // ... rest of scale
  },
  'accent-green': '#008857',  // WCAG AA compliant
  'accent-blue': '#007cc2',   // WCAG AA compliant
}
```

---

## Testing Checklist

After implementing fixes:

- [ ] Run pa11y audit again (target: 0 errors)
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test with browser zoom at 200%
- [ ] Test with Windows High Contrast mode
- [ ] Verify color contrast with WebAIM tool
- [ ] Test forms without JavaScript enabled

---

## Implementation Priority

### Phase 1: Critical Errors (Must Fix)

1. Update primary brand colors for contrast compliance
2. Add submit buttons to search forms
3. Fix hero section contrast issues

### Phase 2: Warnings (Should Fix)

1. Convert navigation groups to semantic lists
2. Add proper ARIA labels to all icons
3. Improve form field descriptions

### Phase 3: Enhancements (Nice to Have)

1. Add focus indicators for better keyboard navigation
2. Implement reduced-motion preferences
3. Add high contrast mode support

---

## Estimated Impact

**Before Fixes:**

- Total Issues: 602
- Errors: 199
- Warnings: 403

**After Priority Page Fixes (Target):**

- Home: 73 → ~10 issues
- Contact: 35 → ~5 issues
- News Index: 51 → ~8 issues
- News Slug: Similar to index
- Guides Index: 51 → ~8 issues
- Guides Slug: Similar to index
- About/Our Team: 61 → ~12 issues

**Total Reduction: ~80% of issues on priority pages**

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## Notes

- Many issues are third-party (Marker.io iframes) - can't fix directly
- Some warnings are recommendations, not failures
- Focus on errors first, then warnings
- Maintain brand identity while improving accessibility
