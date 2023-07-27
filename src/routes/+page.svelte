<script lang="ts">
	import Container from '$lib/components/Container.svelte';
</script>

<svelte:head>
	<title>JTC Demo - Sveltekit</title>
</svelte:head>

<Container>
	<div class="grid md:grid-cols-2 gap-5 lg:gap-10">
		<a href="/companies" class="group bg-white inline-block hover:bg-gray-50 shadow-sm">
			<img
				src="https://picsum.photos/seed/company-annual/640/480"
				alt="static page"
				class="object-cover w-full h-48 md:h-auto"
			/>
			<div class="text-lg font-bold p-4">
				<span class="group-hover:underline text-blue-950">List of Companies</span>
				<div class="text-sm font-normal">Static</div>
			</div>
		</a>

		<a href="/books" class="group bg-white inline-block hover:bg-gray-50 shadow-sm">
			<img
				src="https://picsum.photos/seed/books/640/480"
				alt="static page"
				class="object-cover w-full h-48 md:h-auto"
			/>
			<div class="text-lg font-bold p-4">
				<span class="group-hover:underline text-blue-950">Project Gutenburg Books</span>
				<div class="text-sm font-normal">Dynamic</div>
			</div>
		</a>
	</div>
</Container>
