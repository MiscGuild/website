import { UnstyledButton, UnstyledButtonProps } from "@mantine/core";
import { IconType } from "react-icons/lib";
import useStyles from "./HeaderButton.styles";

export function HeaderButton({ Icon, ...buttonProps }: Props) {
	const { classes } = useStyles();

	return (
		<UnstyledButton className={classes.wrapper} {...buttonProps}>
			<Icon size={22} />
		</UnstyledButton>
	);
}

type Props = UnstyledButtonProps<"button"> & {
	Icon: IconType;
};
