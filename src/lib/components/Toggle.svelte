<script lang="ts">
	export let checked: boolean;
	export let offLabel: string;
	export let onLabel: string;
</script>

<label
	for="toggle"
	class="inline-flex items-center p-2 rounded-md cursor-pointer text-sm {$$props.class}"
>
	<input id="toggle" type="checkbox" class="hidden peer" bind:checked on:click />
	<span
		class="px-4 py-1 rounded-l-sm bg-blue-900 peer-checked:bg-gray-300 text-white peer-checked:text-black"
		>{offLabel}</span
	>
	<span
		class="px-4 py-1 rounded-r-sm bg-gray-300 peer-checked:bg-blue-900 peer-checked:text-white text-black"
		>{onLabel}</span
	>
</label>
