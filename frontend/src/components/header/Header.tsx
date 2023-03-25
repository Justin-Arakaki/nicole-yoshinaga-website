import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ElevationScroll from './ElevationScroll';
import NavBar from './NavBar';

export default function Header() {
	return (
		<ElevationScroll>
			<AppBar position="fixed" color="primary">
				<Toolbar sx={{ justifyContent: 'space-between' }}>
					<Typography variant="h1">NICOLE YOSHINAGA</Typography>
					<NavBar />
				</Toolbar>
			</AppBar>
		</ElevationScroll>
	);
}
