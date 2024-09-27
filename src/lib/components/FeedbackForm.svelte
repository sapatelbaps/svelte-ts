<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import Button from '$lib/components/Button.svelte';
	import Card from './Card.svelte';
	import RatingSelect from './RatingSelect.svelte';
	import { createEventDispatcher } from 'svelte';

	let text = '';
	let btnDisabled = true;
	let min = 10;
	let message: string | null = null;
	let rating: number | null = 10;

	const dispatch = createEventDispatcher();

	const handleInput = () => {
		if (text.trim().length <= min) {
			message = `Text must be at least ${min} characters`;
			btnDisabled = true;
		} else {
			btnDisabled = false;
			message = null;
		}
	};

	const handleSelect = (e: CustomEvent) => {
		rating = e.detail;
	};

	const handleSubmit = (e: SubmitEvent) => {
		if (text.trim().length > min) {
			const newFeedback = {
				id: uuidv4(),
				text,
				rating: rating
			};
			// console.log(newFeedback);
			dispatch('add-feedback', newFeedback);
			text = '';
		}
	};
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<form on:submit|preventDefault={handleSubmit}>
		<RatingSelect on:rating-select={handleSelect} />
		<div class="input-group">
			<input
				type="text"
				bind:value={text}
				placeholder="Tell us something about the site speed"
				on:input={handleInput}
			/>
			<Button disabled={btnDisabled} type="submit">Add</Button>
		</div>

		{#if message}
			<p class="message">{message}</p>
		{/if}
	</form>
</Card>

<style>
	header {
		max-width: 400px;
		margin: auto;
	}

	header h2 {
		font-size: 22px;
		font-weight: 600;
		text-align: center;
	}

	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}

	.message {
		padding-top: 10px;
		text-align: center;
		color: rebeccapurple;
	}
</style>
