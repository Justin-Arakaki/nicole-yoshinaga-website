import { useState } from 'react';
import { ThemeProvider } from '@mui/material';
import Header from './components/header/Header';
import defaultTheme from './components/themes/defaultTheme';
import { PageProvider } from './contexts/PageContext';

function App() {
	const [page, setPage] = useState(0);
	const handlePageChange = (event: React.SyntheticEvent, newValue: number) => {
		setPage(newValue);
	};

	return (
		<ThemeProvider theme={defaultTheme}>
			<Header onChange={handlePageChange} />
		</ThemeProvider>
	);
}

export default App;
