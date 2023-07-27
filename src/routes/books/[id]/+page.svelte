<script lang="ts">
	import { getBook } from '$lib/api/books';
	import Container from '$lib/components/Container.svelte';
	import { page } from '$app/stores';
	import { BookFormats } from '../../../types/Book';

	const bookId = $page.params.id;

	let bookPromise = getBook(bookId);
</script>

<svelte:head>
	<title>Books</title>
</svelte:head>

<Container>
	{#await bookPromise}
		<h1 class="text-lg">Loading...</h1>
	{:then book}
		<button class="mb-4 py-2 block text-blue-950" on:click={() => history.back()}>
			&lt; <span class="hover:underline">Back</span>
		</button>

		<div class="flex flex-row gap-10">
			<img
				src={book.formats['image/jpeg']}
				alt={`${book.title} cover`}
				class="max-h-72 w-48 object-contain mb-5"
			/>
			<div class="flex-1">
				<div class="mb-5">
					<div class="text-2xl font-bold">{book.title}</div>
					{#each book.authors as author}
						<div class="text-md">{author.name}</div>
					{/each}
				</div>

				<div class="mb-5">
					<div class="font-bold">Download Count</div>
					<div class="">{book.download_count}</div>
				</div>

				<div class="mb-5">
					<div class="font-bold">Subjects</div>
					{#each book.subjects as subject}
						<div class="">{subject}</div>
					{/each}
				</div>

				<div class="mb-5">
					<div class="font-bold">Downloads</div>
					{#each BookFormats as format}
						{#if book.formats[format.mimeType]}
							<a
								href={book.formats[format.mimeType]}
								class="block text-blue-950 underline"
								target="_blank">{format.name}</a
							>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{:catch error}
		<h1>Error</h1>
	{/await}
</Container>
