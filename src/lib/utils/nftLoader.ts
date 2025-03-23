import type { NFT, NFTMetadata, NFTAttribute } from '../types';
import { base } from '$app/paths';

// Function to get local image path and verify file existence
function getLocalImagePath(id: string): string {
    return `${base}/nft/image/${id}.png`;
}

// Function to process metadata into our NFT format
function processMetadata(metadata: NFTMetadata, id: string): NFT {
    try {
        // Log the metadata for debugging
        console.log(`Processing metadata for ID ${id}:`, metadata);

        const nft: NFT = {
            id,
            title: metadata.title || `NFT #${id}`,
            image: getLocalImagePath(id),
            description: metadata.description || '',
            category: metadata.category || 'Uncategorized',
            created: metadata.created || new Date().toISOString().split('T')[0],
            attributes: metadata.attributes || []
        };

        return nft;
    } catch (error) {
        console.error(`Error processing metadata for ID ${id}:`, error);
        throw error;
    }
}

// Load all NFT metadata
export async function loadNFTMetadata(): Promise<NFT[]> {
    const nfts: NFT[] = [];
    
    try {
        // Import all JSON files from the metadata directory
        const metadataFiles = import.meta.glob<{ default: NFTMetadata }>('/src/nft/metadata/*.json', { eager: true });
        console.log('Found metadata files:', Object.keys(metadataFiles));
        
        for (const path in metadataFiles) {
            try {
                const { default: metadata } = metadataFiles[path];
                const id = path.split('/').pop()?.replace('.json', '') || '';
                console.log(`Processing file: ${path} with ID: ${id}`);
                nfts.push(processMetadata(metadata, id));
            } catch (error) {
                console.error(`Error processing file ${path}:`, error);
            }
        }
        
        return nfts.sort((a, b) => Number(a.id) - Number(b.id));
    } catch (error) {
        console.error('Error loading NFT metadata:', error);
        return [];
    }
} 