export interface NFTAttribute {
	trait_type: string;
	value: string;
}

export interface NFT {
	id: string;
	title: string;
	image: string;
	description: string;
	category: string;
	created: string;
	attributes: NFTAttribute[];
}

export interface NFTMetadata {
	name: string;
	description: string;
	image: string;
	external_url: string;
	attributes: NFTAttribute[];
} 