import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material/styles/createTypography';
import { Theme } from '@mui/material/styles';

const defaultTheme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 650,
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
const lgDown = defaultTheme.breakpoints.down('lg');
const smDown = defaultTheme.breakpoints.down('sm');

// Responsive Fonts
defaultTheme.typography.button[lgDown] = {
	fontSize: '1.2rem',
};
defaultTheme.typography.h1[lgDown] = {
	fontSize: '2rem',
};
defaultTheme.typography.h2[lgDown] = {
	fontSize: '2rem',
};
defaultTheme.typography.h3[lgDown] = {
	fontSize: '2rem',
};
defaultTheme.typography.h4[lgDown] = {
	fontSize: '1.25rem',
};
defaultTheme.typography.body1[lgDown] = {
	fontSize: '1.25rem',
};
defaultTheme.typography.body2[lgDown] = {
	fontSize: '1rem',
};

defaultTheme.typography.button[smDown] = {
	fontSize: '1rem',
};
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
	fontSize: '1.1rem',
};
defaultTheme.typography.body2[smDown] = {
	fontSize: '1rem',
};

export default defaultTheme;
