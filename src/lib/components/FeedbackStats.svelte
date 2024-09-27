<script lang="ts">
	import { FeedbackStore } from '$lib/stores/stores';
	$: count = $FeedbackStore.length;
	$: average = parseFloat(
		($FeedbackStore.reduce((a, { rating }) => a + rating, 0) / $FeedbackStore.length).toFixed(2)
	);
	$: total = $FeedbackStore.reduce((a, { rating }) => a + rating, 0);
</script>

<div class="feedback-stats">
	<h4>{count} Reviews</h4>
	<h4>Rating Average: {average}</h4>
	<h4>Rating Total: {total}</h4>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
