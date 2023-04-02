import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';
import defaultTheme from '../components/themes/defaultTheme';
import { PageProvider } from './PageContext';
import { WindowProvider } from './WindowContext';

interface Props {
	children: ReactNode;
}

export default function MasterProvider({ children }: Props) {
	return (
		<WindowProvider>
			<PageProvider>
				<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
			</PageProvider>
		</WindowProvider>
	);
}
