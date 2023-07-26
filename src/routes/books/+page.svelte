<script lang="ts">
	import { getBooks, getBooksWithUrl } from '$lib/api/books';
	import BooksTable from '$lib/components/BooksTable.svelte';
	import Container from '$lib/components/Container.svelte';

	let booksPromise = getBooks();

	function changePage(url: string) {
		booksPromise = getBooksWithUrl(url);
	}
</script>

<Container>
	{#await booksPromise}
		<h1>Loading...</h1>
	{:then books}
		<div class="flex flex-row gap-4 justify-end">
			<button
				on:click={() => changePage(books.previous)}
				class="p-4 hover:underline disabled:opacity-50 disabled:hover:no-underline"
				disabled={!books.previous}>Prev</button
			>
			<button
				on:click={() => changePage(books.next)}
				class="p-4 hover:underline"
				disabled={!books.next}>Next</button
			>
		</div>
		<BooksTable books={books.results} />
		<div class="flex flex-row gap-4 justify-end">
			<button
				on:click={() => changePage(books.previous)}
				class="p-4 hover:underline disabled:opacity-50 disabled:hover:no-underline"
				disabled={!books.previous}>Prev</button
			>
			<button
				on:click={() => changePage(books.next)}
				class="p-4 hover:underline"
				disabled={!books.next}>Next</button
			>
		</div>
	{:catch error}
		<h1>Error</h1>
	{/await}
</Container>
