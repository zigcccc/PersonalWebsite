export const logConsoleArt = (art: string, size: number = 12): void =>
	console.log(
		`%c${art}`,
		`font-family:monospace;font-size:${size}px;color:#14171A;line-height:1.4`
	);
