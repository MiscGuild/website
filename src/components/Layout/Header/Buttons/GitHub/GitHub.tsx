import { FaGithub } from "react-icons/fa";
import { HeaderButton } from "../HeaderButton";

export function GitHub() {
	return (
		<HeaderButton
			buttonStyle="anchor"
			href="https://github.com/MiscGuild"
			Icon={FaGithub}
			tooltipLabel="GitHub"
		/>
	);
}
