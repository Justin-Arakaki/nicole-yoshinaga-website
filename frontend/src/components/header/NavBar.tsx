import CustyTabs from './CustyTabs';
import CustyTab from './CustyTab';
import { usePage, usePageUpdate } from '../../contexts/PageContext';

export default function NavBar() {
	const page = usePage();
	const togglePage = usePageUpdate();

	return (
		<CustyTabs
			value={page}
			onChange={togglePage}
			aria-label="styled tabs example"
		>
			<CustyTab label="animation" />
			<CustyTab label="art" />
			<CustyTab label="about me" />
		</CustyTabs>
	);
}
