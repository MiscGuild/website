import React from "react";
import Head from "next/head";
import { Welcome } from "../Welcome/Welcome";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";
import { NextPageWithMeta } from "../../pages/_app";

export const HomePage: NextPageWithMeta = () => {
	return (
		<>
			<Welcome />
			<ColorSchemeToggle />
		</>
	);
};
