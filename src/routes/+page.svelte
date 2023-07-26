<script lang="ts">
	import { goto } from '$app/navigation';
	import CompanyGrid from '$lib/components/CompanyGrid.svelte';
	import CompanyList from '$lib/components/CompanyList.svelte';
	import Container from '$lib/components/Container.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let viewAsList = false;
	const companies = data.companies.sort((a, b) => b.annualSales - a.annualSales).slice(0, 10);

	function companyClickHandler(event: any) {
		goto(`company/${event.detail.id}`);
	}
</script>

<Container>
	<div class="flex items-center mb-4">
		<h1 class="text-3xl font-bold flex-1">Top 10 - Annual Sales</h1>
		<Toggle
			checked={viewAsList}
			offLabel="Grid"
			onLabel="List"
			on:click={() => (viewAsList = !viewAsList)}
		/>
	</div>

	{#if !viewAsList}
		<div class="grid gap-5 md:grid-cols-3 sm:grid-cols-2">
			{#each companies as company, i}
				<CompanyGrid {company} on:click={companyClickHandler} />
			{/each}
		</div>
	{:else if viewAsList}
		<div class="grid gap-5 grid-cols-1">
			{#each companies as company, i}
				<CompanyList {company} on:click={companyClickHandler} />
			{/each}
		</div>
	{/if}
</Container>
