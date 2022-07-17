import { FaDiscord } from "react-icons/fa";
import { HeaderButton } from "../HeaderButton";

export function Discord() {
	return (
		<a href="https://discord.com/invite/bHFWukp" target="_blank" rel="noreferrer">
			<HeaderButton Icon={FaDiscord} aria-label="Miscellaneous Discord" title="Discord" />
		</a>
	);
}
