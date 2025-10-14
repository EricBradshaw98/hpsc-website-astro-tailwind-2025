/**
 * Guide metadata for all guides
 * This file contains only the metadata - full guide content is in [slug].astro
 */

export interface GuideMetadata {
	slug: string;
	title: string;
	description: string;
	category: 'Homeowners' | 'Contractors' | 'Policy';
	difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
	steps: number;
	readTime: string;
	author: string;
	date: string;
	featured: boolean;
	image: string;
	tags?: string[];
}

export const guides: GuideMetadata[] = [
	{
		slug: 'getting-started-with-home-energy-assessments',
		title: 'Getting Started with Home Energy Assessments',
		description:
			'A comprehensive guide to understanding and preparing for your home energy assessment.',
		category: 'Homeowners',
		steps: 5,
		readTime: '10 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2025-01-06',
		featured: true,
		tags: ['energy assessment', 'homeowners', 'getting started'],
	},
	{
		slug: 'heat-pump-installation-checklist',
		title: 'Heat Pump Installation: Complete Checklist',
		description:
			'Everything contractors need to know for a successful heat pump installation from start to finish.',
		category: 'Contractors',
		steps: 8,
		readTime: '15 min',
		difficulty: 'Intermediate',
		image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2025-01-05',
		featured: false,
		tags: ['heat pump', 'installation', 'contractors'],
	},
	{
		slug: 'understanding-rebate-programs',
		title: 'Understanding BC Energy Rebate Programs',
		description:
			'Navigate the available rebates and incentives for home energy efficiency upgrades.',
		category: 'Homeowners',
		steps: 4,
		readTime: '8 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
		author: 'Policy Team',
		date: '2025-01-04',
		featured: false,
		tags: ['rebates', 'incentives', 'homeowners'],
	},
	{
		slug: 'air-sealing-best-practices',
		title: 'Air Sealing Best Practices for Contractors',
		description:
			'Advanced techniques and common pitfalls to avoid when air sealing residential buildings.',
		category: 'Contractors',
		steps: 10,
		readTime: '20 min',
		difficulty: 'Advanced',
		image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2025-01-03',
		featured: true,
		tags: ['air sealing', 'contractors', 'building envelope'],
	},
	{
		slug: 'choosing-the-right-insulation',
		title: 'Choosing the Right Insulation for Your Home',
		description:
			'Compare different insulation types and learn which is best for your specific needs.',
		category: 'Homeowners',
		steps: 6,
		readTime: '12 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2025-01-02',
		featured: false,
		tags: ['insulation', 'homeowners', 'materials'],
	},
	{
		slug: 'blower-door-testing-guide',
		title: 'Complete Guide to Blower Door Testing',
		description:
			'Step-by-step instructions for conducting accurate blower door tests and interpreting results.',
		category: 'Contractors',
		steps: 12,
		readTime: '25 min',
		difficulty: 'Advanced',
		image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2025-01-01',
		featured: false,
		tags: ['blower door', 'testing', 'contractors'],
	},
	{
		slug: 'hpsc-certification-application',
		title: 'How to Apply for HPSC Contractor Certification',
		description: 'Complete walkthrough of the HPSC contractor certification application process.',
		category: 'Contractors',
		steps: 7,
		readTime: '18 min',
		difficulty: 'Intermediate',
		image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-12-28',
		featured: false,
		tags: ['certification', 'contractors', 'application'],
	},
	{
		slug: 'winter-energy-saving-tips',
		title: '10 Simple Winter Energy Saving Tips',
		description: 'Easy-to-implement strategies to reduce your energy bills during the cold months.',
		category: 'Homeowners',
		steps: 10,
		readTime: '15 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-12-25',
		featured: false,
		tags: ['energy saving', 'winter', 'homeowners'],
	},
	{
		slug: 'moisture-management-essentials',
		title: 'Moisture Management Essentials',
		description:
			'Prevent moisture problems in retrofits with proper planning and execution techniques.',
		category: 'Contractors',
		steps: 9,
		readTime: '22 min',
		difficulty: 'Advanced',
		image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2024-12-20',
		featured: false,
		tags: ['moisture', 'building science', 'contractors'],
	},
	// Mock guides for pagination testing (11 more to reach 20 total)
	{
		slug: 'ventilation-systems-overview',
		title: 'Residential Ventilation Systems Overview',
		description: 'Understanding HRV, ERV, and exhaust-only ventilation systems for your home.',
		category: 'Homeowners',
		steps: 2,
		readTime: '6 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-12-15',
		featured: false,
		tags: ['ventilation', 'indoor air quality', 'homeowners'],
	},
	{
		slug: 'ductless-mini-split-installation',
		title: 'Ductless Mini-Split Installation Guide',
		description: 'Best practices for installing ductless heat pump systems in residential settings.',
		category: 'Contractors',
		steps: 2,
		readTime: '7 min',
		difficulty: 'Intermediate',
		image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2024-12-10',
		featured: false,
		tags: ['heat pump', 'mini-split', 'installation'],
	},
	{
		slug: 'attic-insulation-upgrade',
		title: 'DIY Attic Insulation Upgrade',
		description: 'Step-by-step guide for homeowners to safely add attic insulation.',
		category: 'Homeowners',
		steps: 2,
		readTime: '8 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-12-05',
		featured: false,
		tags: ['insulation', 'attic', 'diy'],
	},
	{
		slug: 'window-film-installation',
		title: 'Energy-Efficient Window Film Installation',
		description: 'How to install window film to reduce heat loss and improve comfort.',
		category: 'Homeowners',
		steps: 2,
		readTime: '5 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-12-01',
		featured: false,
		tags: ['windows', 'diy', 'energy efficiency'],
	},
	{
		slug: 'thermal-imaging-for-contractors',
		title: 'Using Thermal Imaging for Energy Audits',
		description: 'Leveraging infrared cameras to identify heat loss and air leakage.',
		category: 'Contractors',
		steps: 2,
		readTime: '9 min',
		difficulty: 'Advanced',
		image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2024-11-28',
		featured: false,
		tags: ['thermal imaging', 'energy audit', 'technology'],
	},
	{
		slug: 'smart-thermostat-installation',
		title: 'Smart Thermostat Installation and Setup',
		description: 'Installing and configuring smart thermostats for maximum energy savings.',
		category: 'Homeowners',
		steps: 2,
		readTime: '7 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-11-25',
		featured: false,
		tags: ['smart home', 'thermostat', 'technology'],
	},
	{
		slug: 'basement-insulation-techniques',
		title: 'Basement Insulation Best Practices',
		description: 'Professional techniques for insulating basements and crawl spaces.',
		category: 'Contractors',
		steps: 2,
		readTime: '11 min',
		difficulty: 'Intermediate',
		image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2024-11-20',
		featured: false,
		tags: ['insulation', 'basement', 'contractors'],
	},
	{
		slug: 'led-lighting-upgrade-guide',
		title: 'Complete LED Lighting Upgrade Guide',
		description: 'Switching your home to energy-efficient LED lighting.',
		category: 'Homeowners',
		steps: 2,
		readTime: '6 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-11-15',
		featured: false,
		tags: ['lighting', 'led', 'energy savings'],
	},
	{
		slug: 'air-barrier-installation',
		title: 'Air Barrier Installation for New Construction',
		description: 'Critical air barrier details for new home construction projects.',
		category: 'Contractors',
		steps: 2,
		readTime: '13 min',
		difficulty: 'Advanced',
		image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2024-11-10',
		featured: false,
		tags: ['air barrier', 'new construction', 'building envelope'],
	},
	{
		slug: 'solar-panel-basics',
		title: 'Solar Panels: What Homeowners Need to Know',
		description: 'Understanding solar panel systems, costs, and benefits for BC homes.',
		category: 'Homeowners',
		steps: 2,
		readTime: '10 min',
		difficulty: 'Beginner',
		image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop',
		author: 'HPSC Team',
		date: '2024-11-05',
		featured: false,
		tags: ['solar', 'renewable energy', 'homeowners'],
	},
	{
		slug: 'refrigerant-handling-guide',
		title: 'Safe Refrigerant Handling for HVAC Contractors',
		description: 'Proper procedures for handling refrigerants in heat pump installations.',
		category: 'Contractors',
		steps: 2,
		readTime: '8 min',
		difficulty: 'Intermediate',
		image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop',
		author: 'Technical Team',
		date: '2024-11-01',
		featured: false,
		tags: ['refrigerant', 'safety', 'hvac'],
	},
];

// Helper functions for filtering and sorting
export function getGuidesByCategory(category: string) {
	return guides.filter((g) => g.category === category);
}

export function getFeaturedGuides() {
	return guides.filter((g) => g.featured);
}

export function getGuideBySlug(slug: string) {
	return guides.find((g) => g.slug === slug);
}

export function searchGuides(query: string) {
	const lowerQuery = query.toLowerCase();
	return guides.filter(
		(g) =>
			g.title.toLowerCase().includes(lowerQuery) ||
			g.description.toLowerCase().includes(lowerQuery) ||
			g.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery))
	);
}
