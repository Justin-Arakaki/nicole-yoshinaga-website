import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
	title: string;
	type: string;
	location?: string;
	timeline: string;
}

export default function EducationItem({
	title,
	type,
	location,
	timeline,
}: Props) {
	return (
		<Box>
			<Typography variant="h5">{title}</Typography>
			<Typography variant="body1">{location}</Typography>
			<Typography variant="body1">{type}</Typography>
			<Typography variant="body1">{timeline}</Typography>
		</Box>
	);
}
