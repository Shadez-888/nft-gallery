<script lang="ts">
    import { dev } from '$app/environment';

    let error: Error | null = null;

    function handleError(e: ErrorEvent) {
        error = e.error;
        console.error('Error caught by boundary:', e.error);
    }
</script>

<svelte:window on:error={handleError} />

{#if error}
    <div class="error-boundary">
        <h2>Something went wrong</h2>
        {#if dev}
            <pre>{error.stack}</pre>
        {:else}
            <p>Please try refreshing the page</p>
        {/if}
    </div>
{:else}
    <slot />
{/if} 