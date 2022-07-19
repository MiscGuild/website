export default [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
	{
		label: "Join",
		href: "/join",
	},
] as NavLink[];

interface NavLink {
	label: string;
	href: string;
}
