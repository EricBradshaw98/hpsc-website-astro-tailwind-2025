/**
 * WordPress REST API Integration
 * Handles fetching pages, posts, and other content from WordPress
 */

export interface WordPressPage {
	id: number;
	date: string;
	modified: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
		protected: boolean;
	};
	excerpt: {
		rendered: string;
		protected: boolean;
	};
	author: number;
	featured_media: number;
	featured_image_url?: string;
	parent: number;
	menu_order: number;
	template: string;
	// Yoast SEO fields (if Yoast is installed)
	yoast_head?: string;
	yoast_head_json?: {
		title: string;
		description: string;
		robots: {
			index: string;
			follow: string;
		};
		og_title?: string;
		og_description?: string;
		og_image?: Array<{
			url: string;
			width: number;
			height: number;
		}>;
		twitter_card?: string;
		twitter_title?: string;
		twitter_description?: string;
		twitter_image?: string;
	};
	// ACF (Advanced Custom Fields) - customize based on your setup
	acf?: {
		show_page_header?: boolean;
		page_header?: {
			title?: string;
			subtitle?: string;
			background_image?: string;
		};
		breadcrumbs?: Array<{
			label: string;
			href: string;
		}>;
		content_blocks?: Array<{
			acf_fc_layout: string;
			[key: string]: any;
		}>;
		[key: string]: any;
	};
	_embedded?: {
		author?: Array<{
			name: string;
			slug: string;
		}>;
		'wp:featuredmedia'?: Array<{
			source_url: string;
			alt_text: string;
		}>;
	};
}

export interface WordPressPost {
	id: number;
	date: string;
	modified: string;
	slug: string;
	status: string;
	type: string;
	link: string;
	title: {
		rendered: string;
	};
	content: {
		rendered: string;
	};
	excerpt: {
		rendered: string;
	};
	author: number;
	featured_media: number;
	featured_image_url?: string;
	categories: number[];
	tags: number[];
	yoast_head_json?: any;
	acf?: any;
}

// WordPress API Configuration
const WP_API_URL =
	import.meta.env.PUBLIC_WP_API_URL || 'https://your-wordpress-site.com/wp-json/wp/v2';
const WP_API_USERNAME = import.meta.env.WP_API_USERNAME;
const WP_API_PASSWORD = import.meta.env.WP_API_PASSWORD;

/**
 * Create basic auth header if credentials are provided
 */
function getAuthHeader(): Record<string, string> {
	if (WP_API_USERNAME && WP_API_PASSWORD) {
		const credentials = Buffer.from(`${WP_API_USERNAME}:${WP_API_PASSWORD}`).toString('base64');
		return {
			Authorization: `Basic ${credentials}`,
		};
	}
	return {};
}

/**
 * Fetch a single WordPress page by slug
 */
export async function getWordPressPage(slug: string): Promise<WordPressPage | null> {
	try {
		// Convert nested slugs (e.g., "about/team") to WordPress hierarchy
		const response = await fetch(`${WP_API_URL}/pages?slug=${encodeURIComponent(slug)}&_embed=1`, {
			headers: {
				...getAuthHeader(),
			},
		});

		if (!response.ok) {
			// WordPress API error
			return null;
		}

		const pages: WordPressPage[] = await response.json();

		if (pages.length === 0) {
			// No page found with slug
			return null;
		}

		const page = pages[0];

		// Add featured image URL if available
		if (page._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
			page.featured_image_url = page._embedded['wp:featuredmedia'][0].source_url;
		}

		return page;
	} catch {
		// Error fetching WordPress page
		return null;
	}
}

/**
 * Fetch all WordPress pages (for static generation)
 */
