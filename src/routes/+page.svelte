<script lang="ts">
	import { onMount } from 'svelte';
	import { nfts, initializeNFTStore } from '$lib/stores/nfts';
	import FeaturedNFTCard from '$lib/components/FeaturedNFTCard.svelte';

	let loading = true;
	let error: string | null = null;

	// Function to get random NFTs
	function getRandomNFTs(nftArray: typeof $nfts, count: number) {
		const shuffled = [...nftArray].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	}

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

	// Get 4 random NFTs for the featured section
	$: featuredNFTs = getRandomNFTs($nfts, 4);
</script>

{#if loading}
	<div class="loading">Loading NFTs...</div>
{:else if error}
	<div class="error">{error}</div>
{:else}
	<section class="hero">
		<div class="hero-content">
			<h1 class="title">Shadez on Abstract</h1>
			<p>Discover unique digital art pieces made with passion</p>
		</div>
	</section>

	<section class="featured">
		<h2>The Art of Shadez</h2>
		<div class="grid">
			{#each featuredNFTs as nft}
				<FeaturedNFTCard 
					title={nft.title}
					image={nft.image}
				/>
			{/each}
		</div>
	</section>
{/if}

<style>
	.hero {
		padding: 0.5rem;
		margin-bottom: 1rem;
		width: 100%;
	}

	.hero-content {
		background: var(--primary);
		border-radius: 16px;
		padding: 5rem 1rem;
		text-align: center;
		width: 100%;
	}

	.title {
		color: white;
		font-size: min(12vw, 7rem);
		font-weight: 900;
		margin: 0;
		white-space: nowrap;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	p {
		color: white;
		font-size: min(3vw, 1.5rem);
		opacity: 0.9;
		margin: 0;
		padding-top: 0.75rem;
	}

	.featured {
		padding: 2rem 1rem;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	h2 {
		font-size: min(6vw, 2.5rem);
		text-align: center;
		color: var(--primary-dark);
		margin-bottom: 2rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		width: 100%;
	}

	.loading {
		text-align: center;
		padding: 2rem;
		font-size: 1.2rem;
		color: var(--text);
	}

	.error {
		text-align: center;
		padding: 2rem;
		color: #e74c3c;
		background: #fde8e7;
		border-radius: 8px;
		margin: 2rem;
	}

	@media (max-width: 768px) {
		.hero-content {
			padding: 4rem 1rem;
		}
		
		.title {
			font-size: 9vw;
		}

		.grid {
			gap: 1rem;
		}
	}
</style>
