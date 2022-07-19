import { TbMoonStars, TbSun } from "react-icons/tb";
import { HeaderButton } from "../HeaderButton";
import { useMantineColorScheme } from "@mantine/core";

export function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const Icon = colorScheme === "dark" ? TbSun : TbMoonStars;

	return (
		<HeaderButton
			buttonStyle="button"
			Icon={Icon}
			onClick={() => toggleColorScheme()}
			tooltipLabel={`${colorScheme === "dark" ? "Light" : "Dark"} mode`}
		/>
	);
}
