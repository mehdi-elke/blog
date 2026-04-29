import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../i18n/ui';

export async function GET(context: any) {
	const blog = await getCollection('blog');
	return rss({
		title: 'Open Drafts',
		description: ui.fr['site.description'],
		site: context.site,
		items: blog.map((post) => {
			// Extract language from id (e.g., "fr/my-post" -> "fr")
			const lang = post.id.split('/')[0];
			const slug = post.id.split('/').slice(1).join('/');

			return {
				title: post.data.title,
				pubDate: post.data.pubDate,
				description: post.data.description,
				// Links should include the language prefix for translated posts
				// If prefixDefaultLocale is false, 'fr' might not be in the URL for default
				link: lang === 'fr' ? `/${slug}/` : `/${lang}/${slug}/`,
			};
		}),
	});
}
