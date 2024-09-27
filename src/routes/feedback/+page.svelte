<script lang="ts">
	import FeedbackForm from '$lib/components/FeedbackForm.svelte';
	import FeedbackList from '$lib/components/FeedbackList.svelte';
	import FeedbackStats from '$lib/components/FeedbackStats.svelte';
</script>

<svelte:head>
	<title>Feedback List</title>
</svelte:head>

<FeedbackForm />

<div class="container py-0 px-5">
	<FeedbackStats />
	<FeedbackList />
</div>
