import Box from '@mui/material/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faInstagram,
	faVimeoV,
} from '@fortawesome/free-brands-svg-icons';
import SocialsButton from '../body/SocialsButton';
import { useTheme } from '@mui/material/styles';

export default function Footer() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				backgroundColor: 'background.paper',
				marginTop: '8rem',
				padding: '1.5rem',
				borderRadius: '0.75rem 0.75rem 0 0',
			}}
		>
			<Box>
				<SocialsButton
					aria-label="linkedin"
					href="https://www.instagram.com/justinianpogo/"
				>
					<FontAwesomeIcon icon={faLinkedinIn} size="xs" />
				</SocialsButton>
				<SocialsButton
					aria-label="instagram"
					href="https://www.instagram.com/justinianpogo/"
				>
					<FontAwesomeIcon icon={faInstagram} size="xs" />
				</SocialsButton>
				<SocialsButton
					aria-label="vimeo"
					href="https://www.instagram.com/justinianpogo/"
				>
					<FontAwesomeIcon icon={faVimeoV} size="xs" />
				</SocialsButton>
			</Box>
			<a
				href="mailto:nicole.yoshinaga@gmail.com"
				style={{
					fontFamily: theme.typography.button.fontFamily,
					fontSize: '1rem',
					lineHeight: 1.5,
					color: theme.palette.text.primary,
					textDecoration: 'none',
				}}
			>
				nicole.yoshinaga@gmail.com
			</a>
		</Box>
	);
}
