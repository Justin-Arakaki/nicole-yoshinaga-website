import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	palette: {
		primary: {
			main: '#fff',
		},
		secondary: {
			main: '#000',
		},
		text: {
			primary: '#000',
			secondary: '#fff',
		},
		background: {
			paper: '#cbcbd5',
			default: '#000',
		},
	},
	typography: {
		fontFamily: 'montserrat',
		button: {
			fontFamily: 'quicksand',
			fontWeight: 400,
			fontSize: '1.2rem',
			textTransform: 'none',
			lineHeight: 1.1,
		},
		// Name
		h1: {
			fontFamily: 'quicksand',
			fontWeight: 300,
			fontSize: '2rem',
		},
		// About Me
		h2: {
			fontWeight: 400,
			fontSize: '2rem',
		},
		// Accolades
		h3: {
			fontFamily: 'quicksand',
			fontWeight: 400,
			fontSize: '2rem',
		},
		// Instagram and Small Headers
		h4: {
			fontWeight: 400,
			fontSize: '1.25rem',
		},
		// Accolade Headers
		h5: {
			fontWeight: 400,
			fontSize: '1.2rem',
			lineHeight: 1.2,
		},
		// Everything Else
		body1: {
			fontWeight: 300,
			fontSize: '1.2rem',
			lineHeight: 1.2,
		},
		// About Me Text
		body2: {
			fontWeight: 300,
			fontSize: '1rem',
			lineHeight: 1.2,
		},
	},
});
const smDown = defaultTheme.breakpoints.down('sm');

// Responsive Fonts
// defaultTheme.typography.button[smDown] = {
// 	fontSize: '1rem',
// };
defaultTheme.typography.h1[smDown] = {
	fontSize: '1.8rem',
};
defaultTheme.typography.h2[smDown] = {
	fontSize: '1.8rem',
};
defaultTheme.typography.h3[smDown] = {
	fontSize: '1.8rem',
};
defaultTheme.typography.h4[smDown] = {
	fontSize: '1.1rem',
};
defaultTheme.typography.body1[smDown] = {
	fontSize: '1rem',
};
defaultTheme.typography.body2[smDown] = {
	fontSize: '1rem',
};

export default defaultTheme;
