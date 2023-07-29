<script lang="ts">
	import type { Company } from '../../types/Company';
	import Currency from './Currency.svelte';

	export let company: Company;
</script>

<a
	href={`/companies/${company.id}`}
	class="group flex cursor-pointer flex-col bg-white shadow-sm hover:bg-gray-50 sm:flex-row"
>
	<img
		src={`https://picsum.photos/seed/${company.id}/640/480`}
		alt={company.name}
		class="lg:md-96 h-36 w-full object-cover md:w-96"
	/>
	<div class="p-3">
		<div class="text-lg font-bold text-blue-950 group-hover:underline">{company.name}</div>
		<div class="mb-4 text-sm">
			{company.city}, {company.state}
		</div>
		<Currency currency="USD" amount={company.annualSales} />
	</div>
</a>
