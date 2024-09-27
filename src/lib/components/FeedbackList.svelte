<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import FeedbackItem from './FeedbackItem.svelte';
	import { FeedbackStore } from '$lib/stores/stores';

	$: count = $FeedbackStore.length;
</script>

Feedback List

{#each $FeedbackStore as fb (fb.id)}
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedbackItem item={fb} />
	</div>
{/each}
