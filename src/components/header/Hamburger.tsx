import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';

interface Props {
	onClick: () => void;
}

export default function Hamburger({ onClick }: Props) {
	return (
		<IconButton
			color="inherit"
			aria-label="open drawer"
			onClick={onClick}
			edge="start"
		>
			<Menu />
		</IconButton>
	);
}
