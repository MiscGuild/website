import { FaGithub } from "react-icons/fa";
import { HeaderButton } from "../HeaderButton";

export function GitHub() {
	return (
		<a href="https://github.com/MiscGuild" target="_blank" rel="noreferrer">
			<HeaderButton Icon={FaGithub} aria-label="Miscellaneous GitHub" title="GitHub" />
		</a>
	);
}
