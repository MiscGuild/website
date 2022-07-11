import React from "react";
import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorageValue, useHotkeys } from "@mantine/hooks";

const THEME_KEY = "mantine-color-scheme";

export function Layout({ children }: LayoutProps) {
	const [colorScheme, setColorScheme] = useLocalStorageValue<ColorScheme>({
		key: THEME_KEY,
		defaultValue: "dark",
	});

	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

	useHotkeys([["mod+J", () => toggleColorScheme()]]);

	return (
		<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
			<MantineProvider theme={{ colorScheme }} withNormalizeCSS withGlobalStyles>
				<main>{children}</main>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

interface LayoutProps {
	children?: React.ReactNode;
}
