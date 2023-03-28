import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import defaultTheme from './components/themes/defaultTheme';
import { PageProvider } from './contexts/PageContext';
import { WindowProvider } from './contexts/WindowContext';

function App() {
	return (
		<WindowProvider>
			<PageProvider>
				<ThemeProvider theme={defaultTheme}>
					<Header />
				</ThemeProvider>
			</PageProvider>
		</WindowProvider>
	);
}

export default App;
