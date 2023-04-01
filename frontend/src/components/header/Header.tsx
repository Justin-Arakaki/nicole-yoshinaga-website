import { useWindow } from '../../contexts/WindowContext';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ElevationScroll from './ElevationScroll';
import NavBar from './NavBar';
import CustyDrawer from './Drawer';
import Box from '@mui/material/Box';

export default function Header() {
	const windowWidth = useWindow();
	const theme = useTheme();
	let navigationType = <NavBar />;
	if (windowWidth < theme.breakpoints.values.sm) {
		navigationType = <CustyDrawer />;
	}

	return (
		<>
			<ElevationScroll>
				<AppBar position="fixed" color="primary">
					<Toolbar sx={{ justifyContent: 'space-between' }}>
						<Typography variant="h1">NICOLE YOSHINAGA</Typography>
						{navigationType}
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<Box
				sx={{
					marginTop: '6rem',
					[theme.breakpoints.down('sm')]: {
						marginTop: '4rem',
					},
				}}
			></Box>
		</>
	);
}
