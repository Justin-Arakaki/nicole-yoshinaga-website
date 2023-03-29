import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { usePage, usePageUpdate } from '../../contexts/PageContext';

interface ButtonProps {
	label: string;
	id: number;
}

export default function NavButton({ label, id }: ButtonProps) {
	const page = usePage();
	const handleClick = usePageUpdate();
	const isToggledOn = page === id;

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
			disableRipple={true}
			onClick={() => {
				handleClick(id);
				console.log(page, id);
			}}
			sx={buttonProps}
		>
			<Typography variant="button">{label}</Typography>
		</ButtonBase>
	);
}
