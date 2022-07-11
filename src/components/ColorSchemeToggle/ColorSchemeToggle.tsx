import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { FiSun, FiMoon } from "react-icons/fi";

export function ColorSchemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Group position="center" mt="xl">
			<ActionIcon
				onClick={() => toggleColorScheme()}
				size="xl"
				sx={(theme) => ({
					backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
					color: theme.colorScheme === "dark" ? theme.colors.yellow[4] : theme.colors.blue[6],
				})}>
				{colorScheme === "dark" ? <FiSun width={20} height={20} /> : <FiMoon width={20} height={20} />}
			</ActionIcon>
		</Group>
	);
}
