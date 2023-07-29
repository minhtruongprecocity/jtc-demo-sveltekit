<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>JTC Demo - Sveltekit</title>
</svelte:head>

<Container>
	<div class="grid gap-5 md:grid-cols-2 lg:gap-10">
		{#each data.links as link}
			<a href={link.attributes.url} class="group inline-block bg-white shadow-sm hover:bg-gray-50">
				<img
					src={link.attributes.image_url}
					alt="static page"
					class="h-48 w-full object-cover md:h-auto"
				/>
				<div class="p-4 text-lg font-bold">
					<span class="text-blue-950 group-hover:underline">{link.attributes.title}</span>
					<div class="text-sm font-normal">{link.attributes.description}</div>
				</div>
			</a>
		{/each}
	</div>
</Container>
