<script lang="ts">
	import type { Feedback } from "$lib/feedback";
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedback: Feedback[] = []

</script>   

Feedback List

{#each feedback as fb (fb.id)}
    <FeedbackItem item={fb} on:delete-feedback/>
{/each}