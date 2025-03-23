<script lang="ts">
	import { onMount } from 'svelte';
	import type { NFT } from '../types';
	
	export let title: string;
	export let image: string;
	export let description: string;
	export let attributes: NFT['attributes'] = [];

	let imageError = false;
	let imageLoaded = false;

	function handleImageError() {
		console.error(`Failed to load image: ${image}`);
		imageError = true;
	}

	function handleImageLoad() {
		imageLoaded = true;
	}
</script>

<div class="nft-card">
	{#if imageError}
		<div class="image-placeholder">
			Image Not Found
		</div>
	{:else}
		<img 
			src={image} 
			alt={title}
			on:error={handleImageError}
			on:load={handleImageLoad}
		/>
	{/if}
	<div class="content">
		<h3>{title}</h3>
		<p>{description}</p>
		<div class="attributes">
			{#each attributes as attr}
				<span class="attribute">
					<strong>{attr.trait_type}:</strong> {attr.value}
				</span>
			{/each}
		</div>
	</div>
</div>

<style>
	.nft-card {
		background: var(--card-bg);
		border-radius: 16px;
		overflow: hidden;
		box-shadow: 0 4px 20px rgba(91, 191, 115, 0.15);
		transition: transform 0.3s, box-shadow 0.3s;
	}

	.nft-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 8px 30px rgba(91, 191, 115, 0.2);
	}

	.content {
		padding: 1.5rem;
	}

	img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	.image-placeholder {
		width: 100%;
		aspect-ratio: 1;
		background: #f0f0f0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #666;
		font-size: 0.9rem;
	}

	h3 {
		color: var(--primary-dark);
		font-size: 1.25rem;
	}

	p {
		font-size: 0.9rem;
		color: #666;
		margin: 0;
	}

	.attributes {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: 1rem;
	}

	.attribute {
		font-size: 0.85rem;
		background: var(--primary-light);
		color: var(--card-bg);
		padding: 0.35rem 0.75rem;
		border-radius: 20px;
	}
</style> 