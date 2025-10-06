// News Article Interface
export interface NewsArticle {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	image: string;
	date: Date;
	category: string;
	author: string;
	tags: string[];
}

// Sample news articles
export const newsArticles: NewsArticle[] = [
	{
		slug: 'hpsc-launches-new-contractor-certification-program',
		title: 'HPSC Launches New Contractor Certification Program',
		excerpt: 'We are excited to announce the launch of our comprehensive certification program designed to elevate standards in the home performance industry.',
		content: `
			<p>The Home Performance Stakeholder Council is proud to announce the launch of our new contractor certification program, a comprehensive initiative designed to elevate professional standards across British Columbia's home performance industry.</p>

			<h2>Program Highlights</h2>
			<p>Our certification program includes rigorous training in:</p>
			<ul>
				<li>Advanced building science principles</li>
				<li>Energy efficiency best practices</li>
				<li>Quality assurance protocols</li>
				<li>Customer service excellence</li>
				<li>Safety and compliance standards</li>
			</ul>

			<h2>Benefits for Contractors</h2>
			<p>Certified contractors will receive:</p>
			<ul>
				<li>Official HPSC certification credentials</li>
				<li>Listing in our contractor directory</li>
				<li>Access to exclusive training resources</li>
				<li>Marketing materials and support</li>
				<li>Networking opportunities with industry leaders</li>
			</ul>

			<h2>How to Apply</h2>
			<p>Contractors interested in joining the certification program can apply through our online portal. The program includes both online coursework and hands-on training sessions.</p>

			<p>For more information, visit our <a href="/contractor-network">Contractor Network</a> page or contact us directly.</p>
		`,
		image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=600&fit=crop',
		date: new Date('2025-09-15'),
		category: 'Programs',
		author: 'HPSC Team',
		tags: ['certification', 'contractors', 'training'],
	},
	{
		slug: 'new-energy-efficiency-rebates-available',
		title: 'New Energy Efficiency Rebates Available for Homeowners',
		excerpt: 'CleanBC and BC Hydro have expanded their rebate programs, making energy-efficient upgrades more accessible than ever.',
		content: `
			<p>Great news for BC homeowners! CleanBC and BC Hydro have announced significant expansions to their energy efficiency rebate programs, making it more affordable than ever to upgrade your home.</p>

			<h2>Expanded Rebate Programs</h2>
			<p>The new rebates cover a wide range of home improvements:</p>
			<ul>
				<li>Heat pump installations - up to $6,000</li>
				<li>Insulation upgrades - up to $5,500</li>
				<li>High-efficiency windows - up to $3,000</li>
				<li>Smart thermostats - up to $250</li>
				<li>Energy assessments - fully funded</li>
			</ul>

			<h2>Eligibility Requirements</h2>
			<p>Most BC homeowners are eligible for these rebates. Key requirements include:</p>
			<ul>
				<li>Property must be your primary residence</li>
				<li>Work must be completed by a certified contractor</li>
				<li>Pre and post-upgrade energy assessments required</li>
			</ul>

			<h2>How to Apply</h2>
			<p>The application process is straightforward:</p>
			<ol>
				<li>Book an initial energy assessment</li>
				<li>Review recommended upgrades with your energy advisor</li>
				<li>Hire a certified contractor from our network</li>
				<li>Complete the work and post-upgrade assessment</li>
				<li>Submit your rebate application</li>
			</ol>

			<p>Visit <a href="/contractor-network/find-a-contractor">Find a Contractor</a> to connect with certified professionals in your area.</p>
		`,
		image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=600&fit=crop',
		date: new Date('2025-09-10'),
		category: 'Rebates',
		author: 'HPSC Team',
		tags: ['rebates', 'homeowners', 'energy efficiency'],
	},
	{
		slug: 'heat-pump-technology-advances',
		title: 'Heat Pump Technology Advances: What Contractors Need to Know',
		excerpt: 'Recent developments in heat pump efficiency and cold-climate performance are changing the retrofit landscape.',
		content: `
			<p>Heat pump technology has made remarkable advances in recent years, particularly in cold-climate performance. Here's what contractors need to know about the latest developments.</p>

			<h2>Cold-Climate Performance</h2>
			<p>Modern cold-climate heat pumps can now operate efficiently at temperatures as low as -30°C, making them viable across all of British Columbia.</p>

			<h2>Efficiency Improvements</h2>
			<p>Recent technological advances include:</p>
			<ul>
				<li>Variable-speed compressors for better efficiency</li>
				<li>Advanced refrigerants with lower environmental impact</li>
				<li>Smart controls and integration with home automation</li>
				<li>Improved defrost cycles for better cold-weather performance</li>
			</ul>

			<h2>Installation Best Practices</h2>
			<p>To maximize heat pump performance, contractors should:</p>
			<ul>
				<li>Conduct proper load calculations</li>
				<li>Ensure adequate insulation before installation</li>
				<li>Size equipment appropriately for the climate zone</li>
				<li>Provide thorough customer education on operation</li>
			</ul>

			<h2>Training Opportunities</h2>
			<p>HPSC offers specialized training on heat pump installation and maintenance. Check our <a href="/resources">Resources</a> page for upcoming courses.</p>
		`,
		image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop',
		date: new Date('2025-09-05'),
		category: 'Technology',
		author: 'Technical Team',
		tags: ['heat pumps', 'technology', 'contractors'],
	},
	{
		slug: 'building-code-updates-2025',
		title: 'Important Building Code Updates for 2025',
		excerpt: 'BC Building Code introduces new energy efficiency requirements that impact home performance contractors.',
		content: `
			<p>The BC Building Code has introduced significant updates for 2025 that will impact home performance contractors and the work they do.</p>

			<h2>Key Changes</h2>
			<ul>
				<li>Increased minimum insulation requirements</li>
				<li>Stricter air leakage standards</li>
				<li>New ventilation requirements</li>
				<li>Updated window performance standards</li>
			</ul>

			<h2>Implementation Timeline</h2>
			<p>The new requirements take effect January 1, 2026, giving contractors time to prepare and adjust their practices.</p>

			<h2>Training and Support</h2>
			<p>HPSC is offering free webinars to help contractors understand and implement the new code requirements.</p>
		`,
		image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
		date: new Date('2025-08-28'),
		category: 'Regulations',
		author: 'HPSC Team',
		tags: ['building code', 'regulations', 'compliance'],
	},
	{
		slug: 'annual-conference-2025-announcement',
		title: 'Annual Home Performance Conference 2025 - Save the Date',
		excerpt: 'Join us November 15-17 for the premier home performance industry event in British Columbia.',
		content: `
			<p>We're excited to announce that the 2025 Home Performance Conference will be held November 15-17 at the Vancouver Convention Centre.</p>

			<h2>Conference Highlights</h2>
			<ul>
				<li>Keynote speakers from leading industry experts</li>
				<li>Hands-on training workshops</li>
				<li>Product exhibitions from major manufacturers</li>
				<li>Networking opportunities with industry leaders</li>
				<li>CE credits for professional development</li>
			</ul>

			<h2>Registration</h2>
			<p>Early bird registration opens October 1st. HPSC members receive a 20% discount.</p>
		`,
		image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop',
		date: new Date('2025-08-20'),
		category: 'Events',
		author: 'Events Team',
		tags: ['conference', 'events', 'networking'],
	},
	{
		slug: 'indoor-air-quality-importance',
		title: 'The Growing Importance of Indoor Air Quality',
		excerpt: 'As homes become more airtight, understanding and addressing indoor air quality is essential for contractor success.',
		content: `
			<p>With modern homes becoming increasingly airtight for energy efficiency, indoor air quality has never been more important.</p>

			<h2>Why IAQ Matters</h2>
			<ul>
				<li>Health impacts of poor ventilation</li>
				<li>Moisture management and mold prevention</li>
				<li>Pollutant removal and filtration</li>
				<li>Carbon dioxide levels and cognitive function</li>
			</ul>

			<h2>Best Practices</h2>
			<p>Contractors should integrate IAQ considerations into every retrofit project:</p>
			<ul>
				<li>Balanced ventilation systems</li>
				<li>Proper kitchen and bathroom exhaust</li>
				<li>Air filtration systems</li>
				<li>Regular maintenance protocols</li>
			</ul>
		`,
		image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop',
		date: new Date('2025-08-15'),
		category: 'Best Practices',
		author: 'Technical Team',
		tags: ['indoor air quality', 'ventilation', 'health'],
	},
	{
		slug: 'weatherization-funding-expansion',
		title: 'Weatherization Program Funding Expanded for Low-Income Households',
		excerpt: 'New provincial funding makes home energy upgrades accessible to more BC families.',
		content: `
			<p>The provincial government has announced a major expansion of weatherization program funding for low-income households across BC.</p>

			<h2>Program Expansion</h2>
			<p>The expanded program now serves:</p>
			<ul>
				<li>Households earning up to 120% of median income</li>
				<li>Priority for seniors and families with children</li>
				<li>Indigenous communities</li>
				<li>Rural and remote areas</li>
			</ul>

			<h2>Covered Upgrades</h2>
			<ul>
				<li>Complete insulation packages</li>
				<li>Air sealing and weatherstripping</li>
				<li>Window and door replacements</li>
				<li>Heating system upgrades</li>
			</ul>

			<p>Qualified households receive upgrades at no cost through approved contractors.</p>
		`,
		image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=1200&h=600&fit=crop',
		date: new Date('2025-08-10'),
		category: 'Programs',
		author: 'HPSC Team',
		tags: ['weatherization', 'low-income', 'funding'],
	},
	{
		slug: 'net-zero-retrofit-case-study',
		title: 'Case Study: Achieving Net-Zero in a 1970s Home',
		excerpt: 'How one Vancouver homeowner transformed a 50-year-old house into a net-zero energy home.',
		content: `
			<p>A comprehensive deep energy retrofit transformed a typical 1970s Vancouver home into a net-zero energy residence. Here's how it was done.</p>

			<h2>The Challenge</h2>
			<p>The 1,800 sq ft home had minimal insulation, single-pane windows, and an aging gas furnace.</p>

			<h2>The Solution</h2>
			<ul>
				<li>Exterior insulation and new siding (R-30 walls)</li>
				<li>Roof insulation upgrade (R-60)</li>
				<li>Triple-pane windows throughout</li>
				<li>Air-source heat pump for heating/cooling</li>
				<li>Heat pump water heater</li>
				<li>8 kW solar PV system</li>
			</ul>

			<h2>The Results</h2>
			<p>Energy consumption reduced by 85%, with remaining needs met by solar production. Total project cost: $120,000 with rebates bringing it down to $85,000.</p>
		`,
		image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=600&fit=crop',
		date: new Date('2025-08-05'),
		category: 'Case Studies',
		author: 'Technical Team',
		tags: ['net-zero', 'case study', 'deep retrofit'],
	},
	{
		slug: 'contractor-spotlight-green-solutions',
		title: 'Contractor Spotlight: Green Solutions Ltd',
		excerpt: 'Meet the award-winning contractor setting new standards in sustainable home performance.',
		content: `
			<p>This month we spotlight Green Solutions Ltd, a Victoria-based contractor that has completed over 500 successful retrofit projects.</p>

			<h2>Company Background</h2>
			<p>Founded in 2015, Green Solutions has built a reputation for quality work and exceptional customer service.</p>

			<h2>Achievements</h2>
			<ul>
				<li>HPSC Contractor of the Year 2024</li>
				<li>500+ completed projects</li>
				<li>98% customer satisfaction rating</li>
				<li>Zero warranty claims in 2024</li>
			</ul>

			<h2>Their Approach</h2>
			<p>"We treat every home as if it were our own," says owner Sarah Chen. "Quality and customer education are our top priorities."</p>
		`,
		image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=600&fit=crop',
		date: new Date('2025-07-30'),
		category: 'Contractor Spotlight',
		author: 'HPSC Team',
		tags: ['contractor', 'spotlight', 'success story'],
	},
	{
		slug: 'summer-energy-saving-tips',
		title: 'Summer Energy Saving Tips for BC Homeowners',
		excerpt: 'Simple strategies to keep your home cool and reduce energy costs during summer months.',
		content: `
			<p>While BC summers are generally mild, strategic energy management can still reduce costs and improve comfort.</p>

			<h2>Cooling Strategies</h2>
			<ul>
				<li>Use window coverings to block solar heat gain</li>
				<li>Take advantage of cool evening air for natural ventilation</li>
				<li>Use ceiling fans to improve air circulation</li>
				<li>Set thermostats to 24-25°C when using AC</li>
			</ul>

			<h2>Reduce Heat Generation</h2>
			<ul>
				<li>Use outdoor grills instead of ovens</li>
				<li>Run dishwashers and laundry during cooler hours</li>
				<li>Switch to LED bulbs to reduce heat output</li>
			</ul>

			<h2>Maintenance Matters</h2>
			<p>Summer is the perfect time for HVAC maintenance and filter replacement.</p>
		`,
		image: 'https://images.unsplash.com/photo-1523287957-bbf42ca13ce2?w=1200&h=600&fit=crop',
		date: new Date('2025-07-20'),
		category: 'Tips & Advice',
		author: 'HPSC Team',
		tags: ['energy saving', 'summer', 'tips'],
	},
	{
		slug: 'indigenous-housing-partnership',
		title: 'HPSC Announces Partnership with Indigenous Housing Providers',
		excerpt: 'New initiative brings home performance standards and training to Indigenous communities across BC.',
		content: `
			<p>We are honored to announce a new partnership with Indigenous housing providers to bring home performance training and standards to communities across British Columbia.</p>

			<h2>Partnership Goals</h2>
			<ul>
				<li>Training programs for Indigenous contractors</li>
				<li>Culturally appropriate building practices</li>
				<li>Job creation in Indigenous communities</li>
				<li>Improved housing quality and energy efficiency</li>
			</ul>

			<h2>Initial Projects</h2>
			<p>The partnership will begin with pilot projects in six communities, focusing on weatherization and energy efficiency upgrades.</p>

			<h2>Long-term Vision</h2>
			<p>Our goal is to establish sustainable home performance capacity within Indigenous communities, creating local jobs while improving housing quality.</p>
		`,
		image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1200&h=600&fit=crop',
		date: new Date('2025-07-15'),
		category: 'Partnerships',
		author: 'HPSC Team',
		tags: ['Indigenous', 'partnership', 'community'],
	},
	{
		slug: 'moisture-management-best-practices',
		title: 'Moisture Management: Essential Best Practices for BC Contractors',
		excerpt: 'Understanding and managing moisture is critical for successful home performance work in BC climate.',
		content: `
			<p>BC's wet climate makes moisture management a critical consideration for all home performance work.</p>

			<h2>Key Principles</h2>
			<ul>
				<li>Control rain penetration with proper drainage planes</li>
				<li>Manage interior moisture with ventilation</li>
				<li>Address capillary action and ground moisture</li>
				<li>Ensure proper vapor control strategies</li>
			</ul>

			<h2>Common Mistakes</h2>
			<ul>
				<li>Installing vapor barriers on the wrong side</li>
				<li>Inadequate ventilation in bathrooms and kitchens</li>
				<li>Poor flashing details around windows</li>
				<li>Ignoring foundation drainage</li>
			</ul>

			<h2>Training Available</h2>
			<p>HPSC offers comprehensive moisture management training. Visit our <a href="/resources">Resources</a> page for details.</p>
		`,
		image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&h=600&fit=crop',
		date: new Date('2025-07-10'),
		category: 'Best Practices',
		author: 'Technical Team',
		tags: ['moisture', 'building science', 'training'],
	},
];

// Get all unique categories
export function getCategories(): string[] {
	const categories = newsArticles.map(article => article.category);
	return [...new Set(categories)].sort();
}

// Get all unique years
export function getArchiveYears(): number[] {
	const years = newsArticles.map(article => article.date.getFullYear());
	return [...new Set(years)].sort((a, b) => b - a);
}

// Filter and sort articles
export function filterArticles(
	category?: string,
	year?: number,
	sortBy: 'date' | 'title' = 'date'
): NewsArticle[] {
	let filtered = [...newsArticles];

	// Filter by category
	if (category) {
		filtered = filtered.filter(article => article.category === category);
	}

	// Filter by year
	if (year) {
		filtered = filtered.filter(article => article.date.getFullYear() === year);
	}

	// Sort
	filtered.sort((a, b) => {
		if (sortBy === 'date') {
			return b.date.getTime() - a.date.getTime(); // Newest first
		} else {
			return a.title.localeCompare(b.title); // Alphabetical
		}
	});

	return filtered;
}
