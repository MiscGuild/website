import React from "react";
import { useMantineColorScheme } from "@mantine/core";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { HeaderButton } from "../HeaderButton";

export function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const Icon = colorScheme === "dark" ? TbSun : TbMoonStars;

	return (
		<HeaderButton
			Icon={Icon}
			aria-label="Toggle theme"
			onClick={() => toggleColorScheme()}
			title="Ctrl + Shift + L"
		/>
	);
}
