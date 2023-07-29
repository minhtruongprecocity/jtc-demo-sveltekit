<script lang="ts">
	import type { Book } from '../../types/Book';

	export let books: Array<Book>;
</script>

<div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
	{#each books as book}
		<a
			href={`/books/${book.id}`}
			class="flex flex-row items-start justify-start gap-4 bg-white p-4 shadow-sm hover:bg-gray-50"
		>
			{#if book.formats?.['image/jpeg']}
				<img
					src={book.formats['image/jpeg']}
					alt={`${book.title} cover`}
					class="max-h-48 w-36 object-contain"
				/>
			{/if}
			<div class="flex-1">
				<div class="text-sm text-gray-500">{book.authors?.[0]?.name}</div>
				<div class="text-md sm:text-md font-bold lg:text-lg">{book.title}</div>
			</div>
		</a>
	{/each}
</div>
