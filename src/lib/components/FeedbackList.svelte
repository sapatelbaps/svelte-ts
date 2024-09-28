<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import FeedbackItem from './FeedbackItem.svelte';
	import { FeedbackStore } from '$lib/stores/stores';
</script>

<h2>Feedback List</h2>

{#each $FeedbackStore as fb (fb.id)}
	<div in:scale out:fade={{ duration: 500 }}>
		<FeedbackItem item={fb} />
	</div>
{/each}
