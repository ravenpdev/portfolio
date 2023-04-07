type ScrollData = {
	[key: string]: HTMLElement;
};

const scrollData: ScrollData = {};

export function scrollTo(node: HTMLAnchorElement) {
	node.classList.add('cursor-pointer');

	if (node.href.charAt(0) === '#') {
		const key = node.href.slice(1);

		const targetElement = scrollData[key];

		node.addEventListener('click', (e) => {
			targetElement.scrollIntoView({
				behavior: 'smooth'
			});
		});
	}
}

export function scrollRef(node: HTMLElement, name: string) {
	node.setAttribute('id', name);
	scrollData[name] = node;
}
