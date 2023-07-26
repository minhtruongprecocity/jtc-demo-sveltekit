<script lang="ts">
	import Container from './Container.svelte';
</script>

<div class="flex items-center bg-teal-200 py-4">
	<Container class="flex flex-row items-center gap-4 text-blue-950 sm:gap-10">
		<div class="text-2xl font-bold">JTC Demo</div>

		<a href="/companies" class="text-lg hover:underline">Companies</a>
		<a href="/books" class="text-lg hover:underline">Books</a>
	</Container>
</div>
