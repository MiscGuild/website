import React from "react";
import { FaGithub } from "react-icons/fa";
import { HeaderButton } from "../HeaderButton";
import useStyles from "./GitHub.styles";

export function GitHub() {
	const { classes } = useStyles();

	return (
		<a href="https://github.com/MiscGuild" className={classes.anchor}>
			<HeaderButton Icon={FaGithub} aria-label="Miscellaneous GitHub" title="GitHub" />
		</a>
	);
}
