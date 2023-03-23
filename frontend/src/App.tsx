import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import defaultTheme from './components/themes/defaultTheme';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<Header />
		</ThemeProvider>
	);
}

export default App;
