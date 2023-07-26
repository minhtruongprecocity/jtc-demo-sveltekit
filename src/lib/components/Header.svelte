<script lang="ts">
	import Container from './Container.svelte';
</script>

<div class="flex items-center bg-teal-200 py-4">
	<Container class="flex flex-row items-center gap-10 text-blue-950">
		<div class="text-3xl font-bold mr-5">JTC Demo</div>

		<a href="/companies" class="text-lg hover:underline">Companies</a>
		<a href="/books" class="text-lg hover:underline">Books</a>
	</Container>
</div>
