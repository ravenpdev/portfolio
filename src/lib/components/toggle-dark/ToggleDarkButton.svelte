<script lang="ts">
	import Icon from '@iconify/svelte';
	import { darkMode } from '$lib/stores/darkMode';

	function toggleDarkMode() {
		darkMode.toggleDarkMode();

		if ($darkMode && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<button on:click={toggleDarkMode}>
	<div
		class="transition-all duration-500"
		class:rotate-45={$darkMode}
		class:-rotate-[135deg]={!$darkMode}
	>
		<!-- class:text-amber-500={!$darkMode} -->
		<Icon icon="mdi:theme-light-dark" class="text-2xl" />
	</div>
</button>
