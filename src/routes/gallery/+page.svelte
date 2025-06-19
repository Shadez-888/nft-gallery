<script lang="ts">
	import { onMount } from 'svelte';
	import { nfts, initializeNFTStore } from '$lib/stores/nfts';
	import NFTCard from '$lib/components/NFTCard.svelte';
	import type { NFT } from '$lib/types';
	
	let searchTerm = '';
	let currentPage = 1;
	const itemsPerPage = 40;
	let loading = true;
	let error: string | null = null;

	// Initialize the store when the component mounts
	onMount(async () => {
		try {
			await initializeNFTStore();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load NFTs';
		} finally {
			loading = false;
		}
	});
	
	// Filter NFTs by search term only
	$: filteredNFTs = $nfts
		.filter((nft: NFT) => {
			return nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				   nft.description.toLowerCase().includes(searchTerm.toLowerCase());
		});

	// Calculate pagination
	$: totalPages = Math.ceil(filteredNFTs.length / itemsPerPage);
	$: paginatedNFTs = filteredNFTs.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	// Reset to first page when search changes
	$: {
		searchTerm;
		currentPage = 1;
	}
</script>

<!--
<div class="gallery-container">
	<div class="filters">
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="Search Shadez..."
			class="search-input"
		/>
	</div>

	{#if loading}
		<div class="loading">Loading NFTs...</div>
	{:else if error}
		<div class="error">{error}</div>
	{:else}
		<div class="nft-grid">
			{#each paginatedNFTs as nft}
				<NFTCard {...nft} />
			{/each}
		</div>

		{#if totalPages > 1}
			<div class="pagination">
				<button 
					on:click={() => currentPage--}
					disabled={currentPage === 1}
				>Previous</button>
				
				<span>{currentPage} of {totalPages}</span>
				
				<button 
					on:click={() => currentPage++}
					disabled={currentPage === totalPages}
				>Next</button>
			</div>
		{/if}
	{/if}
</div>
-->
<div class="soon-container">
	<h1>SOOOON...!</h1>
</div>

<style>
	.soon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 60vh;
		text-align: center;
	}

	h1 {
		font-size: 4rem;
		color: var(--text);
		text-transform: uppercase;
		font-weight: bold;
	}

	.gallery-container {
		padding: 1rem;
	}

	.filters {
		margin-bottom: 2rem;
	}

	.search-input {
		width: 100%;
		padding: 0.75rem 1rem;
		border: 1px solid var(--primary-light);
		border-radius: 8px;
		font-size: 1rem;
		max-width: 600px;
	}

	.nft-grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}

	.loading, .error {
		text-align: center;
		padding: 2rem;
		font-size: 1.2rem;
		color: var(--text);
	}

	.error {
		color: #ff3e3e;
	}

	.pagination {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	button {
		padding: 0.5rem 1rem;
		background: var(--primary);
		color: white;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: opacity 0.2s;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style> 
