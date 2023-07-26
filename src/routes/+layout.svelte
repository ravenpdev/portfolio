<script>
	import '../app.css';
</script>

<div class="bg-slate-900 font-body text-slate-400">
	<div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-24">
		<div class="lg:flex lg:justify-between lg:gap-4">
			<header
				class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24"
			>
				<div>
					<h1 class="text-5xl font-bold text-slate-200">
						<a href="/">Raven Paragas</a>
					</h1>
					<h2 class="mt-3 font-semibold uppercase tracking-wide text-slate-500">
						Software Engineer
					</h2>
					<p class="mt-4 max-w-xs leading-normal">
						I'm a softare engineer specializing in building (and occasionally designing) web
						applications.
					</p>
					<nav class="nav hidden lg:block">
						<ul class="mt-16 w-max">
							<li>
								<a class="group flex items-center py-3" href="#about">
									<span
										class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
									/>
									<span
										class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
										>About</span
									>
								</a>
							</li>
							<li>
								<a class="group flex items-center py-3" href="#about">
									<span
										class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
									/>
									<span
										class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
										>Experience</span
									>
								</a>
							</li>
							<li>
								<a class="group flex items-center py-3" href="#about">
									<span
										class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
									/>
									<span
										class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
										>Projects</span
									>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<slot />
		</div>
	</div>
</div>
