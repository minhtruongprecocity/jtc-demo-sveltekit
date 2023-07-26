<script lang="ts">
	import type { Company } from '../../types/Company';
	import Currency from './Currency.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let company: Company;
	function companyClickHandler() {
		dispatch('click', {
			id: company.id
		});
	}
</script>

<div
	class="cursor-pointer border border-gray-50 shadow-sm bg-white hover:bg-gray-50 group"
	on:click={companyClickHandler}
	on:keypress={companyClickHandler}
	role="button"
	tabindex="0"
>
	<img
		src={`https://picsum.photos/seed/${company.id}/640/480`}
		alt={company.name}
		class="object-cover h-48 w-full"
	/>
	<div class="p-3">
		<div class="font-bold text-lg group-hover:underline">{company.name}</div>
		<div class="text-sm mb-4">
			{company.city}, {company.state}
		</div>
		<Currency currency="USD" amount={company.annualSales} />
	</div>
</div>
