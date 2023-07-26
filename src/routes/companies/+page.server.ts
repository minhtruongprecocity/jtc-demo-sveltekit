import { cms } from '$lib/cms.js';
import type { PageLoad } from '../$types';
import { toCompanies } from '../../types/Company';

export const load: PageLoad = async () => {
	return {
		companies: toCompanies(
			(await cms.items.list({
				filter: {
					type: 'company'
				},
				page: { limit: 10 },
				order_by: 'annual_sales_DESC'
			})) ?? []
		)
	};
};
