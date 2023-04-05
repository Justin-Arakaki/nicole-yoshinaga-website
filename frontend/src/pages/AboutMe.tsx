import BodyContainer from '../components/ui/BodyContainer';
import Hello from '../components/content/Hello';
import Projects from '../components/content/Projects';

export default function AboutMe() {
	return (
		<BodyContainer>
			<Hello />
			<Projects sx={{ mt: '2rem' }} />
		</BodyContainer>
	);
}
