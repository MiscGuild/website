import { ColorScheme, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useHotkeys, useLocalStorageValue } from "@mantine/hooks";
import { Footer } from "./Footer/Footer";
import { HEADER_HEIGHT } from "./Header/Header.styles";
import { Header } from "./Header/Header";

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
			<MantineProvider theme={{ colorScheme, primaryColor: "grape" }} withNormalizeCSS withGlobalStyles>
				{!noMarginals && <Header />}
				<main style={{ paddingTop: !noMarginals ? HEADER_HEIGHT : 0 }}>{children}</main>
				{!noMarginals && <Footer />}
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

interface LayoutProps {
	children?: React.ReactNode;
	noMarginals?: boolean;
}
