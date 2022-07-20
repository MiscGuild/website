import { Burger, Center, Container, Group, Header as MantineHeader, Text, Tooltip } from "@mantine/core";
import useStyles, { HEADER_HEIGHT } from "./Header.styles";
import { ColorSchemeToggle } from "./Buttons/ColorSchemeToggle/ColorSchemeToggle";
import { Discord } from "./Buttons/Discord/Discord";
import { GitHub } from "./Buttons/GitHub/GitHub";
import { HEADER_BUTTON_SIZE } from "./Buttons/HeaderButton";
import Link from "next/link";
import data from "./data";
import { useState } from "react";

export function Header() {
	const { classes } = useStyles();
	const [opened, setOpened] = useState(false);
	const title = `${opened ? "Close" : "Open"} Navigation`;

	return (
		<MantineHeader height={HEADER_HEIGHT}>
			<Container className={classes.inner}>
				<Tooltip className={classes.burger} label={title} openDelay={300} tooltipId={title}>
					<Burger
						aria-describedby={title}
						onClick={() => setOpened((open) => !open)}
						opened={opened}
						size={HEADER_BUTTON_SIZE}
					/>
				</Tooltip>

				<Group spacing={5}>
					{data.map(({ label, href }, index) => (
						<Link href={href} key={index} passHref>
							<Text className={classes.link} component="a">
								{label}
							</Text>
						</Link>
					))}
				</Group>

				<Center inline>
					{/* <Logo /> */}
					<Text className={classes.name}>Miscellaneous</Text>
				</Center>

				<Group className={classes.buttons} position="right" spacing={8} noWrap>
					<Discord />
					<GitHub />
					<ColorSchemeToggle />
				</Group>
			</Container>
		</MantineHeader>
	);
}
