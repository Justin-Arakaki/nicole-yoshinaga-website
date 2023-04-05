import { SxProps } from '@mui/material';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import EducationItem from './EducationItem';

interface Props {
	sx?: SxProps;
}

export default function Education({ sx }: Props) {
	const education = [
		{
			key: 0,
			title: 'AnimSchool',
			type: 'Online Animation School',
			timeline: '(July 2022 - December 2024)',
		},
		{
			key: 1,
			title: 'Kyosil',
			type: 'Online Animation School',
			timeline: '(October 2020 - July 2021)',
		},
		{
			key: 2,
			title: 'Chapman University Dodge College of Film and Media Arts',
			location: 'Orange, CA',
			type: 'B.F.A. Animation & VFX',
			timeline: '(August 2015 - May 2019)',
		},
	];

	const EducationStack = (
		<Stack spacing={2}>
			{education.map(props => (
				<EducationItem {...props} />
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
