import { FaDiscord } from "react-icons/fa";
import { HeaderButton } from "../HeaderButton";

export function Discord() {
	return (
		<HeaderButton
			buttonStyle="anchor"
			href="https://discord.com/invite/bHFWukp"
			Icon={FaDiscord}
			tooltipLabel="Discord"
		/>
	);
}
