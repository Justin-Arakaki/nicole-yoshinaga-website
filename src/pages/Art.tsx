import content from '../content';
import ArtSection from '../components/content/ArtSection';
import BodyContainer from '../components/ui/BodyContainer';
import Stack from '@mui/material/Stack';
import getGoogleDriveLinks from '../utils/getGoogleDriveLinks';

export default function Art() {
	const art = [];

	for (const section of content.art) {
		art.push({
			title: section.title,
			pieces: getGoogleDriveLinks(section.driveLinkList),
		})
	}

	const ArtStack = (
		<Stack spacing={6} width="100%">
			{art.map((props, index) => (
				<ArtSection {...props} key={index} />
			))}
		</Stack>
	);

	return <BodyContainer>{ArtStack}</BodyContainer>;
}
