import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLinkedinIn,
	faInstagram,
	faVimeoV,
} from '@fortawesome/free-brands-svg-icons';
import SocialsButton from '../body/SocialsButton';

export default function Footer() {
	return (
		<Box
			sx={{
				display: 'flex',
				backgroundColor: 'background.paper',
				padding: '1.5rem',
				borderRadius: '0.75rem 0.75rem 0 0',
			}}
		>
			<Box>
				<SocialsButton
					color="secondary"
					aria-label="instagram"
					href="https://www.instagram.com/justinianpogo/"
				>
					<FontAwesomeIcon icon={faLinkedinIn} size="xs" />
				</SocialsButton>
				<IconButton
					color="secondary"
					aria-label="instagram"
					href="https://www.instagram.com/justinianpogo/"
					disableRipple
					sx={{ padding: 0.5 }}
				>
					<FontAwesomeIcon icon={faInstagram} size="xs" />
				</IconButton>
				<IconButton
					color="secondary"
					aria-label="instagram"
					href="https://www.instagram.com/justinianpogo/"
					disableRipple
					sx={{ padding: 0.5 }}
				>
					<FontAwesomeIcon icon={faVimeoV} size="xs" />
				</IconButton>
			</Box>
		</Box>
	);
}
