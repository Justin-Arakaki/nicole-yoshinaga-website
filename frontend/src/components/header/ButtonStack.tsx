import Stack from '@mui/material/Stack';
import NavButton from './NavButton';
import { ResponsiveStyleValue, SxProps } from '@mui/system/styleFunctionSx';

interface Props {
	direction?: ResponsiveStyleValue<
		'row' | 'row-reverse' | 'column' | 'column-reverse'
	>;
	spacing: ResponsiveStyleValue<string | number>;
	sx?: SxProps;
}

export default function ButtonStack({ direction, spacing, sx }: Props) {
	return (
		<Stack direction={direction} spacing={spacing} sx={sx}>
			<NavButton label="animation" link="/animation" />
			<NavButton label="art" link="/art" />
			<NavButton label="about me" link="/aboutme" />
		</Stack>
	);
}
