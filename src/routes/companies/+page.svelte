<script lang="ts">
	import CompanyGrid from '$lib/components/CompanyGrid.svelte';
	import CompanyList from '$lib/components/CompanyList.svelte';
	import Container from '$lib/components/Container.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let viewAsList = false;
</script>

<svelte:head>
	<title>Companies</title>
</svelte:head>

<Container>
	<div class="flex items-center mb-4 justify-end flex-row">
		<h1 class="text-2xl font-bold flex-1">Top 10</h1>
		<a href="/companies/all" class="hover:underline mr-0 text-blue-950 sm:mr-5">View All</a>
		<Toggle
			class="justify-end hidden sm:flex"
			checked={viewAsList}
			offLabel="Grid"
			onLabel="List"
			on:click={() => (viewAsList = !viewAsList)}
		/>
	</div>

	{#if !viewAsList}
		<div class="grid gap-5 md:grid-cols-3 sm:grid-cols-2">
			{#each data.companies as company, i}
				<CompanyGrid {company} />
			{/each}
		</div>
	{:else if viewAsList}
		<div class="grid gap-5 grid-cols-1">
			{#each data.companies as company, i}
				<CompanyList {company} />
			{/each}
		</div>
	{/if}
</Container>
