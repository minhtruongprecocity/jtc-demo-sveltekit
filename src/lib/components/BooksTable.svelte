<script lang="ts">
	import type { Book } from '../../types/Book';

	export let books: Array<Book>;
</script>

<div class="grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
	{#each books as book}
		<div class="flex flex-row items-start justify-start gap-4 bg-white p-4">
			{#if book.formats?.['image/jpeg']}
				<img
					src={book.formats['image/jpeg']}
					alt={`${book.title} cover`}
					class="w-36 max-h-48 object-contain"
				/>
			{/if}
			<div class="flex-1">
				<div class="text-sm text-gray-500">{book.authors?.[0]?.name}</div>
				<div class="text-md font-bold lg:text-lg sm:text-md">{book.title}</div>
			</div>
		</div>
	{/each}
</div>
