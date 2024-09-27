<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Card from './Card.svelte';
	export let item;

	const dispatch = createEventDispatcher();

	const handleDelete = (itemId: number) => {
		dispatch('delete-feedback', itemId);
	};
</script>

<Card>
	<div class="num-display">{item.rating}</div>
	<div class="close" on:click={() => handleDelete(item.id)}>X</div>
	<p class="text-display">{item.text}</p>
</Card>

<style>
	.num-display {
		position: absolute;
		top: -10px;
		left: -10px;
		width: 20px;
		height: 20px;
		background: #ff6a95;
		color: #fff;
		border: 1px #eee solid;
		border-radius: 50%;
		padding: 10px;
		text-align: center;
		font-size: 19px;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
		background: none;
		border: none;
	}
</style>
