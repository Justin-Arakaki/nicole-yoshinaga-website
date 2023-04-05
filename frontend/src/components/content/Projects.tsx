import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Project from './Project';
import proj1 from '../../assets/amogus1.jpg';
import proj2 from '../../assets/amogus2.jpg';
import proj3 from '../../assets/amogus3.jpg';

interface Props {
	sx?: SxProps;
}

export default function Projects({ sx }: Props) {
	const projects = [
		{
			key: 0,
			src: proj1,
			title: 'Mpathic',
			company: 'Winterstellar Studios',
			role: 'Character Animator/Motion Capture Cleanup Animator',
		},
		{
			key: 1,
			src: proj2,
			title: 'Colorville',
			company: 'Winterstellar Studios',
			role: 'Character Animator',
		},
		{
			key: 2,
			src: proj3,
			title: 'Alienated',
			company: 'Chapman University Student Thesis Film',
			role: 'Director/Character Animator',
		},
	];
	const ProjectStack = (
		<Stack spacing={2}>
			{projects.map(props => (
				<Project {...props} />
			))}
		</Stack>
	);

	return (
		<Box width="100%" sx={sx}>
			<Typography variant="h3" mb="1rem">
				projects
			</Typography>
			{ProjectStack}
		</Box>
	);
}
