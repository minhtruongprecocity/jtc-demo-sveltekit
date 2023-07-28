<script lang="ts">
	import { getBooks, getBooksWithUrl } from '$lib/api/books';
	import BooksTable from '$lib/components/BooksTable.svelte';
	import Container from '$lib/components/Container.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	let booksPromise = getBooks();

	function changePage(url: string) {
		booksPromise = getBooksWithUrl(url);
	}
</script>

<svelte:head>
	<title>Books</title>
</svelte:head>

<Container>
	{#await booksPromise}
		<h1 class="text-lg">Loading...</h1>
	{:then books}
		<Pagination prevUrl={books.previous} nextUrl={books.next} {changePage} />
		<BooksTable books={books.results} />
		<Pagination prevUrl={books.previous} nextUrl={books.next} {changePage} />
	{:catch error}
		<h1>Error</h1>
	{/await}
</Container>
