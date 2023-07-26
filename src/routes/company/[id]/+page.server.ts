import { cms } from '$lib/cms.js';
import { toCompany } from '../../../types/Company.js';

export async function entries() {
	return (
		(await cms.items.list({
			filter: {
				type: 'company'
			}
		})) ?? []
	);
}

export const load = async ({ params }) => {
	return {
		company: toCompany(await cms.items.find(params.id))
	};
};
