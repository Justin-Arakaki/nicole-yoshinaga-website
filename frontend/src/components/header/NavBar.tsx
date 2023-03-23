import { useState } from 'react';
import Box from '@mui/material/Box';
import CustyTabs from './CustyTabs';
import CustyTab from './CustyTab';

export default function NavBar() {
	const [value, setValue] = useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<CustyTabs
			value={value}
			onChange={handleChange}
			aria-label="styled tabs example"
		>
			<CustyTab label="animation" />
			<CustyTab label="art" />
			<CustyTab label="about me" />
		</CustyTabs>
	);
}
