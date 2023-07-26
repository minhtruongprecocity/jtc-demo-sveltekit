import { cms } from '$lib/api/cms';
import { toCompanies } from '../../types/Company';

export const load = async () => {
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
