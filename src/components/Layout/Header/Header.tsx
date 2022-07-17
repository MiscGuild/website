import { ColorSchemeToggle } from "./Buttons/ColorSchemeToggle/ColorSchemeToggle";
import { Discord } from "./Buttons/Discord/Discord";
import { GitHub } from "./Buttons/GitHub/GitHub";
import { Group } from "@mantine/core";
import { PageLinks } from "./PageLinks/PageLinks";
import useStyles from "./Header.styles";

export function Header() {
	const { classes } = useStyles();

	return (
		<header className={classes.header}>
			<PageLinks />

			<Group spacing={8}>
				<Discord />
				<GitHub />
				<ColorSchemeToggle />
			</Group>
		</header>
	);
}
