import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BodyContainer from '../components/ui/BodyContainer';
import profile from '../assets/temp-profile-pic.png';
import { useTheme } from '@mui/material/styles';

export default function AboutMe() {
	const theme = useTheme();

	return (
		<BodyContainer>
			<Typography variant="h2" sx={{ alignSelf: 'flex-start' }}>
				Hello! My name is Nicole Yoshinaga.
			</Typography>
			<Box
				display="flex"
				flexWrap="wrap"
				width="100%"
				sx={{
					[theme.breakpoints.down('sm')]: {
						justifyContent: 'center',
					},
				}}
			>
				<Box
					width={160}
					sx={{
						[theme.breakpoints.down('sm')]: {
							marginTop: '1rem',
						},
					}}
				>
					<img src={profile} alt="It's me!" width="100%" />
				</Box>
				<Box flexGrow={1} flexBasis={300}>
					<Typography variant="body2" mt="1rem">
						My dream has always been to create fantastic films and bring stories
						to life through the art of animation. In developing these projects,
						I look forward to meeting other creative individuals and
						collaborating with people who share my passion for art and
						animation. I primarily work in Maya.
					</Typography>
					<Typography variant="body2" mt="1rem">
						Currently I am a student at AnimSchool in the 3DAnimation program to
						continue my education after graduating from Chapman University with
						a B.F.A. in Animation & VFX. I also serve as a Media Director for my
						church's weekly livestream services part time. In my freetime, I
						love going to Disneyland, traveling to Japan, spending time with
						friends, and brushing up on my drawing.
					</Typography>
				</Box>
			</Box>
		</BodyContainer>
	);
}
