import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ButtonStack from './ButtonStack';
import Hamburger from './Hamburger';
import NavButton from './NavButton';

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
				<ButtonStack spacing={1} sx={{ alignItems: 'center' }} />
			</Drawer>
		</>
	);
}
