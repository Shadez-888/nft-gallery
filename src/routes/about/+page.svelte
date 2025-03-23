<script lang="ts">
	const collectionInfo = {
		name: "Digital Dreams Collection",
		artist: "Your Name",
		established: "2024",
		description: "A curated collection of unique digital artworks exploring themes of technology, nature, and human consciousness."
	};
</script>

<div class="about-container">
	<section class="about-hero">
		<h1>{collectionInfo.name}</h1>
		<p class="subtitle">By {collectionInfo.artist}</p>
	</section>

	<section class="about-content">
		<div class="info-card">
			<h2>About the Collection</h2>
			<p>{collectionInfo.description}</p>
		</div>

		<div class="info-card">
			<h2>Artist Statement</h2>
			<p>
				As a digital artist, I explore the intersection of technology and creativity,
				pushing the boundaries of what's possible in the digital realm. Each piece
				in this collection represents a unique moment of inspiration and innovation.
			</p>
		</div>

		<div class="info-card">
			<h2>Contact</h2>
			<p>
				For inquiries about the collection or individual pieces, please reach out:
				<br>
				Email: your.email@example.com
				<br>
				Twitter: @yourhandle
			</p>
		</div>
	</section>
</div>

<style>
	.about-container {
		max-width: 800px;
		margin: 0 auto;
	}

	.about-hero {
		text-align: center;
		padding: 3rem 0;
	}

	.subtitle {
		color: #666;
		font-size: 1.2rem;
	}

	.about-content {
		display: grid;
		gap: 2rem;
	}

	.info-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	h2 {
		color: #333;
		margin-bottom: 1rem;
	}
</style> 