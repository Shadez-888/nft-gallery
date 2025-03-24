<script>
	import '../styles/global.css';
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<div class="logo">
			<a href="{base}/">
				<img src="{base}/SHD-Logo.png" alt="Shadez Logo" />
			</a>
		</div>
		<div class="nav-links">
			<a href="{base}/">Home</a>
			<a href="{base}/gallery">Gallery</a>
			<a href="{base}/about">About</a>
		</div>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<p>© {new Date().getFullYear()} ShadezOnAbstract. All rights reserved.</p>
</footer>

<style>
	header {
		padding: 1rem;
		background: var(--card-bg);
		box-shadow: 0 2px 12px rgba(91, 191, 115, 0.1);
	}

	nav {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo img {
		height: 40px;
		width: auto;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		color: var(--text);
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.2s;
	}

	.nav-links a:hover {
		background: var(--primary-light);
		color: var(--card-bg);
	}

	@media (max-width: 768px) {
		nav {
			padding: 0 1rem;
		}
		
		.logo img {
			height: 32px;
		}
		
		.nav-links {
			gap: 1rem;
		}
	}

	main {
		max-width: 1200px;
		margin: 2rem auto;
		padding: 0 1rem;
	}

	footer {
		text-align: center;
		padding: 2rem;
		background: var(--primary);
		color: var(--card-bg);
	}
</style> 