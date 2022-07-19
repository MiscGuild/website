import { Text, Tooltip, UnstyledButton } from "@mantine/core";
import { IconType } from "react-icons/lib";
import { MouseEventHandler } from "react";
import useStyles from "./HeaderButton.styles";

export const HEADER_BUTTON_SIZE = 22;

export function HeaderButton(props: AnchorProps | ButtonProps) {
	const { classes } = useStyles();
	const className = `${classes.wrapper} ${props.removeOnMobile ? classes.removeOnMobile : ""}`;

	return (
		<Tooltip label={props.tooltipLabel} openDelay={300} tooltipId={props.tooltipLabel}>
			{props.buttonStyle === "button" ? (
				<UnstyledButton aria-describedby={props.tooltipLabel} className={className} onClick={props.onClick}>
					<props.Icon size={HEADER_BUTTON_SIZE} />
				</UnstyledButton>
			) : (
				<Text
					aria-describedby={props.tooltipLabel}
					className={className}
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
	removeOnMobile?: boolean;
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
