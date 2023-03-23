import { createTheme } from '@mui/material/styles';

const defaultTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 500,
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
			main: '#343434',
		},
		text: {
			primary: '#000',
			secondary: '#fff',
		},
		background: {
			paper: '#cbcbd5',
			default: '#cbcbd5',
		},
	},
	typography: {
		fontFamily: 'montserrat',
		button: {
			fontWeight: 400,
			fontSize: '1.8rem',
			textTransform: 'none',
		},
		// Name
		h1: {
			fontFamily: 'quicksand',
			fontWeight: 300,
			fontSize: '3rem',
		},
		// About Me
		h2: {
			fontWeight: 400,
			fontSize: '3rem',
		},
		// Accolades
		h3: {
			fontFamily: 'quicksand',
			fontWeight: 400,
			fontSize: '3rem',
		},
		// Instagram and Small Headers
		h4: {
			fontWeight: 400,
			fontSize: '1.875rem',
		},
		// Everything Else
		body1: {
			fontWeight: 300,
			fontSize: '1.875rem',
		},
		// About Me Text
		body2: {
			fontWeight: 300,
			fontSize: '1.6rem',
		},
	},
});
const bpDown = defaultTheme.breakpoints.down('md');

// Responsive Fonts
defaultTheme.typography.button[bpDown] = {
	fontSize: '1.2rem',
};
defaultTheme.typography.h1[bpDown] = {
	fontSize: '2rem',
};
defaultTheme.typography.h2[bpDown] = {
	fontSize: '2rem',
};
defaultTheme.typography.h3[bpDown] = {
	fontSize: '2rem',
};
defaultTheme.typography.h4[bpDown] = {
	fontSize: '1.25rem',
};
defaultTheme.typography.body1[bpDown] = {
	fontSize: '1.25rem',
};
defaultTheme.typography.body2[bpDown] = {
	fontSize: '1rem',
};

export default defaultTheme;
