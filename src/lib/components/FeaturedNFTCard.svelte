<script lang="ts">
    export let title: string;
    export let image: string;

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

<div class="featured-card">
    {#if imageError}
        <div class="image-placeholder">
            <span>Loading Art...</span>
        </div>
    {:else}
        <img 
            src={image} 
            alt={title}
            on:error={handleImageError}
            on:load={handleImageLoad}
            loading="lazy"
            class={!imageLoaded ? 'loading' : ''}
        />
    {/if}
</div>

<style>
    .featured-card {
        position: relative;
        border-radius: 16px;
        overflow: hidden;
        aspect-ratio: 1;
        background: var(--card-bg);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .featured-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 8px 30px rgba(91, 191, 115, 0.2);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
        transition: opacity 0.3s ease;
    }

    img.loading {
        opacity: 0;
    }

    .image-placeholder {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
        border-radius: 16px;
        color: #666;
        font-size: 0.9rem;
    }
</style> 