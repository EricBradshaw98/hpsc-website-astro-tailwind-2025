/* eslint-disable no-undef */
const pa11y = require('pa11y');
const fs = require('fs');
const path = require('path');

// Pages to audit
const pages = [
	{ name: 'Home', url: 'http://localhost:4321/' },
	{ name: 'About', url: 'http://localhost:4321/about' },
	{ name: 'Our Team', url: 'http://localhost:4321/about/our-team' },
	{ name: 'Strategy', url: 'http://localhost:4321/about/strategy' },
	{ name: 'Contact', url: 'http://localhost:4321/contact' },
	{ name: 'Find a Contractor', url: 'http://localhost:4321/contractor-network/find-a-contractor' },
	{ name: 'Contractor Network', url: 'http://localhost:4321/contractor-network' },
	{ name: 'Resources', url: 'http://localhost:4321/resources' },
	{ name: 'News Index', url: 'http://localhost:4321/resources/news' },
	{ name: 'Guides Index', url: 'http://localhost:4321/resources/guides' },
	{ name: 'Documents Index', url: 'http://localhost:4321/resources/documents' },
	{ name: 'Coming Soon', url: 'http://localhost:4321/coming-soon' },
	{ name: '404 Page', url: 'http://localhost:4321/404' },
];

// pa11y options for WCAG 2.1 AA compliance
const options = {
	standard: 'WCAG2AA',
	includeNotices: false,
	includeWarnings: true,
	timeout: 30000,
	wait: 1000,
};

async function auditPage(page) {
	console.log(`\n🔍 Auditing: ${page.name} (${page.url})`);
	try {
		const results = await pa11y(page.url, options);
		return {
			page: page.name,
			url: page.url,
			issues: results.issues,
			issueCount: results.issues.length,
		};
	} catch (error) {
		console.error(`❌ Error auditing ${page.name}:`, error.message);
		return {
			page: page.name,
			url: page.url,
			error: error.message,
			issueCount: 0,
		};
	}
}

async function runAudit() {
	console.log('🚀 Starting WCAG 2.1 AA Accessibility Audit...\n');
	console.log('📋 Auditing pages:', pages.length);
	console.log('⚙️  Standard: WCAG 2.1 Level AA\n');

	const results = [];
	for (const page of pages) {
		const result = await auditPage(page);
		results.push(result);
	}

	// Summary
	console.log('\n' + '='.repeat(80));
	console.log('📊 AUDIT SUMMARY');
	console.log('='.repeat(80) + '\n');

	let totalIssues = 0;
	const issuesByType = {};
	const issuesByPage = {};

	results.forEach((result) => {
		if (result.error) {
			console.log(`❌ ${result.page}: ERROR - ${result.error}`);
			return;
		}

		totalIssues += result.issueCount;
		issuesByPage[result.page] = result.issueCount;

		if (result.issueCount === 0) {
			console.log(`✅ ${result.page}: No issues found`);
		} else {
			console.log(`⚠️  ${result.page}: ${result.issueCount} issues`);

			// Count by type
			result.issues.forEach((issue) => {
				const type = issue.type;
				issuesByType[type] = (issuesByType[type] || 0) + 1;
			});
		}
	});

	console.log('\n' + '='.repeat(80));
	console.log('📈 STATISTICS');
	console.log('='.repeat(80) + '\n');
	console.log(`Total Issues: ${totalIssues}`);
	console.log(`Pages Audited: ${results.length}`);
	console.log(`Average Issues per Page: ${(totalIssues / results.length).toFixed(2)}`);

	console.log('\n' + '='.repeat(80));
	console.log('🔴 ISSUES BY TYPE');
	console.log('='.repeat(80) + '\n');
	Object.entries(issuesByType)
		.sort(([, a], [, b]) => b - a)
		.forEach(([type, count]) => {
			console.log(`${type}: ${count}`);
		});

	// Detailed issues
	console.log('\n' + '='.repeat(80));
	console.log('📝 DETAILED ISSUES BY PAGE');
	console.log('='.repeat(80) + '\n');

	results.forEach((result) => {
		if (result.error || result.issueCount === 0) return;

		console.log(`\n${'─'.repeat(80)}`);
		console.log(`📄 ${result.page} (${result.issueCount} issues)`);
		console.log(`🔗 ${result.url}`);
		console.log('─'.repeat(80) + '\n');

		// Group issues by type
		const groupedIssues = {};
		result.issues.forEach((issue) => {
			if (!groupedIssues[issue.type]) {
				groupedIssues[issue.type] = [];
			}
			groupedIssues[issue.type].push(issue);
		});

		Object.entries(groupedIssues).forEach(([type, issues]) => {
			console.log(`\n${type.toUpperCase()} (${issues.length}):`);
			issues.forEach((issue, index) => {
				console.log(`\n  ${index + 1}. ${issue.message}`);
				console.log(`     Code: ${issue.code}`);
				console.log(`     Context: ${issue.context.substring(0, 100)}...`);
				console.log(`     Selector: ${issue.selector}`);
			});
		});
	});

	// Generate markdown report
	const reportPath = path.join(__dirname, 'ACCESSIBILITY_REPORT.md');
	let markdown = `# Accessibility Audit Report\n\n`;
	markdown += `**Date:** ${new Date().toISOString()}\n`;
	markdown += `**Standard:** WCAG 2.1 Level AA\n`;
	markdown += `**Total Issues:** ${totalIssues}\n`;
	markdown += `**Pages Audited:** ${results.length}\n\n`;

	markdown += `## Summary by Page\n\n`;
	markdown += `| Page | Issues |\n`;
	markdown += `|------|--------|\n`;
	results.forEach((result) => {
		if (result.error) {
			markdown += `| ${result.page} | ERROR |\n`;
		} else {
			const status = result.issueCount === 0 ? '✅ 0' : `⚠️ ${result.issueCount}`;
			markdown += `| ${result.page} | ${status} |\n`;
		}
	});

	markdown += `\n## Issues by Type\n\n`;
	markdown += `| Type | Count |\n`;
	markdown += `|------|-------|\n`;
	Object.entries(issuesByType)
		.sort(([, a], [, b]) => b - a)
		.forEach(([type, count]) => {
			markdown += `| ${type} | ${count} |\n`;
		});

	markdown += `\n## Detailed Issues\n\n`;
	results.forEach((result) => {
		if (result.error || result.issueCount === 0) return;

		markdown += `### ${result.page}\n\n`;
		markdown += `**URL:** ${result.url}\n\n`;

		const groupedIssues = {};
		result.issues.forEach((issue) => {
			if (!groupedIssues[issue.type]) {
				groupedIssues[issue.type] = [];
			}
			groupedIssues[issue.type].push(issue);
		});

		Object.entries(groupedIssues).forEach(([type, issues]) => {
			markdown += `#### ${type} (${issues.length})\n\n`;
			issues.forEach((issue, index) => {
				markdown += `${index + 1}. **${issue.message}**\n`;
				markdown += `   - Code: \`${issue.code}\`\n`;
				markdown += `   - Selector: \`${issue.selector}\`\n`;
				markdown += `   - Context: \`${issue.context.substring(0, 100)}...\`\n\n`;
			});
		});
	});

	fs.writeFileSync(reportPath, markdown);
	console.log(`\n\n✅ Report saved to: ${reportPath}\n`);
}

runAudit().catch((error) => {
	console.error('Fatal error:', error);
	process.exit(1);
});
