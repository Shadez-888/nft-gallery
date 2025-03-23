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
            Image Not Found
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
    <div class="title-overlay">
        <h3>{title}</h3>
    </div>
</div>

<style>
    .featured-card {
        position: relative;
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 8px 30px rgba(91, 191, 115, 0.2);
        transition: transform 0.3s;
        padding: 0.5rem;
        background: var(--card-bg);
    }

    .featured-card:hover {
        transform: translateY(-12px);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 16px;
        aspect-ratio: 1;
        opacity: 1;
        transition: opacity 0.3s;
    }

    .title-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        padding: 2rem;
        transform: translateY(100%);
        transition: transform 0.3s;
    }

    h3 {
        color: white;
        font-size: 1.5rem;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .image-placeholder {
        width: 100%;
        height: 100%;
        background: var(--primary-light);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.2rem;
        border-radius: 16px;
        aspect-ratio: 1;
    }

    @media (min-width: 1200px) {
        .featured-card {
            min-height: 400px;
            padding: 0.75rem;
        }
    }

    .loading {
        opacity: 0;
        transition: opacity 0.3s;
    }
</style> 