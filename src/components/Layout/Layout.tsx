import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Footer } from "./Footer/Footer";
import { HEADER_HEIGHT } from "./Header/Header.styles";
import Head from "next/head";
import { Header } from "./Header/Header";
import { PartialPageProps } from "../../pages/_app";
import React from "react";
import favicon from "../../public/favicon.svg";

export function Layout({ children, colorScheme, customSeo, noMarginals, toggleColorScheme }: LayoutProps) {
	const meta = {
		title: "Miscellaneous",
		description: "Miscellaneous - a welcoming, friendly, and active Hypixel guild for the best of the best.",
		image: favicon.src,
		type: "website",
		...customSeo,
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<link rel="shortcut icon" href={favicon.src} />

				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<meta name="robots" content="index,follow" />
				<meta name="keywords" content="hypixel, hypixel guild, miscellaneous, minecraft" />
				<meta name="description" content={meta.description} />

				<meta property="og:site_name" content="Miscellaneous" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:image" content={meta.image} />
			</Head>

			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{ colorScheme, primaryColor: "grape" }} withNormalizeCSS withGlobalStyles>
					{!noMarginals && <Header />}
					<main style={{ paddingTop: !noMarginals ? HEADER_HEIGHT : 0 }}>{children}</main>
					{!noMarginals && <Footer />}
				</MantineProvider>
			</ColorSchemeProvider>
		</>
	);
}

type LayoutProps = PartialPageProps & {
	children: React.ReactNode;
	colorScheme: ColorScheme;
	toggleColorScheme: (colorScheme?: ColorScheme) => void;
};