export async function getAllWordPressPages(perPage: number = 100): Promise<WordPressPage[]> {
	try {
		let allPages: WordPressPage[] = [];
		let page = 1;
		let hasMore = true;

		while (hasMore) {
			const response = await fetch(
				`${WP_API_URL}/pages?per_page=${perPage}&page=${page}&_embed=1&status=publish`,
				{
					headers: {
						...getAuthHeader(),
					},
				}
			);

			if (!response.ok) {
				// WordPress API error
				break;
			}

			const pages: WordPressPage[] = await response.json();

			// Add featured image URLs
			pages.forEach((p) => {
				if (p._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
					p.featured_image_url = p._embedded['wp:featuredmedia'][0].source_url;
				}
			});

			allPages = [...allPages, ...pages];

			// Check if there are more pages
			const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
			hasMore = page < totalPages;
			page++;
		}

		return allPages;
	} catch {
		// Error fetching all WordPress pages
		return [];
	}
}

/**
 * Fetch a single WordPress post by slug
 */
export async function getWordPressPost(slug: string): Promise<WordPressPost | null> {
	try {
		const response = await fetch(`${WP_API_URL}/posts?slug=${encodeURIComponent(slug)}&_embed=1`, {
			headers: {
				...getAuthHeader(),
			},
		});

		if (!response.ok) {
			return null;
		}

		const posts: WordPressPost[] = await response.json();

		if (posts.length === 0) {
			return null;
		}

		const post = posts[0];

		// Add featured image URL
		if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
			post.featured_image_url = post._embedded['wp:featuredmedia'][0].source_url;
		}

		return post;
	} catch {
		// Error fetching WordPress post
		return null;
	}
}

/**
 * Fetch all WordPress posts with pagination
 */
export async function getWordPressPosts(
	page: number = 1,
	perPage: number = 10,
	categories?: number[]
): Promise<{ posts: WordPressPost[]; totalPages: number; total: number }> {
	try {
		let url = `${WP_API_URL}/posts?per_page=${perPage}&page=${page}&_embed=1&status=publish`;

		if (categories && categories.length > 0) {
			url += `&categories=${categories.join(',')}`;
		}

		const response = await fetch(url, {
			headers: {
				...getAuthHeader(),
			},
		});

		if (!response.ok) {
			return { posts: [], totalPages: 0, total: 0 };
		}

		const posts: WordPressPost[] = await response.json();

		// Add featured image URLs
		posts.forEach((p) => {
			if (p._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
				p.featured_image_url = p._embedded['wp:featuredmedia'][0].source_url;
			}
		});

		const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '0');
		const total = parseInt(response.headers.get('X-WP-Total') || '0');

		return { posts, totalPages, total };
	} catch {
		// Error fetching WordPress posts
		return { posts: [], totalPages: 0, total: 0 };
	}
}

/**
 * Search WordPress content
 */
export async function searchWordPress(
	query: string,
	type: 'posts' | 'pages' | 'all' = 'all',
	perPage: number = 10
): Promise<Array<WordPressPage | WordPressPost>> {
	try {
		const endpoint = type === 'all' ? 'search' : type;
		const response = await fetch(
			`${WP_API_URL}/${endpoint}?search=${encodeURIComponent(query)}&per_page=${perPage}&_embed=1`,
			{
				headers: {
					...getAuthHeader(),
				},
			}
		);

		if (!response.ok) {
			return [];
		}

		return await response.json();
	} catch {
		// Error searching WordPress
		return [];
	}
}

/**
 * Get WordPress menus (requires WP REST API Menus plugin or custom endpoint)
 */
export async function getWordPressMenu(menuSlug: string): Promise<any> {
	try {
		// Note: You may need to install a plugin like "WP-REST-API V2 Menus"
		// or create a custom endpoint for menus
		const response = await fetch(`${WP_API_URL}/menus/v1/menus/${menuSlug}`, {
			headers: {
				...getAuthHeader(),
			},
		});

		if (!response.ok) {
			return null;
		}

		return await response.json();
	} catch {
		// Error fetching WordPress menu
		return null;
	}
}

/**
 * Revalidate/clear cache (for ISR or on-demand revalidation)
 * This is a placeholder - implement based on your hosting platform
 */
export async function revalidateWordPressContent(_slug: string): Promise<void> {
	// Implement based on your hosting platform:
	// - Netlify: Use build hooks
	// - Vercel: Use revalidate API
	// - Cloudflare: Use KV cache purge
	// Placeholder for future implementation
}
