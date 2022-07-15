import React from "react";
import { ColorSchemeToggle } from "./Buttons/ColorSchemeToggle/ColorSchemeToggle";
import useStyles from "./Header.styles";

export function Header() {
	const { classes } = useStyles();

	return (
		<div className={classes.header}>
			<ColorSchemeToggle />
		</div>
	);
}
