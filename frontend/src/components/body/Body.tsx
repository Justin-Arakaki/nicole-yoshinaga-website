import { usePage } from '../../contexts/PageContext';
import AboutMe from '../../pages/AboutMe';
import Animation from '../../pages/Animation';
import Art from '../../pages/Art';
import Box from '@mui/material/Box';
import { useEffect } from 'react';

export default function Body() {
	const page = usePage();
	let pageType = <Animation />;

	useEffect(() => {
		switch (page) {
			case 0:
				pageType = <Animation />;
			case 1:
				pageType = <Art />;
			case 2:
				pageType = <AboutMe />;
		}
		console.log('page: ', page);
	}, [page]);
	console.log('here');

	return <Box sx={{ marginTop: 6 }}>{pageType}</Box>;
}
