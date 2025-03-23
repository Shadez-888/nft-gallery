<script lang="ts">
	import { nfts } from '$lib/stores/nfts';
	import NFTCard from '$lib/components/NFTCard.svelte';
	import type { NFT } from '$lib/types';
	
	let searchTerm = '';
	let selectedCategory = 'All';
	let currentPage = 1;
	const itemsPerPage = 40;
	
	// Get unique categories from NFTs
	$: categories = ['All', ...new Set($nfts.map(nft => nft.category))];
	
	// Filter NFTs based on search and category
	$: filteredNFTs = $nfts.filter((nft: NFT) => {
		const matchesSearch = nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
							nft.description.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesCategory = selectedCategory === 'All' || nft.category === selectedCategory;
		return matchesSearch && matchesCategory;
	});

	// Calculate pagination
	$: totalPages = Math.ceil(filteredNFTs.length / itemsPerPage);
	$: paginatedNFTs = filteredNFTs.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	// Navigation functions
	function nextPage() {
		if (currentPage < totalPages) currentPage++;
	}

	function previousPage() {
		if (currentPage > 1) currentPage--;
	}

	// Reset to first page when filters change
	$: {
		searchTerm;
		selectedCategory;
		currentPage = 1;
	}
</script>

<div class="gallery-container">
	<div class="filters">
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="Search NFTs..."
			class="search-input"
		/>
		
		<select bind:value={selectedCategory} class="category-select">
			{#each categories as category}
				<option value={category}>{category}</option>
			{/each}
		</select>
	</div>

	<div class="gallery-grid">
		{#each paginatedNFTs as nft (nft.id)}
			<NFTCard {...nft} />
		{/each}
	</div>

	{#if totalPages > 1}
		<div class="pagination">
			<button 
				class="pagination-btn" 
				disabled={currentPage === 1}
				on:click={previousPage}
			>
				Previous
			</button>
			<span class="page-info">Page {currentPage} of {totalPages}</span>
			<button 
				class="pagination-btn" 
				disabled={currentPage === totalPages}
				on:click={nextPage}
			>
				Next
			</button>
		</div>
	{/if}
</div>

<style>
	.gallery-container {
		padding: 2rem 0;
	}

	.filters {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.search-input,
	.category-select {
		padding: 0.75rem 1.25rem;
		border: 2px solid var(--primary-light);
		border-radius: 12px;
		font-size: 1rem;
		font-family: 'Outfit', sans-serif;
		transition: border-color 0.2s;
	}

	.search-input:focus,
	.category-select:focus {
		outline: none;
		border-color: var(--primary);
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.pagination {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;
	}

	.pagination-btn {
		padding: 0.75rem 1.5rem;
		border: none;
		background: var(--primary);
		color: white;
		border-radius: 12px;
		cursor: pointer;
		font-size: 1rem;
		font-family: 'Outfit', sans-serif;
		transition: background 0.2s;
	}

	.pagination-btn:not(:disabled):hover {
		background: var(--primary-dark);
	}

	.pagination-btn:disabled {
		background: var(--primary-light);
		opacity: 0.7;
	}

	.page-info {
		font-size: 1.1rem;
		color: var(--text-light);
	}

	@media (max-width: 640px) {
		.filters {
			flex-direction: column;
		}
	}
</style> 