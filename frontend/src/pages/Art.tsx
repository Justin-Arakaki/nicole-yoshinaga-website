import ArtSection from '../components/content/ArtSection';
import BodyContainer from '../components/ui/BodyContainer';
import Stack from '@mui/material/Stack';
export default function Art() {
	const art = [
		{
			key: 0,
			title: 'digital',
			pieces: [
				{
					src: 'https://drive.google.com/uc?id=1YIDTlYSX0k0NlAT8lWyZFEktZMW-50cQ',
					href: 'https://drive.google.com/file/d/1YIDTlYSX0k0NlAT8lWyZFEktZMW-50cQ/view?usp=share_link',
				},
				{
					src: 'https://drive.google.com/uc?id=1vO7NNvea40BrHXJEYOXWZ_dDw6o-KSPC',
					href: 'https://drive.google.com/file/d/1vO7NNvea40BrHXJEYOXWZ_dDw6o-KSPC/view?usp=share_link',
				},
				{
					src: 'https://drive.google.com/uc?id=1vDYDygf4s9th4krd99wGQJFBAJxo8W3R',
					href: 'https://drive.google.com/file/d/1vDYDygf4s9th4krd99wGQJFBAJxo8W3R/view?usp=share_link',
				},
			],
		},
		{
			key: 1,
			title: 'traditional',
			pieces: [
				{
					src: 'https://drive.google.com/uc?id=1YIDTlYSX0k0NlAT8lWyZFEktZMW-50cQ',
					href: 'https://drive.google.com/file/d/1YIDTlYSX0k0NlAT8lWyZFEktZMW-50cQ/view?usp=share_link',
				},
				{
					src: 'https://drive.google.com/uc?id=1vO7NNvea40BrHXJEYOXWZ_dDw6o-KSPC',
					href: 'https://drive.google.com/file/d/1vO7NNvea40BrHXJEYOXWZ_dDw6o-KSPC/view?usp=share_link',
				},
				{
					src: 'https://drive.google.com/uc?id=1vDYDygf4s9th4krd99wGQJFBAJxo8W3R',
					href: 'https://drive.google.com/file/d/1vDYDygf4s9th4krd99wGQJFBAJxo8W3R/view?usp=share_link',
				},
			],
		},
		{
			key: 2,
			title: 'sketchbook',
			pieces: [
				{
					src: 'https://drive.google.com/uc?id=1YIDTlYSX0k0NlAT8lWyZFEktZMW-50cQ',
					href: 'https://drive.google.com/file/d/1YIDTlYSX0k0NlAT8lWyZFEktZMW-50cQ/view?usp=share_link',
				},
				{
					src: 'https://drive.google.com/uc?id=1vO7NNvea40BrHXJEYOXWZ_dDw6o-KSPC',
					href: 'https://drive.google.com/file/d/1vO7NNvea40BrHXJEYOXWZ_dDw6o-KSPC/view?usp=share_link',
				},
				{
					src: 'https://drive.google.com/uc?id=1vDYDygf4s9th4krd99wGQJFBAJxo8W3R',
					href: 'https://drive.google.com/file/d/1vDYDygf4s9th4krd99wGQJFBAJxo8W3R/view?usp=share_link',
				},
			],
		},
	];

	const ArtStack = (
		<Stack spacing={6} width="100%">
			{art.map(props => (
				<ArtSection {...props} />
			))}
		</Stack>
	);

	return <BodyContainer>{ArtStack}</BodyContainer>;
}
