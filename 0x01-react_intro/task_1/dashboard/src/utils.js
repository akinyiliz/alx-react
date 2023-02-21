export function getFullYear() {
	new Date().getFullYear();
}

export const getFooterCopy = (isIndex) =>
	isIndex ? "Holberton School" : "Holberton School main dashboard";
