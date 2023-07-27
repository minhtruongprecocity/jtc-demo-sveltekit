import { cms } from '$lib/api/cms';
import type { Link } from '../types/Link';

export const load = async () => {
	const content = await cms.items.find('179426159', { nested: true, version: 'current' });
	return {
		links: content.links as Array<Link>
	};
};
