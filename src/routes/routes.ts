export type routeK = "/" | "/portfolio" | "/toolbox";

interface routeData {
	name: string;
	imgSrc: string;
	imgAlt: string;
}

export const routes = {
	"/": {
		name: "About",
		imgSrc: "/about.svg",
		imgAlt: "Non-descript person icon",
	},
	"/portfolio": {
		name: "Portfolio",
		imgSrc: "/code.svg",
		imgAlt: "Computer code icon",
	},
	"/toolbox": {
		name: "Toolbox",
		imgSrc: "/toolbox.svg",
		imgAlt: "Toolbox icon",
	},
} as const satisfies {[K in routeK]: routeData};
