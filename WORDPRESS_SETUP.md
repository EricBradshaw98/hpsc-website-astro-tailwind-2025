# WordPress Headless CMS Setup Guide

This document explains how to integrate your WordPress site with this Astro frontend using the catch-all route system.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [WordPress Configuration](#wordpress-configuration)
- [Environment Setup](#environment-setup)
- [Content Structure](#content-structure)
- [ACF Field Setup](#acf-field-setup)
- [Testing](#testing)
- [Deployment](#deployment)

---

## Architecture Overview

This site uses a **headless WordPress** architecture:

- **WordPress Backend**: Manages all content via the WordPress admin panel
- **Astro Frontend**: Fetches content from WordPress REST API and renders static pages
- **Catch-All Route**: `src/pages/[...slug].astro` handles all WordPress pages dynamically

### How It Works

1. **Build Time**: Astro fetches all published WordPress pages
2. **Static Generation**: Each page is pre-rendered as static HTML
3. **Dynamic Routing**: The `[...slug].astro` file matches any URL pattern
4. **Fallback**: If a page doesn't exist, redirects to 404

### URL Structure Examples

| WordPress Slug       | Astro Route       | URL                   |
| -------------------- | ----------------- | --------------------- |
| `about`              | `[...slug].astro` | `/about`              |
| `about/team`         | `[...slug].astro` | `/about/team`         |
| `training`           | `[...slug].astro` | `/training`           |
| `events/summer-2025` | `[...slug].astro` | `/events/summer-2025` |

---

## WordPress Configuration

### Required Plugins

1. **WordPress REST API** (included in WordPress 4.7+)
   - No installation needed - built into WordPress

2. **Yoast SEO** (recommended)
   - Provides SEO metadata via REST API
   - Install: Plugins → Add New → Search "Yoast SEO"

3. **Advanced Custom Fields (ACF) PRO** (recommended)
   - Enables custom fields for flexible page layouts
   - Install: https://www.advancedcustomfields.com/

4. **ACF to REST API** (if using ACF)
   - Exposes ACF fields in REST API responses
   - Install: Plugins → Add New → Search "ACF to REST API"

### WordPress REST API Setup

1. **Enable REST API**
   - Settings → Permalinks → Save Changes (ensures REST API is active)
   - Test: Visit `https://your-site.com/wp-json/wp/v2/pages`

2. **Expose Necessary Fields**
   - Go to Settings → Reading
   - Ensure "Discourage search engines" is UNCHECKED (for production)

3. **Create Application Password** (for private content)
   - Users → Your Profile
   - Scroll to "Application Passwords"
   - Create new password with name "Astro Frontend"
   - Copy credentials to `.env` file

---

## Environment Setup

### 1. Copy Environment Variables

```bash
cp .env.example .env
```

### 2. Configure WordPress API

Edit `.env`:

```bash
# Your WordPress REST API URL
PUBLIC_WP_API_URL=https://your-wordpress-site.com/wp-json/wp/v2

# Optional: For private/draft content
WP_API_USERNAME=your-username
WP_API_PASSWORD=your-application-password
```

### 3. Test Connection

```bash
# Start dev server
npm run dev

# Visit http://localhost:4321/test-page
# (Replace with an actual WordPress page slug)
```

---

## Content Structure

### WordPress Page Setup

1. **Create a Page in WordPress**
   - Pages → Add New
   - Set Title and Content
   - Set Slug (URL-friendly version)
   - Publish

2. **Page Slug = Astro Route**

   ```
   WordPress Slug: "about"         → Astro URL: /about
   WordPress Slug: "contact-us"    → Astro URL: /contact-us
   WordPress Slug: "services/hvac" → Astro URL: /services/hvac
   ```

3. **Parent/Child Pages**
   - WordPress handles hierarchy automatically
   - Use Page Attributes → Parent to create nested URLs

---

## ACF Field Setup

### Recommended ACF Field Groups

#### 1. Page Header Settings

```
Field Group: "Page Header"
Location: Post Type = Page

Fields:
- show_page_header (True/False)
- page_header (Group)
  - title (Text)
  - subtitle (Textarea)
  - background_image (Image)
```

#### 2. Flexible Content Blocks

```
Field Group: "Content Blocks"
Location: Post Type = Page

Fields:
- content_blocks (Flexible Content)
  - text_block
    - content (WYSIWYG)
  - image_block
    - image (Image)
    - caption (Text)
  - cta_block
    - title (Text)
    - description (Textarea)
    - button_text (Text)
    - button_link (URL)
  - two_column_block
    - left_column (WYSIWYG)
    - right_column (WYSIWYG)
```

#### 3. SEO & Breadcrumbs

```
Field Group: "SEO Settings"
Location: Post Type = Page

Fields:
- breadcrumbs (Repeater)
  - label (Text)
  - href (Text)
```

### ACF JSON Export

To share ACF fields across environments:

1. Create folder: `wp-content/acf-json/`
2. ACF automatically saves field groups as JSON
3. Version control these JSON files
4. Import on other environments

---

## Page Templates

### Default Template

All WordPress pages use the default template in `[...slug].astro` unless customized.

### Custom Templates (Advanced)

To create custom templates for specific page types:

1. **In WordPress**:
   - Create page template in theme
   - Assign template to page

2. **In Astro**:
   - Check `page.template` field
   - Conditionally render components

Example:

```astro
---
// src/pages/[...slug].astro
import EventsTemplate from '../components/templates/EventsTemplate.astro';
import DefaultTemplate from '../components/templates/DefaultTemplate.astro';

const Template = page.template === 'template-events.php' ? EventsTemplate : DefaultTemplate;
---

<Template page={page} />
```

---

## Testing

### 1. Test WordPress API Directly

```bash
# List all pages
curl https://your-site.com/wp-json/wp/v2/pages

# Get specific page by slug
curl https://your-site.com/wp-json/wp/v2/pages?slug=about

# With authentication
curl -u username:password https://your-site.com/wp-json/wp/v2/pages?status=draft
```

### 2. Test in Development

```bash
npm run dev
# Visit http://localhost:4321/[your-wp-slug]
```

### 3. Test Build

```bash
npm run build
# Check that all WordPress pages are generated in dist/
```

---

## Deployment

### Build Process

1. **Fetch WordPress Content**
   - During `npm run build`, Astro calls `getAllWordPressPages()`
   - All published pages are fetched at build time

2. **Generate Static Pages**
   - Each WordPress page becomes a static HTML file
   - Extremely fast, cached by CDN

3. **Deploy to Cloudflare Pages**
   ```bash
   npm run build
   # Cloudflare Pages automatically deploys dist/ folder
   ```

### Rebuild Strategy

**When to rebuild:**

- New page published in WordPress
- Content updated in WordPress
- ACF fields changed

**Options:**

1. **Manual Rebuild**
   - Cloudflare Pages → Deployments → Retry deployment

2. **Webhook (Recommended)**
   - WordPress: Install "Cloudflare Pages Deploy" plugin
   - Set up webhook URL from Cloudflare
   - Auto-rebuild when content is published/updated

3. **Scheduled Builds**
   - Cloudflare Workers: Set up cron job
   - Rebuild every X hours/days

---

## Content Migration Strategy

### Migrating Existing Pages to WordPress

Currently static pages that should move to WordPress:

#### Root Level Pages

- `/about` → WordPress page with slug "about"
- `/contact` → WordPress page with slug "contact"
- `/training` → WordPress page with slug "training"
- `/events` → WordPress page with slug "events"
- `/get-involved` → WordPress page with slug "get-involved"
- `/the-big-picture` → WordPress page with slug "the-big-picture"

#### Nested Pages

- `/about/our-team` → WordPress page with slug "our-team" (parent: about)
- `/about/strategy` → WordPress page with slug "strategy" (parent: about)
- `/contractor-network` → WordPress page with slug "contractor-network"

### Migration Steps

1. **Create WordPress page**
2. **Copy content** from existing Astro page
3. **Set slug** to match current URL
4. **Add ACF fields** as needed
5. **Test** the WordPress version
6. **Remove** or rename old Astro file
7. **Rebuild** and deploy

---

## Troubleshooting

### "No page found" Error

- Check WordPress page is published (not draft)
- Verify slug matches URL exactly
- Check REST API is accessible: `/wp-json/wp/v2/pages`

### 404 on All WordPress Pages

- Verify `PUBLIC_WP_API_URL` in `.env`
- Check WordPress permalinks are enabled
- Test API endpoint directly in browser

### ACF Fields Not Showing

- Install "ACF to REST API" plugin
- Check field group is assigned to "Pages"
- Verify fields are not hidden from REST API

### Build Fails

- WordPress site must be accessible during build
- Check authentication credentials
- Verify all required environment variables are set

---

## Resources

- [WordPress REST API Documentation](https://developer.wordpress.org/rest-api/)
- [ACF Documentation](https://www.advancedcustomfields.com/resources/)
- [Yoast SEO API](https://developer.yoast.com/features/wp-rest-api/overview/)
- [Astro Dynamic Routes](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes)

---

## Support

For questions or issues:

1. Check this documentation
2. Test WordPress API directly
3. Check browser console for errors
4. Review build logs on Cloudflare Pages
