import { GetServerSidePropsContext, NextPage } from "next";
import { AppProps } from "next/app";
import NextHead from "next/head";
import { Layout } from "../components/Layout/Layout";
import favicon from "../public/favicon.svg";

export default function App({ Component, pageProps }: AppPropsWithMeta) {
	const meta = {
		title: "",
		description: "",
		image: "./",
		type: "website",
		...Component.customSeo,
	};

	return (
		<>
			<NextHead>
				<title>{meta.title}</title>
				<link rel="shortcut icon" href={favicon.src} />

				<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
				<meta name="robots" content="index,follow" />
				<meta name="keywords" content="" />
				<meta name="description" content={meta.description} />

				<meta property="og:site_name" content="" />
				<meta property="og:title" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:image" content={meta.image} />
			</NextHead>

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
	// colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export type NextPageWithMeta = NextPage & {
	customSeo?: {
		title: string;
		description: string;
		image: string;
		type: string;
	};
};

type AppPropsWithMeta = AppProps & {
	Component: NextPageWithMeta;
};
