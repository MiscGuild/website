import { Anchor, Button, Container, Group, Text, Title } from "@mantine/core";
import { Illustration } from "./Illustration";
import Link from "next/link";
import { PageProps } from "../../pages/_app";
import useStyles from "./NotFoundPage.styles";

const NotFoundPage: PageProps = () => {
	const { classes } = useStyles();

	return (
		<Container className={classes.root}>
			<div className={classes.inner}>
				<Illustration className={classes.image} />

				<div className={classes.content}>
					<Title className={classes.title}>The page you are looking for does not exist</Title>

					<Text color="dimmed" size="lg" align="center" className={classes.description}>
						You may have mistyped the address, or the page may have moved. Don&apos;t worry though - we all
						get lost sometimes, especially in the sea of Hypixel guilds. So why not{" "}
						<Link href="/join" passHref>
							<Anchor component="a" size="lg">
								Join Us
							</Anchor>
						</Link>
						!
					</Text>

					<Group position="center">
						<Button component="a" href="/" size="md">
							Return Home
						</Button>
					</Group>
				</div>
			</div>
		</Container>
	);
};

NotFoundPage.customSeo = {
	title: "Miscellaneous | Page Not Found",
};

export { NotFoundPage };
