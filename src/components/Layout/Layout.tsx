import React from "react";
import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorageValue, useHotkeys } from "@mantine/hooks";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

const THEME_KEY = "mantine-color-scheme";

export function Layout({ children, noMarginals }: LayoutProps) {
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: THEME_KEY,
		defaultValue: "dark",
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod + shift + L", () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider theme={{ colorScheme }} withNormalizeCSS withGlobalStyles>
				{!noMarginals && <Header />}
				<main>{children}</main>
				{!noMarginals && <Footer />}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

interface LayoutProps {
	children?: React.ReactNode;
	noMarginals?: boolean;
}
