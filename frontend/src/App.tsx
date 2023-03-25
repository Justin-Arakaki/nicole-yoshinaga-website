import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import defaultTheme from './components/themes/defaultTheme';
import { PageProvider } from './contexts/PageContext';

function App() {
	return (
		<PageProvider>
			<ThemeProvider theme={defaultTheme}>
				<Header />
			</ThemeProvider>
		</PageProvider>
	);
}

export default App;
