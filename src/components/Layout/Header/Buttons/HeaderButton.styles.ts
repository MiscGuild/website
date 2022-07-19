import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
	wrapper: {
		width: 34,
		height: 34,
		borderRadius: 8,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.white,
		border: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[4]}`,
	},

	removeOnMobile: {
		[theme.fn.smallerThan("sm")]: {
			display: "none",
		},
	},
}));
