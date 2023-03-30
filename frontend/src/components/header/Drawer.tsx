import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import Hamburger from './Hamburger';
import NavButton from './NavButton';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

export default function CustyDrawer() {
	const [isOpen, setIsOpen] = useState(false);
	const handleDrawerOpen = () => {
		setIsOpen(true);
	};
	const handleDrawerClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<Hamburger onClick={handleDrawerOpen} />
			<Drawer
				variant="temporary"
				anchor="right"
				open={isOpen}
				onClose={handleDrawerClose}
				sx={{
					'& .MuiDrawer-paper': {
						paddingTop: '1rem',
						width: '50vw',
						minWidth: '10rem',
						boxSizing: 'border-box',
					},
				}}
			>
				<Stack spacing={1} sx={{ alignItems: 'center' }}>
					<NavButton label="animation" id={0} />
					<NavButton label="art" id={1} />
					<NavButton label="about me" id={2} />
				</Stack>
			</Drawer>
		</>
	);
}
