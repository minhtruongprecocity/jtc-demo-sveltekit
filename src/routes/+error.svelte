<script>
	import { page } from '$app/stores';
	import Container from '$lib/components/Container.svelte';
</script>

<Container>
	<h1 class="mb-4 text-3xl">{$page.status}</h1>
	<h2 class="text-xl">{$page.error?.message}</h2>
</Container>
