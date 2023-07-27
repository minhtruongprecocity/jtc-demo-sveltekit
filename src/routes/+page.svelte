<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>JTC Demo - Sveltekit</title>
</svelte:head>

<Container>
	<div class="grid md:grid-cols-2 gap-5 lg:gap-10">
		{#each data.links as link}
			<a href={link.attributes.url} class="group bg-white inline-block hover:bg-gray-50 shadow-sm">
				<img
					src={link.attributes.image_url}
					alt="static page"
					class="object-cover w-full h-48 md:h-auto"
				/>
				<div class="text-lg font-bold p-4">
					<span class="group-hover:underline text-blue-950">{link.attributes.title}</span>
					<div class="text-sm font-normal">{link.attributes.description}</div>
				</div>
			</a>
		{/each}
	</div>
</Container>
