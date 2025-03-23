import { writable } from 'svelte/store';
import type { NFT } from '../types';
import { loadNFTMetadata } from '../utils/nftLoader';

// Sample NFT data - in a real app, this would come from an API or database
export const nfts = writable<NFT[]>([
	{
		id: '1',
		title: 'Cosmic Dreamer #1',
		image: '/images/nft1.jpg',
		description: 'A mesmerizing piece from the Cosmic collection',
		category: 'Abstract',
		created: '2024-01-15',
		attributes: [{ trait_type: 'BASE', value: 'Abstract' }]
	},
	{
		id: '2',
		title: 'Digital Horizon #4',
		image: '/images/nft2.jpg',
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