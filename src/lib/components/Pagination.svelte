<script lang="ts">
	export let prevUrl: string;
	export let nextUrl: string;
	export let changePage: (ur: string) => void;
</script>

<div class="flex flex-row gap-4 justify-end">
	<button
		on:click={() => changePage(prevUrl)}
		class="p-4 hover:underline disabled:opacity-50 disabled:hover:no-underline"
		disabled={!prevUrl}>Prev</button
	>
	<button
		on:click={() => changePage(nextUrl)}
		class="p-4 hover:underline disabled:hover:no-underline"
		disabled={!nextUrl}>Next</button
	>
</div>
