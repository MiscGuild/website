import { MantineNumberSize, createStyles } from "@mantine/core";

export const HEADER_HEIGHT = 60;
export const HEADER_BREAKPOINT: MantineNumberSize = "sm";

export default createStyles((theme) => ({
	inner: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		height: HEADER_HEIGHT,

		[theme.fn.smallerThan(HEADER_BREAKPOINT)]: {
			justifyContent: "flex-start",
		},
	},

	burger: {
		marginRight: theme.spacing.md,

		[theme.fn.largerThan(HEADER_BREAKPOINT)]: {
			display: "none",
		},
	},

	link: {
		borderRadius: 8,
		padding: "6px 9px",

		"&:hover": {
			backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[1],
		},
	},

	name: {
		fontWeight: 800,
	},
}));
