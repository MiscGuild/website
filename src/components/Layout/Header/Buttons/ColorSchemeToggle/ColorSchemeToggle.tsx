import { TbMoonStars, TbSun } from "react-icons/tb";
import { HeaderButton } from "../HeaderButton";
import { upperFirst } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";

export function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const Icon = colorScheme === "dark" ? TbSun : TbMoonStars;

	return (
		<HeaderButton
			buttonStyle="button"
			Icon={Icon}
			onClick={() => toggleColorScheme()}
			tooltipLabel={`${upperFirst(colorScheme === "dark" ? "light" : "dark")} mode`}
		/>
	);
}
