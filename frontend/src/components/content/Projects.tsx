import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Project from './Project';
import content from '../../content';

interface Props {
	sx?: SxProps;
}

export default function Projects({ sx }: Props) {
	const projects = content.projects;

	const ProjectStack = (
		<Stack spacing={2}>
			{projects.map((props, index) => (
				<Project {...props} key={index} />
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
