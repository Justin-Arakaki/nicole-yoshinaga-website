import Stack from '@mui/material/Stack';
import NavButton from './NavButton';
import { ResponsiveStyleValue, SxProps } from '@mui/system/styleFunctionSx';

interface Props {
	direction?: ResponsiveStyleValue<
		'row' | 'row-reverse' | 'column' | 'column-reverse'
	>;
	spacing: ResponsiveStyleValue<string | number>;
	sx?: SxProps;
	handleClose?: () => void;
}

export default function ButtonStack({
	direction,
	spacing,
	sx,
	handleClose,
}: Props) {
	return (
		<Stack direction={direction} spacing={spacing} sx={sx}>
			<NavButton
				label="animation"
				link="/animation"
				handleClose={handleClose}
			/>
			<NavButton label="art" link="/art" handleClose={handleClose} />
			<NavButton label="about me" link="/aboutme" handleClose={handleClose} />
		</Stack>
	);
}
