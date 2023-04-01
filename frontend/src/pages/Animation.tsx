import BodyContainer from '../components/body/BodyContainer';
import Insta from '../components/body/Insta';
import Reel from '../components/body/Reel';
import Typography from '@mui/material/Typography';
import Spacer from '../components/body/Spacer';

export default function Animation() {
	return (
		<BodyContainer>
			<Reel />
			<Spacer size="large" />
			<Typography variant="h4" color="palette.text.primary">
				instagram
			</Typography>
			<Spacer size="small" />
			<Insta />
		</BodyContainer>
	);
}
