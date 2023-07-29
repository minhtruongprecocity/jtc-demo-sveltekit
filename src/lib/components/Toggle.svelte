<script lang="ts">
	export let checked: boolean;
	export let offLabel: string;
	export let onLabel: string;
</script>

<label
	for="toggle"
	class="inline-flex cursor-pointer items-center rounded-md p-2 text-sm {$$props.class}"
>
	<input id="toggle" type="checkbox" class="peer hidden" bind:checked on:click />
	<span
		class="rounded-l-sm bg-blue-900 px-4 py-1 text-white peer-checked:bg-gray-300 peer-checked:text-black"
		>{offLabel}</span
	>
	<span
		class="rounded-r-sm bg-gray-300 px-4 py-1 text-black peer-checked:bg-blue-900 peer-checked:text-white"
		>{onLabel}</span
	>
</label>
