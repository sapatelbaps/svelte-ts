<script lang="ts">
    export let count: number
    export let average: number
    export let total: number
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