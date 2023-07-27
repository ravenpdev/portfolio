<script lang="ts">
	import '../app.css';

	let activeLink = 'about';

	let links = ['about', 'experience', 'projects'];

	function handleAnchorClick(e: MouseEvent) {
		e.preventDefault();

		const link: HTMLAnchorElement | null = e.currentTarget as HTMLAnchorElement;
		const anchorId = new URL(link?.href).hash.replace('#', '');
		const section = document.getElementById(anchorId);
		activeLink = anchorId;

		if (section) {
			window.scrollTo({
				top: section.offsetTop - 96,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="bg-slate-900 font-body text-slate-400">
	<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
		<div class="lg:flex lg:justify-between lg:gap-4">
			<header
				class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
			>
				<div>
					<h1 class="text-5xl font-bold text-slate-200">
						<a href="/">Raven Paragas</a>
					</h1>
					<h2 class="mt-3 font-semibold uppercase tracking-wide text-slate-500">
						Developer / Freelancer
					</h2>
					<p class="mt-4 max-w-xs leading-normal">
						I'm a developer specializing in building web applications.
					</p>
					<nav class="nav hidden lg:block">
						<ul class="mt-16 w-max">
							{#each links as link}
								<li>
									<a
										class="group flex items-center py-3"
										href="#{link}"
										on:click={handleAnchorClick}
									>
										<span
											class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none {activeLink ===
											link
												? 'w-16 bg-slate-200'
												: ''}"
										/>
										<span
											class="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200 {activeLink ===
											link
												? 'text-slate-200'
												: 'text-slate-500'}">{link}</span
										>
									</a>
								</li>
							{/each}
						</ul>
					</nav>

					<div class="mt-16">
						<a
							class="rounded-sm border border-slate-400 px-10 py-2.5 font-bold uppercase tracking-wider text-slate-400 hover:border-teal-500 hover:text-teal-400"
							href="/resume">Hire me</a
						>
					</div>
				</div>
			</header>
			<slot />
		</div>
	</div>
</div>
