import { Group, Text } from "@mantine/core";
import Link from "next/link";
import data from "./data";
import useStyles from "./PageLinks.styles";

export function PageLinks() {
	const { classes } = useStyles();

	return (
		<Group spacing={32}>
			{data.map(({ label, href }, index) => (
				<Link key={index} href={href} passHref>
					<Text component="a" className={classes.link}>
						{label}
					</Text>
				</Link>
			))}
		</Group>
	);
}
