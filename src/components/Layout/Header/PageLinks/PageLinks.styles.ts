import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
	link: {
		"&:hover": {
			color: theme.colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[5],
		},
	},
}));
