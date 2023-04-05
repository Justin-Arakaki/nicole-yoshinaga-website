import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface Props {
	children?: ReactNode;
	color?: string;
	href?: string;
}

const SocialsButton = styled((props: Props) => (
	<IconButton {...props} color="secondary" disableRipple />
))({
	padding: '0.25rem',
});

export default SocialsButton;
