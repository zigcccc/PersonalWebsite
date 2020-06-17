import React from 'react';

export const scrollToId = (id: string): void => {
	const section = document.getElementById(id);
	if (section) {
		window.scrollTo({
			top: section.offsetTop,
			behavior: 'smooth',
		});
	}
};

export const scrollPastRef = (
	ref: React.MutableRefObject<HTMLElement>
): void => {
	const { current } = ref;
	if (!ref) {
		return;
	}
	const { height } = current.getBoundingClientRect();
	window.scrollTo({
		top: height,
		behavior: 'smooth',
	});
};
