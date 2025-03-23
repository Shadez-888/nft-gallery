export const config = {
    apiUrl: import.meta.env.VITE_API_URL || '',
    ipfsGateway: import.meta.env.VITE_IPFS_GATEWAY || 'https://ipfs.io/ipfs/',
    maxNFTsPerPage: 40,
    defaultTitle: 'Shadez on Abstract',
    defaultDescription: 'Discover unique digital art pieces made with passion'
}; 