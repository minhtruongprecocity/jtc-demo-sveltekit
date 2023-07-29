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
	<div class="mb-4 flex flex-row items-center justify-end">
		<h1 class="mr-5 flex-1 text-2xl font-bold">All Companies</h1>
		<a href="/companies" class="mr-0 text-blue-950 hover:underline sm:mr-5">View Top 10</a>
		<Toggle
			class="hidden justify-end sm:flex"
			checked={viewAsList}
			offLabel="Grid"
			onLabel="List"
			on:click={() => (viewAsList = !viewAsList)}
		/>
	</div>

	{#if !viewAsList}
		<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
			{#each data.companies as company, i}
				<CompanyGrid {company} />
			{/each}
		</div>
	{:else if viewAsList}
		<div class="grid grid-cols-1 gap-5">
			{#each data.companies as company, i}
				<CompanyList {company} />
			{/each}
		</div>
	{/if}
</Container>
