import { useTheme } from '@mui/material/styles';
import { useWindow } from '../../contexts/WindowContext';

export default function Reel() {
	const theme = useTheme();
	const windowWidth = useWindow();
	const borderRadius =
		windowWidth < theme.breakpoints.values.sm ? '0.75rem' : '1.25rem';

	return (
		<iframe
			src="https://player.vimeo.com/video/529545910?h=4c376c20cd&title=0&byline=0&portrait=0"
			width="100%"
			allow="autoplay; fullscreen; picture-in-picture"
			style={{
				borderStyle: 'none',
				borderRadius: borderRadius,
				aspectRatio: '16 / 9',
			}}
		></iframe>
	);
}
