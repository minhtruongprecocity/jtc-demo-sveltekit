<script lang="ts">
	import { browser } from '$app/environment';

	export let currency: string;
	export let amount: number;

	$: locale = browser ? navigator.language : 'en-US';

	$: formatter = new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
		maximumFractionDigits: 0,
		minimumFractionDigits: 0
	});

	$: formatted = formatter.format(amount);
</script>

<span class={$$props.class}>{formatted}</span>
