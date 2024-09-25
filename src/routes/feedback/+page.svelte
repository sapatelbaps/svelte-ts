<script lang="ts">
	import FeedbackList from '$lib/components/FeedbackList.svelte';
	import FeedbackStats from '$lib/components/FeedbackStats.svelte';
	import type { Feedback } from '$lib/feedback';

	let feedback: Feedback[] = [
		{
			id: 1,
			rating: 10,
			text: 'Cum quos impedit voluptatem quo tempora dolorem voluptates minus quia. Inventore error porro amet. Beatae omnis provident architecto ratione et est perferendis. Labore repellendus asperiores vero dolorem modi nihil reprehenderit quam magnam. Occaecati quos sunt. Dicta unde repellat omnis est doloribus tenetur in.'
		},
		{
			id: 2,
			rating: 9,
			text: 'Natus qui ad. Autem quia quia. Iste voluptas aut. Et autem autem. Et voluptas quia.pariatur iste dolorem'
		},
		{
			id: 3,
			rating: 8,
			text: 'Natus qui ad. Autem quia quia. Iste voluptas aut. Et autem autem. Et voluptas quia. Officiis atque aut impedit ducimus possimus cum quia sint. Accusantium unde quo est. Et et commodi facilis cumque doloribus praesentium. Officiis rerum culpa ut. Aliquam neque cumque est maiores rerum est eum rem sit.'
		},
		{
			id: 4,
			rating: 5,
			text: 'Maiores molestias porro numquam. Natus unde atque adipisci dignissimos velit enim voluptas officia officiis. Ducimus a recusandae sint dolore nisi error. Voluptatem voluptas facere aperiam voluptas mollitia voluptates illo rem. Distinctio animi sed. Sit rem dolorum nihil natus et consequatur earum unde qui.'
		}
	];

	$: count = feedback.length;
	$: average = parseFloat((feedback.reduce((a, { rating }) => a + rating, 0) / feedback.length).toFixed(2));
    $: total = feedback.reduce((a, { rating }) => a + rating, 0);

	const deleteFeedback = (e: CustomEvent<any>) => {
		const id = e.detail;
		console.log('delete feedback', id);
		feedback = feedback.filter((item) => item.id !== id);
	};
</script>

<svelte:head>
	<title>Feedback List</title>
</svelte:head>

<div class="container py-0 px-5">
    <FeedbackStats {count} {average} {total}/>
	<FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</div>
