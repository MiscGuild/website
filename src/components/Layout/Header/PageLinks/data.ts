export default [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
] as PageLink[];

interface PageLink {
	label: string;
	href: string;
}
