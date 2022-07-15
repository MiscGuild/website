import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout/Layout";
import favicon from "../public/favicon.svg";

export default function App({ Component, pageProps }: CustomAppProps) {
	const meta = {
		title: "Miscellaneous",
		description: "Miscellaneous - a welcoming, friendly, and active Hypixel guild for the best of the best.",
		image: favicon.src,
		type: "website",
		...Component.customSeo,
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

			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export type PageProps = NextPage & {
	noMarginals?: boolean;
	customSeo?: {
		title: string;
		description: string;
		image: string;
		type: string;
	};
};

type CustomAppProps = AppProps & {
	Component: PageProps;
};
