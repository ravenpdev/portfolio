<script lang="ts">
	import { scrollRef, scrollTo } from '$lib/actions/smoothScroll';
	import developerImg from '$lib/assets/dev.jpg';
	import Icon from '@iconify/svelte';

	const projects = [
		{
			id: 1,
			title: 'Job Listing App',
			description:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			technologies: ['Sveltekit', 'TailwindCss', 'Primsa']
		},
		{
			id: 2,
			title: 'Inventory App',
			description:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			technologies: ['Sveltekit', 'TailwindCss', 'Primsa']
		},
		{
			id: 3,
			title: 'Task Management App',
			description:
				'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
			technologies: ['Sveltekit', 'TailwindCss', 'Primsa']
		}
	];
</script>

<section class="min-h-screen px-4 py-24">
	<div class="flex items-center mt-40 justify-center">
		<div class="max-w-md text-center">
			<h2 class="text-4xl md:text-5xl font-bold md:leading-snug md:tracking-wide">
				<p>Programming</p>
				<p>and Technologies</p>
				<p>from the Future</p>
			</h2>
			<h3 class="text-lg mt-2 font-bold text-gray-500 uppercase tracking-wide">Web Developer</h3>
			<!-- <p class="mt-2 text-gray-700 text-lg dark:text-gray-400" /> -->
		</div>
	</div>

	<div class="mt-16 text-center">
		<a
			href="#work"
			use:scrollTo
			class="border-2 p-3 hover:bg-cyan-500 hover:text-cyan-50 hover:border-cyan-500"
			>Dig into my projects</a
		>
	</div>
</section>

<section
	class="bg-cyan-500 bg-opacity-10 flex flex-col lg:flex-row py-28 lg:py-48"
	use:scrollRef={'about'}
>
	<div class="flex-1">
		<img src={developerImg} alt="" />
	</div>
	<div class="flex-1 px-4 md:px-8 mt-20 lg:mt-0">
		<h3 class="text-cyan-500 font-bold">ABOUT</h3>
		<p class="text-4xl font-bold mt-4 text-gray-500">Developer</p>

		<p class="mt-8 text-gray-700 dark:text-gray-400">
			I'm Raven, a passionate freelancer bringing you the latest technologies from the future. I am
			experienced in frontend and backend development.
		</p>
	</div>
</section>

<section id="work" class="py-28 lg:py-48">
	<div class="overflow-x-hidden gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-8">
		{#each projects as project, idx}
			<div class="p-4">
				<img class="object-fit" src={developerImg} alt="" />

				<div class="mt-10">
					<h3 class="text-2xl font-bold text-gray-500">{project.title}</h3>
				</div>

				<p class="text-sm mt-4 text-gray-500">{project.description}</p>

				<div class="mt-4 flex gap-4">
					{#each project.technologies as tech}
						<span
							class="py-1 px-3 bg-gray-100 hover:bg-gray-200 text-gray-500 text-sm cursor-pointer dark:bg-gray-500 dark:text-gray-300 rounded-full dark:hover:bg-gray-600"
							>{tech}</span
						>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<section
	class="flex bg-violet-50 dark:bg-purple-900 dark:bg-opacity-20 flex-col lg:flex-row py-28 lg:py-48"
	use:scrollRef={'contact'}
>
	<div class="flex-1 px-4 lg:px-8 lg:mt-20">
		<h3 class="text-cyan-500 font-bold">CONTACT</h3>
		<p class="text-4xl font-bold mt-4">Got an interesting idea?</p>

		<p class="mt-8">Hit me up! just sit, relax and watch your ideas become to a reaility.</p>

		<p class="mt-12 flex gap-2 items-center">
			<Icon icon="mdi:envelope" class="text-2xl" /> ravenp.dev@gmail.com
		</p>
	</div>

	<div class="flex-1 px-4 lg:px-8 mt-20 lg:mt-0">
		<form class="max-w-lg mx-auto space-y-8" action="">
			<div class="flex flex-col gap-2">
				<label for="name"> Name </label>
				<input class="w-full py-3" id="name" type="text" placeholder="Name" />
			</div>

			<div class="flex flex-col gap-2">
				<label for="email">Email</label>
				<input class="w-full py-3" id="email" type="email" placeholder="Email" />
			</div>

			<div class="flex flex-col gap-2">
				<label for="emssage">Message</label>
				<textarea class="w-full py-3" id="emssage" placeholder="Email" rows="5" />
			</div>

			<button class="py-3 px-6 bg-purple-500 text-purple-50 font-medium hover:bg-purple-600"
				>Email Me!</button
			>
		</form>
	</div>
</section>
