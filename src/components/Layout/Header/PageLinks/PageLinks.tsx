import React from "react";
import { Group, Text } from "@mantine/core";
import Link from "next/link";
import useStyles from "./PageLinks.styles";

export function PageLinks() {
	const { classes } = useStyles();

	return (
		<Group spacing={32}>
			{pages.map(({ label, href }, index) => {
				return (
					<Link key={index} href={href} passHref>
						<Text component="a" className={classes.link}>
							{label}
						</Text>
					</Link>
				);
			})}
		</Group>
	);
}

const pages: PageLink[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "About Us",
		href: "/about",
	},
];

interface PageLink {
	label: string;
	href: string;
}
