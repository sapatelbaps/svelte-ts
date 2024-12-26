<!-- vs-order/+page.svelte -->
<script>
	let orderId = '999999';

	async function submitOrder() {
		const response = await fetch('/vc-order', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ orderId })
		});

		const result = await response.json();
		alert(result.message);
	}
</script>

<form on:submit|preventDefault={submitOrder}>
	<label for="orderId">Order ID:</label>
	<input type="text" id="orderId" bind:value={orderId} required />

	<button type="submit">Submit Order</button>
</form>
