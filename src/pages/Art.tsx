import content from '../content';
import ArtSection from '../components/content/ArtSection';
import BodyContainer from '../components/ui/BodyContainer';
import Stack from '@mui/material/Stack';

export default function Art() {
	const art = content.art;

	const ArtStack = (
		<Stack spacing={6} width="100%">
			{art.map((props, index) => (
				<ArtSection {...props} key={index} />
			))}
		</Stack>
	);

	return <BodyContainer>{ArtStack}</BodyContainer>;
}
