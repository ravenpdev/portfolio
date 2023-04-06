<script lang="ts">
	import Icon from '@iconify/svelte';
	import ToggleDarkButton from '$lib/components/toggle-dark/ToggleDarkButton.svelte';
	import '../app.css';
	import { fly } from 'svelte/transition';

	let showMenuOnSmallScreen = false;

	let windowYPosition: number;
	let windowInnerWidth: number;

	function handleToggleMenuOnSmallScreen() {
		showMenuOnSmallScreen = !showMenuOnSmallScreen;
	}

	$: {
		if (windowInnerWidth > 767) {
			showMenuOnSmallScreen = false;
		}
	}
</script>

<svelte:head>
	<title>RavenP Portfolio</title>
</svelte:head>

<svelte:window bind:scrollY={windowYPosition} bind:innerWidth={windowInnerWidth} />

<div class="dark:bg-gray-900 dark:text-gray-50 bg-white min-h-screen">
	<main>
		<section class="backdrop-blur mb-12 fixed top-0 w-full">
			<nav
				class="py-8 px-4 lg:px-10"
				class:bg-cyan-500={windowYPosition > 50}
				class:bg-opacity-5={windowYPosition > 50}
				class:dark:bg-cyan-900={windowYPosition > 50}
				class:dark:bg-opacity-50={windowYPosition > 50}
			>
				<div class="flex justify-between items-center">
					<h1 class="text-xl font-semibold tracking-wide">
						<a href="/">
							R<span class="text-gray-500 dark:text-gray-300">P</span>
						</a>
					</h1>

					<div class="hidden md:flex items-center">
						<div class="flex gap-4 mr-8 text-sm items-center">
							<a class="hover:underline" href="#">ABOUT</a>
							<a class="hover:underline" href="#">WORK</a>
							<a class="hover:underline" href="#">CONTACT</a>

							<div class="ml-4">
								<a class="hover:text-gray-500" href="https://github.com/ravenpdev">
									<Icon icon="mdi:github" class="text-2xl" />
								</a>
							</div>
						</div>
						<ToggleDarkButton />
					</div>

					<div class="md:hidden">
						<ToggleDarkButton />
						<button class="ml-4" on:click={handleToggleMenuOnSmallScreen}>
							{#if showMenuOnSmallScreen}
								<Icon icon="mdi:close" class="text-2xl" />
							{:else}
								<Icon icon="mdi:menu" class="text-2xl" />
							{/if}
						</button>
					</div>
				</div>

				{#if showMenuOnSmallScreen}
					<div class="mt-4" transition:fly>
						<div class="flex gap-4 items-center">
							<a href="#">About</a>
							<a href="#">Work</a>
							<a href="#">Contact</a>

							<div class="ml-4">
								<a class="hover:text-gray-500" href="https://github.com/ravenpdev">
									<Icon icon="mdi:github" class="text-2xl" />
								</a>
							</div>
						</div>
					</div>
				{/if}
			</nav>
		</section>

		<slot />

		<footer class="py-28 bg-cyan-700 text-cyan-50 dark:bg-cyan-500 dark:bg-opacity-20">
			<div class="flex flex-col justify-center items-center">
				<div class="flex gap-8 items-center text-xl">
					<a class="hover:underline" href="#">About</a>
					<a class="hover:underline" href="#">Work</a>
					<a class="hover:underline" href="#">Contact</a>
					<a class="hover:text-white" href="https://github.com/ravenpdev">
						<Icon icon="mdi:github" class="text-3xl" />
					</a>
				</div>
				<div class="mt-10">
					<a
						href="https://www.freepik.com/free-vector/it-specialist-composition-with-flat-view-hipster-programmers-workplace-icons-cycle-representing-work-pipeline-vector-illustration_26766321.htm#query=cartoon%20developer&position=17&from_view=keyword&track=ais"
						>Image by macrovector</a
					> on Freepik
				</div>
			</div>
		</footer>
	</main>
</div>
