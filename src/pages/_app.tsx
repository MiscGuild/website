import { GetServerSidePropsContext, NextPage } from "next";
import { getCookie, setCookies } from "cookies-next";
import { AppProps } from "next/app";
import { ColorScheme } from "@mantine/core";
import { Layout } from "../components/Layout/Layout";
import { useState } from "react";

export default function App(props: CustomAppProps) {
	const { Component, pageProps } = props;
	const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(nextColorScheme);
		setCookies("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
	};

	return (
		<Layout
			colorScheme={colorScheme}
			customSeo={Component.customSeo}
			noMarginals={Component.noMarginals}
			toggleColorScheme={toggleColorScheme}>
			<Component {...pageProps} />
		</Layout>
	);
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
	colorScheme: getCookie("mantine-color-scheme", ctx) || "dark",
});

export type PageProps = NextPage & {
	noMarginals?: boolean;
	customSeo?: Partial<CustomSeo>;
};

export type CustomSeo = {
	title: string;
	description: string;
	image: string;
	type: string;
};

type CustomAppProps = AppProps & {
	Component: PageProps;
	colorScheme: ColorScheme;
};
