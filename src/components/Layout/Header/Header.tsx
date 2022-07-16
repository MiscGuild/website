import { Group } from "@mantine/core";
import React from "react";
import { ColorSchemeToggle } from "./Buttons/ColorSchemeToggle/ColorSchemeToggle";
import { Discord } from "./Buttons/Discord/Discord";
import { GitHub } from "./Buttons/GitHub/GitHub";
import useStyles from "./Header.styles";

export function Header() {
	const { classes } = useStyles();

	return (
		<header className={classes.header}>
			<Group spacing={8}>
				<Discord />
				<GitHub />
				<ColorSchemeToggle />
			</Group>
		</header>
	);
}
