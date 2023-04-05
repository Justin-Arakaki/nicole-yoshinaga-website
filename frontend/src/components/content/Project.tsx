import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
	src: string;
	title: string;
	company: string;
	role: string;
}

export default function Project({ src, title, company, role }: Props) {
	return (
		<Box display="flex" width="100%" gap="1rem" alignItems="center">
			<Box flexBasis="25%" height="3rem">
				<img
					src={src}
					width="100%"
					height="100%"
					style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
				/>
			</Box>
			<Box flexBasis="75%">
				<Typography
					variant="body1"
					display="inline"
					fontWeight={400}
					sx={{ textDecoration: 'underline' }}
				>
					{title}
				</Typography>
				<Typography variant="body1" display="inline">
					{' '}
					- {company}
				</Typography>
				<Typography variant="body1">{role}</Typography>
			</Box>
		</Box>
	);
}
