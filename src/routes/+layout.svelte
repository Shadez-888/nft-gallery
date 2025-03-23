<script>
	import '../styles/global.css';
</script>

<header>
	<nav>
		<a href="/">Home</a>
		<a href="/gallery">Gallery</a>
		<a href="/about">About</a>
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
		gap: 2rem;
	}

	nav a {
		color: var(--text);
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		transition: all 0.2s;
	}

	nav a:hover {
		background: var(--primary-light);
		color: var(--card-bg);
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