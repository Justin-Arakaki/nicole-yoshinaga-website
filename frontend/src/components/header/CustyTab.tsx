import Tab from '@mui/material/Tab';
import { styled } from '@mui/material';

interface TabProps {
	label: string;
}

const CustyTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
	({ theme }) => ({
		justifyContent: 'flex-start',
		width: 'fit-content',
		minWidth: 0,
		height: 'fit-content',
		minHeight: 0,
		paddingInline: '0.5rem',
		paddingTop: 0,
		textTransform: 'none',
		color: theme.palette.text.primary,
		'&.Mui-selected': {
			color: '#000',
		},
	})
);

export default CustyTab;
