import Tabs from '@mui/material/Tabs';
import { styled } from '@mui/material';

interface TabsProps {
	children?: React.ReactNode;
	value: number;
	onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const CustyTabs = styled((props: TabsProps) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
		sx={{ height: 'fit-content', minHeight: 0 }}
	/>
))({
	'& .MuiTabs-indicator': {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},
	'& .MuiTabs-indicatorSpan': {
		maxWidth: 40,
		width: '100%',
		backgroundColor: '#000',
	},
});

export default CustyTabs;
