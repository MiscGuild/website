import React from "react";
import Head from "next/head";
import { Welcome } from "../Welcome/Welcome";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

export function HomePage() {
	return (
		<>
			<Head>
				<title>Mantine UI</title>
			</Head>

			<Welcome />
			<ColorSchemeToggle />
		</>
	);
}
