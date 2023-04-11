import { SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import EducationItem from './EducationItem';
import content from '../../content';

interface Props {
	sx?: SxProps;
}

export default function Education({ sx }: Props) {
	const education = content.education;

	const EducationStack = (
		<Stack spacing={2}>
			{education.map((props, index) => (
				<EducationItem {...props} key={index} />
			))}
		</Stack>
	);

	return (
		<Box width="100%" sx={sx}>
			<Typography variant="h3" mb="1rem">
				education
			</Typography>
			{EducationStack}
		</Box>
	);
}
