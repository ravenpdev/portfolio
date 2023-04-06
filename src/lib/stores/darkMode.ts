import { writable } from 'svelte/store';

function createDarkMode() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggleDarkMode: () => {
			update((n) => (n = !n));
		}
	};
}

export const darkMode = createDarkMode();
