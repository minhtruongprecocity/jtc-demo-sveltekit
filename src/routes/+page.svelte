<script lang="ts">
	import CompanyGrid from '$lib/components/CompanyGrid.svelte';
	import CompanyList from '$lib/components/CompanyList.svelte';
	import Container from '$lib/components/Container.svelte';
	import Toggle from '$lib/components/Toggle.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let viewAsList = false;
</script>

<Container>
	<div class="flex items-center mb-4 justify-end flex-row">
		<h1 class="text-3xl font-bold flex-1">Top 10 - Annual Sales</h1>
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
