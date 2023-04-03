import { Routes, Route, Navigate } from 'react-router-dom';
import MasterProvider from './contexts/MasterProvider';
import Header from './components/header/Header';
import Animation from './pages/Animation';
import Art from './pages/Art';
import AboutMe from './pages/AboutMe';
import Footer from './components/footer/Footer';

function App() {
	return (
		<MasterProvider>
			<Header />
			<Routes>
				<Route path="*" element={<Navigate to="/animation" replace />} />
				<Route path="/animation" element={<Animation />} />
				<Route path="/art" element={<Art />} />
				<Route path="/aboutme" element={<AboutMe />} />
			</Routes>
			<Footer />
		</MasterProvider>
	);
}

export default App;
