<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Currency from '$lib/components/Currency.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.company.name}</title>
</svelte:head>

<Container>
	<button class="mb-4 block py-2 text-blue-950" on:click={() => history.back()}>
		&lt; <span class="hover:underline">Back</span>
	</button>

	<div class="flex gap-4">
		<div class="w-full">
			<div class="flex flex-col items-center sm:flex-row">
				<div class="w-full flex-1">
					<div class="text-2xl font-bold">
						{data.company.name}
					</div>
					<div>
						{data.company.address}, {data.company.city}, {data.company.state}
						{data.company.zip}
					</div>
				</div>
				<div class="mt-2 w-full text-xl sm:mt-0 sm:w-auto">
					<Currency currency="USD" amount={data.company.annualSales} />
				</div>
			</div>
		</div>
	</div>

	<hr class="my-8" />

	<div class="mb-8 leading-7">{data.company.description}</div>

	<hr class="my-8" />

	<div class="flex items-center gap-4">
		<img
			src={`https://robohash.org/${data.company.id}.png?size=100x100`}
			alt={data.company.contact}
			class="rounded-full bg-blue-900 shadow-sm"
		/>
		<div class="mb-4">
			<div class="text-lg font-bold">
				{data.company.contact}
			</div>
			<div>
				{data.company.contactPhone}
			</div>
		</div>
	</div>
</Container>
