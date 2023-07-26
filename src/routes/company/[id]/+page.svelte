<script lang="ts">
	import { goto } from '$app/navigation';
	import Container from '$lib/components/Container.svelte';
	import Currency from '$lib/components/Currency.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Container>
	<button class="mb-4 py-2 rounded" on:click={() => goto('/')}
		>&lt; <span class="hover:underline">Back</span></button
	>

	<div class="flex gap-4">
		<div class="w-full">
			<div class="flex items-center flex-col sm:flex-row">
				<div class="flex-1 w-full">
					<div class="text-3xl font-bold">
						{data.company.name}
					</div>
					<div>
						{data.company.address}, {data.company.city}, {data.company.state}
						{data.company.zip}
					</div>
				</div>
				<div class="text-xl w-full mt-2 sm:w-auto sm:mt-0">
					<Currency currency="USD" amount={data.company.annualSales} />
				</div>
			</div>
		</div>
	</div>

	<hr class="my-8" />

	<div class="leading-7 mb-8">{data.company.description}</div>

	<hr class="my-8" />

	<div class="flex gap-4 items-center">
		<img
			src={`https://robohash.org/${data.company.id}.png?size=100x100`}
			alt={data.company.contact}
			class="rounded-full shadow-sm bg-blue-900"
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
