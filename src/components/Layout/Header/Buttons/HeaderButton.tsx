import { Text, Tooltip, UnstyledButton } from "@mantine/core";
import { IconType } from "react-icons/lib";
import { MouseEventHandler } from "react";
import useStyles from "./HeaderButton.styles";

export function HeaderButton(props: AnchorProps | ButtonProps) {
	const { classes } = useStyles();

	return (
		<Tooltip label={props.tooltipLabel} openDelay={300} tooltipId={props.tooltipLabel}>
			{props.buttonStyle === "button" ? (
				<UnstyledButton
					aria-describedby={props.tooltipLabel}
					className={classes.wrapper}
					onClick={props.onClick}>
					<props.Icon size={22} />
				</UnstyledButton>
			) : (
				<Text
					aria-describedby={props.tooltipLabel}
					className={classes.wrapper}
					component="a"
					href={props.href}
					target="_blank"
					rel="noreferrer">
					<props.Icon size={22} />
				</Text>
			)}
		</Tooltip>
	);
}

type GenericProps = {
	Icon: IconType;
	tooltipLabel: string;
};

type AnchorProps = GenericProps & {
	buttonStyle: "anchor";
	href: string;
};

type ButtonProps = GenericProps & {
	buttonStyle: "button";
	onClick: MouseEventHandler;
};
