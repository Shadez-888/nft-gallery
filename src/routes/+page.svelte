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

	// Get 12 random NFTs for the featured section
	$: featuredNFTs = getRandomNFTs($nfts, 12);
</script>

{#if loading}
	<div class="loading">Loading NFTs...</div>
{:else if error}
	<div class="error">{error}</div>
{:else}
	<section class="hero">
		<h1>Shadez on Abstract</h1>
		<p>Discover unique digital art pieces made with passion</p>
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
		text-align: center;
		padding: clamp(3rem, 8vw, 5rem) 1rem;
		background: linear-gradient(135deg, var(--primary), var(--primary-dark));
		color: white;
		border-radius: 20px;
		margin-bottom: 3rem;
	}

	.hero h1 {
		font-size: clamp(2.5rem, 8vw, 6rem);
		margin-bottom: clamp(0.5rem, 2vw, 1.5rem);
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.1;
	}

	.hero p {
		font-size: clamp(1rem, 2vw, 1.4rem);
		opacity: 0.9;
		max-width: 800px;
		margin: 0 auto;
	}

	.hero h1, .hero p {
		transition: font-size 0.3s ease;
	}

	.featured {
		margin-top: 3rem;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 2rem;
	}

	h2 {
		font-size: 3rem;
		text-align: center;
		color: var(--primary-dark);
		margin-bottom: 3rem;
	}

	.loading {
		text-align: center;
		padding: 2rem;
		font-size: 1.2rem;
		color: #666;
	}

	.error {
		text-align: center;
		padding: 2rem;
		color: #e74c3c;
		background: #fde8e7;
		border-radius: 8px;
		margin: 2rem 0;
	}

	@media (max-width: 1024px) {
		.grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
