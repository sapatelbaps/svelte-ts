<script lang="ts">
	export let style: string = 'primary';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let disabled: boolean = false;
</script>

<button class={style} {disabled} {type}>
	<slot />
</button>

<style>
	button {
		color: #fff;
		border: 0;
		border-radius: 8px;
		color: white;
		padding: 8px 12px;
		font-weight: bold;
		cursor: pointer;
		width: 100px;
		height: 40px;
		transition: all 0.2s ease;
		box-shadow:
			0 4px 6px -1px rgba(0, 0, 0, 0.1),
			0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}

	.primary {
		background-color: #202142;
	}

	.secondary {
		background-color: #ff6a95;
	}

	button:hover {
		transform: scale(0.98);
		opacity: 0.9;
	}

	button:disabled {
		opacity: 0.5;
		background-color: #cccccc;
		color: #333;
		cursor: not-allowed;
	}

	button:disabled:hover {
		transform: scale(1);
	}

	.outline {
		background-color: #cccccc;
		color: #333;
		border: 2px solid #d91b42;
	}

	.outline:hover {
		background-color: #d91b42;
		color: white;
	}
</style>
