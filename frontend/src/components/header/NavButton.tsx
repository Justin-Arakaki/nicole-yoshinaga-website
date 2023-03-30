import { SxProps } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import { Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

interface ButtonProps {
	label: string;
	link: string;
}

export default function NavButton({ label, link }: ButtonProps) {
	const location = useLocation();
	const isToggledOn = location.pathname === link;
	console.log(location.pathname, link);

	const defaultProps: SxProps<Theme> = {
		paddingInline: '0.3rem',
		borderRadius: '0.5rem',
	};
	const toggledProps: SxProps<Theme> = {
		border: '1px solid black',
	};
	const untoggledProps: SxProps<Theme> = {
		['&:hover']: {
			backgroundColor: (theme: Theme) => theme.palette.background.default,
			color: (theme: Theme) => theme.palette.text.secondary,
		},
	};
	let buttonProps: SxProps<Theme>;
	if (isToggledOn) {
		buttonProps = { ...defaultProps, ...toggledProps };
	} else {
		buttonProps = { ...defaultProps, ...untoggledProps };
	}

	return (
		<ButtonBase
			component={Link}
			to={link}
			disableRipple={true}
			sx={buttonProps}
		>
			<Typography variant="button">{label}</Typography>
		</ButtonBase>
	);
}
