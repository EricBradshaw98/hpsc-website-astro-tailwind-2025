/**
 * WordPress Integration Examples
 * Copy these examples into your Astro pages to use WordPress content
 */

import {
	getWordPressPage,
	getAllWordPressPages,
	getWordPressPosts,
	searchWordPress,
} from './wordpress';

/**
 * Example 1: Fetch a Single Page by Slug
 * Use in any Astro page component
 */
export async function exampleFetchSinglePage() {
	const page = await getWordPressPage('about');

	if (!page) {
		// Page not found
		return null;
	}

	return {
		title: page.title.rendered,
		content: page.content.rendered,
		excerpt: page.excerpt.rendered,
		featuredImage: page.featured_image_url,
		acf: page.acf,
		yoast: page.yoast_head_json,
	};
}

/**
 * Example 2: Fetch All Pages for Static Generation
 * Use in getStaticPaths()
 */
export async function exampleFetchAllPages() {
	const pages = await getAllWordPressPages();

	return pages.map((page) => ({
		params: { slug: page.slug },
		props: {
			title: page.title.rendered,
			content: page.content.rendered,
			...page,
		},
	}));
}

/**
 * Example 3: Fetch Latest Blog Posts
 * Use on homepage or blog listing page
 */
export async function exampleFetchLatestPosts(limit = 5) {
	const { posts } = await getWordPressPosts(1, limit);

	return posts.map((post) => ({
		title: post.title.rendered,
		excerpt: post.excerpt.rendered,
		slug: post.slug,
		date: post.date,
		featuredImage: post.featured_image_url,
		url: `/news/${post.slug}`,
	}));
}

/**
 * Example 4: Fetch Posts with Pagination
 * Use for paginated blog listing
 */
export async function exampleFetchPaginatedPosts(currentPage = 1, postsPerPage = 10) {
	const { posts, totalPages, total } = await getWordPressPosts(currentPage, postsPerPage);

	return {
		posts: posts.map((post) => ({
			title: post.title.rendered,
			excerpt: post.excerpt.rendered,
			slug: post.slug,
			date: new Date(post.date).toLocaleDateString(),
			featuredImage: post.featured_image_url,
		})),
		pagination: {
			currentPage,
			totalPages,
			totalPosts: total,
			hasNextPage: currentPage < totalPages,
			hasPrevPage: currentPage > 1,
		},
	};
}

/**
 * Example 5: Search WordPress Content
 * Use for search functionality
 */
export async function exampleSearchContent(query: string) {
	const results = await searchWordPress(query, 'all', 20);

	return results.map((item) => ({
		title: item.title.rendered,
		excerpt: item.excerpt?.rendered || '',
		slug: item.slug,
		type: item.type,
		url: item.type === 'post' ? `/news/${item.slug}` : `/${item.slug}`,
	}));
}

/**
 * Example 6: Fetch Posts by Category
 * Use for category-specific listings
 */
export async function exampleFetchPostsByCategory(categoryId: number) {
	const { posts } = await getWordPressPosts(1, 10, [categoryId]);

	return posts.map((post) => ({
		title: post.title.rendered,
		excerpt: post.excerpt.rendered,
		slug: post.slug,
		featuredImage: post.featured_image_url,
	}));
}

/**
 * Example 7: Using ACF Fields in Components
 * Example Astro component using ACF data
 */
export function exampleACFUsage() {
	return `
---
import { getWordPressPage } from '../lib/wordpress';

const page = await getWordPressPage('services');

// Access ACF fields
const showHeader = page?.acf?.show_page_header;
const headerTitle = page?.acf?.page_header?.title;
const contentBlocks = page?.acf?.content_blocks || [];
---

{showHeader && (
	<section class="hero">
		<h1>{headerTitle || page?.title.rendered}</h1>
	</section>
)}

{contentBlocks.map(block => {
	if (block.acf_fc_layout === 'text_block') {
		return <div set:html={block.content} />;
	}
	if (block.acf_fc_layout === 'image_block') {
		return <img src={block.image.url} alt={block.image.alt} />;
	}
})}
	`;
}

/**
 * Example 8: Using in [slug].astro Dynamic Route
 */
export function exampleDynamicRoute() {
	return `
---
import Layout from '../layouts/Layout.astro';
import { getWordPressPage, getAllWordPressPages } from '../lib/wordpress';

export async function getStaticPaths() {
	const pages = await getAllWordPressPages();
	return pages.map(page => ({
		params: { slug: page.slug },
		props: { page }
	}));
}

const { page } = Astro.props;
---

<Layout title={page.title.rendered}>
	<article>
		<h1>{page.title.rendered}</h1>
		<div set:html={page.content.rendered} />
	</article>
</Layout>
	`;
}

/**
 * Example 9: Custom Post Type Support
 * Modify wordpress.ts to add support for custom post types
 */
export function exampleCustomPostType() {
	return `
// Add this to wordpress.ts

export async function getCustomPostType(
	postType: string,
	slug?: string
): Promise<any> {
	const url = slug
		? \`\${WP_API_URL}/\${postType}?slug=\${slug}\`
		: \`\${WP_API_URL}/\${postType}\`;

	const response = await fetch(url);
	const data = await response.json();

	return slug ? data[0] : data;
}

// Usage in Astro:
const events = await getCustomPostType('events');
const singleEvent = await getCustomPostType('events', 'summer-workshop');
	`;
}

/**
 * Example 10: Error Handling and Fallbacks
 */
export async function exampleErrorHandling() {
	try {
		const page = await getWordPressPage('about');

		if (!page) {
			// Fallback to static content or show error
			return {
				title: 'Page Not Found',
				content: '<p>This page could not be loaded from WordPress.</p>',
				isError: true,
			};
		}

		return {
			title: page.title.rendered,
			content: page.content.rendered,
			isError: false,
		};
	} catch {
		// WordPress API Error - Return fallback content
		return {
			title: 'Error Loading Page',
			content: '<p>An error occurred while loading this page. Please try again later.</p>',
			isError: true,
		};
	}
}
