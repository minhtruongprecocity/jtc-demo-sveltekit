<script lang="ts">
	import { page } from '$app/stores';
	import Container from './Container.svelte';

	$: pathName = $page.url.pathname;
</script>

<div class="flex items-center bg-teal-200">
	<Container class="flex flex-row items-center gap-4 text-blue-950 sm:gap-10">
		<a href="/" class="flex-1 text-2xl font-bold">
			JTC Demo
			<div class="text-sm font-normal">Sveltekit</div>
		</a>

		<a
			href="/companies"
			class="text-lg hover:underline {pathName.startsWith('/companies') ? 'underline' : ''}"
			>Companies</a
		>
		<a href="/books" class="text-lg hover:underline {pathName === '/books' ? 'underline' : ''}"
			>Books</a
		>
	</Container>
</div>
