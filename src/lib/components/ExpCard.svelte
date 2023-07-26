<script lang="ts">
	export let duration: string;
	export let durationLabel: string;
	export let company: string;
	export let description: string;
	export let jobTitle: string;
	export let position: string;
	export let technologies: string[];
</script>

<div
	class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
>
	<div
		class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
	/>
	<header
		class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
		aria-label={durationLabel}
	>
		{duration}
	</header>
	<div class="z-10 sm:col-span-6">
		<h3 class="font-medium leading-snug text-slate-200">
			<div>
				<a
					href="/"
					class="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
				>
					<span
						class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"
					/>
					<span>{company}</span>
				</a>
			</div>
			<div>
				<div class="text-slate-500" aria-hidden="true">{jobTitle}</div>
			</div>
			<div>
				<div class="text-slate-500" aria-hidden="true">{position}</div>
			</div>
		</h3>
		<p class="mt-2 text-sm leading-normal">{description}</p>
		<ul class="mt-2 flex flex-wrap">
			{#each technologies as technology}
				<li class="mr-1.5 mt-2">
					<div
						class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
					>
						{technology}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</div>
