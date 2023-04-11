import content from '../../content';
import profile from '../../assets/temp-profile-pic.png';
import { SxProps, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
	sx?: SxProps;
}

export default function Hello({ sx }: Props) {
	const theme = useTheme();
	const hello = content.hello;
	const ParagraphStack = hello.map((props, index) => (
		<Typography variant="body2" key={index} mt="1rem">
			{props}
		</Typography>
	));

	return (
		<Box width="100%" sx={sx}>
			<Typography variant="h2">Hello! My name is Nicole Yoshinaga.</Typography>
			<Box
				display="flex"
				flexWrap="wrap"
				width="100%"
				gap="1rem"
				sx={{
					[theme.breakpoints.down('sm')]: {
						justifyContent: 'center',
					},
				}}
			>
				<Box
					width="25%"
					sx={{
						[theme.breakpoints.down('sm')]: {
							marginTop: '1rem',
						},
					}}
				>
					<img src={profile} alt="It's me!" width="100%" />
				</Box>
				<Box flexGrow={1} flexBasis={300}>
					{ParagraphStack}
				</Box>
			</Box>
		</Box>
	);
}
