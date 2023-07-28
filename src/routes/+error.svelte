<script>
	import { page } from '$app/stores';
	import Container from '$lib/components/Container.svelte';
</script>

<Container>
	<h1 class="text-3xl mb-4">{$page.status}</h1>
	<h2 class="text-xl">{$page.error?.message}</h2>
</Container>
