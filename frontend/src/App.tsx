import { Routes, Route, Navigate } from 'react-router-dom';
import MasterProvider from './contexts/MasterProvider';
import Header from './components/header/Header';
import Animation from './pages/Animation';
import Art from './pages/Art';
import AboutMe from './pages/AboutMe';
import Footer from './components/footer/Footer';
import Box from '@mui/material/Box';

function App() {
	const tempName = '/nicole-yoshinaga-website';
	const path = {
		animation: `${tempName}/animation`,
		art: `${tempName}/art`,
		aboutme: `${tempName}/aboutme`,
	};

	return (
		<MasterProvider>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					minHeight: '100vh',
				}}
			>
				<Box>
					<Header />
					<Routes>
						<Route
							path="*"
							element={<Navigate to={path.animation} replace />}
						/>
						<Route path={path.animation} element={<Animation />} />
						<Route path={path.art} element={<Art />} />
						<Route path={path.aboutme} element={<AboutMe />} />
					</Routes>
				</Box>
				<Footer />
			</Box>
		</MasterProvider>
	);
}

export default App;
