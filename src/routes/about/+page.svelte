<script lang="ts">
	const collectionInfo = {
		name: "Shadez Collection",
		description: "A digital drawing collection, focusing on Art and launch on Abstract blockchain."
	};
</script>

<div class="about-container">
	<section class="about-hero">
		<h1>{collectionInfo.name}</h1>
	</section>

	<section class="about-content">
		<div class="info-card">
			<h2>About the Collection</h2>
			<p>{collectionInfo.description}</p>
		</div>

		<div class="info-card">
			<h2>Vision</h2>
			<p>
				Shadez want to bring the art of drawing to the blockchain.
				Each Shadez is a unique combination of traits,
				each trait is a drawing to create a unique piece of art.
				Shadez dont want to be made BS promises, they are pure art.
			</p>
		</div>

		<div class="info-card">
			<h2>Contact</h2>
			<p>
				For inquiries about the collection or individual pieces, please reach out:
				<br>
				Email: shadezonabs@proton.me
				<br>
				Twitter: @ShadezOnAbs
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