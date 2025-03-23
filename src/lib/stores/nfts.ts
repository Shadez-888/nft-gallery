import { writable } from 'svelte/store';
import type { NFT } from '../types';
import { loadNFTMetadata } from '../utils/nftLoader';
import { base } from '$app/paths';

// Sample NFT data - in a real app, this would come from an API or database
export const nfts = writable<NFT[]>([
	{
		id: '1',
		title: 'Shadez #1',
		image: `${base}/nft/image/nft1.png`,
		description: 'A mesmerizing piece from the Cosmic collection',
		category: 'Abstract',
		created: '2024-01-15',
		attributes: [{ trait_type: 'BASE', value: 'Abstract' }]
	},
	{
		id: '2',
		title: 'Shadez #2',
		image: `${base}/nft/image/nft2.png`,
		description: 'Exploring the boundaries of digital art',
		category: 'Landscape',
		created: '2024-02-01',
		attributes: [{ trait_type: 'BASE', value: 'Landscape' }]
	},
	// Add more NFTs here...
]);

// Initialize store with data
export async function initializeNFTStore() {
	const loadedNFTs = await loadNFTMetadata();
	nfts.set(loadedNFTs);
}

// If you're generating additional NFTs dynamically, update the title format:
for (let i = 3; i <= 12; i++) {
	nfts.update(current => [...current, {
		id: i.toString(),
		title: `Shadez #${i}`, // Updated format
		image: `${base}/nft/image/nft${i}.png`,
		description: `Generated Shadez #${i}`,
		category: 'Generated',
		created: new Date().toISOString().split('T')[0],
		attributes: [{ trait_type: 'BASE', value: 'Generated' }]
	}]);
} 