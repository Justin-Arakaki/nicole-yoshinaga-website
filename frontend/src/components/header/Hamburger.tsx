import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';

export default function Hamburger() {
	return (
		<IconButton
			color="inherit"
			aria-label="open drawer"
			onClick={() => console.log('click')}
			edge="start"
		>
			<Menu />
		</IconButton>
	);
}
