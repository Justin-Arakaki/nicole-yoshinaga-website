import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

const SocialsButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
	padding: 0.5,
	disableRipple: true,
	color: theme.palette.secondary.default,
}));

export default SocialsButton;
