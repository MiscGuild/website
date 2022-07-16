import { createStyles } from "@mantine/core";

export const HEADER_HEIGHT = 60;

export default createStyles((theme) => ({
	header: {
		position: "fixed",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "0 16px 0 16px",
		zIndex: 10000,
		top: 0,
		left: 0,
		right: 0,
		height: HEADER_HEIGHT,
		borderBottom: `1px solid ${theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]}`,
	},
}));
