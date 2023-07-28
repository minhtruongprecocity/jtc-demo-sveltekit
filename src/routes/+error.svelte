<script>
	import { page } from '$app/stores';
	import Container from '$lib/components/Container.svelte';
</script>

<Container>
	<h1 class="text-xl">{$page.error?.message}</h1>
</Container>
