import Insta from '../components/content/Insta';
import Reel from '../components/content/Reel';
import BodyContainer from '../components/ui/BodyContainer';
import Spacer from '../components/ui/Spacer';
import Typography from '@mui/material/Typography';

export default function Animation() {
	return (
		<BodyContainer>
			<Reel />
			<Spacer size="large" />
			<Typography variant="h4">instagram</Typography>
			<Spacer size="small" />
			<Insta />
		</BodyContainer>
	);
}
