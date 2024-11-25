<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import type { ShippingActivity } from '$lib/types/shipping';

	let startDate: string = '';
	let endDate: string = '';
	let tableRows: Array<ShippingActivity> = [];

	function getPreviousMonthDates(): { start: string; end: string } {
		const today = new Date();
		// Set to last day of previous month
		const lastDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
		// Set to first day of previous month
		const firstDayOfPrevMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);

		return {
			start: formatDate(firstDayOfPrevMonth),
			end: formatDate(lastDayOfPrevMonth)
		};
	}

	function formatDate(date: Date): string {
		return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}T00:00:00`;
	}

	onMount(() => {
		const { start, end } = getPreviousMonthDates();
		startDate = start;
		endDate = end;
	});

	async function fetchShippingActivity() {
		const response = await fetch('/vc-shipping', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ startDate, endDate })
		});

		if (response.ok) {
			tableRows = await response.json();
		} else {
			console.error('Failed to fetch shipping activity');
		}
	}
</script>

<form on:submit|preventDefault={fetchShippingActivity}>
	<label for="start-date">Start Date:</label>
	<input type="date" id="start-date" bind:value={startDate} required />

	<label for="end-date">End Date:</label>
	<input type="date" id="end-date" bind:value={endDate} required />

	<button type="submit">Get Shipping Activity</button>
</form>

{#if tableRows.length > 0}
	<table>
		<thead>
			<tr>
				<!-- Define your table headers here -->
				<th>OrderId</th>
				<th>Order Type</th>
				<th>PickPackId</th>
				<th>Type</th>
				<th>Lines Shipped</th>
				<th>Pieces Shipped</th>
				<th>Ship Date</th>
				<th>Packages</th>
				<th>Weight</th>
				<th>Published Freight</th>
				<th>Actual Freight</th>
				<th>MarkedUp Freight</th>
			</tr>
		</thead>
		<tbody>
			{#each tableRows as row}
				<tr>
					<!-- Populate table cells with data -->
					<td>{row.OrderId}</td>
					<td>{row.ShippingOrderType}</td>
					<td>{row.PickPackId}</td>
					<td>{row.Type}</td>
					<td>{row.LinesShipped}</td>
					<td>{row.PiecesShipped}</td>
					<td>{row.ShipDate}</td>
					<td>{row.NumberofPackages}</td>
					<td>{row.TotalWeight}</td>
					<td>{row.PublishedFreight}</td>
					<td>{row.ActualFreight}</td>
					<td>{row.MarkedUpFreight}</td>
				</tr>
			{/each}
		</tbody>
	</table>
{/if}
