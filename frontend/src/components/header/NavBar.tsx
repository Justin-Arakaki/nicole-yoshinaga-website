import CustyTabs from './CustyTabs';
import CustyTab from './CustyTab';

interface Props {
	onChange?: any;
}

export default function NavBar({ onChange }: Props) {
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
