export default [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
] as NavLink[];

interface NavLink {
	label: string;
	href: string;
}
