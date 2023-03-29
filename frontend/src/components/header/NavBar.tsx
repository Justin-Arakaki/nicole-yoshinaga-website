import Stack from '@mui/material/Stack';
import { usePage, usePageUpdate } from '../../contexts/PageContext';
import NavButton from './NavButton';

export default function NavBar() {
	return (
		<Stack direction="row" spacing={0.5}>
			<NavButton label="animation" id={0} />
			<NavButton label="art" id={1} />
			<NavButton label="about me" id={2} />
		</Stack>
	);
}
