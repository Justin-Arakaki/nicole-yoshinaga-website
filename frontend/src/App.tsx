import { ThemeProvider } from '@mui/material';
import { PageProvider } from './contexts/PageContext';
import { WindowProvider } from './contexts/WindowContext';
import defaultTheme from './components/themes/defaultTheme';
import Header from './components/header/Header';
import { Routes, Route, Navigate } from 'react-router-dom';
import Animation from './pages/Animation';
import Art from './pages/Art';
import AboutMe from './pages/AboutMe';

function App() {
	console.log('test');
	return (
		<WindowProvider>
			<PageProvider>
				<ThemeProvider theme={defaultTheme}>
					<Header />
					<Routes>
						<Route path="*" element={<Navigate to="/animation" replace />} />
						<Route path="/animation" element={<Animation />} />
						<Route path="/art" element={<Art />} />
						<Route path="/aboutme" element={<AboutMe />} />
					</Routes>
				</ThemeProvider>
			</PageProvider>
		</WindowProvider>
	);
}
// test

export default App;
