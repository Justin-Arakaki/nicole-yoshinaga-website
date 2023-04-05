import BodyContainer from '../components/ui/BodyContainer';
import Hello from '../components/content/Hello';
import Projects from '../components/content/Projects';
import Education from '../components/content/Education';

export default function AboutMe() {
	return (
		<BodyContainer>
			<Hello />
			<Projects sx={{ mt: '2rem' }} />
			<Education sx={{ mt: '2rem' }} />
		</BodyContainer>
	);
}
