import { SxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Piece, { PieceProps } from './Piece';

interface Props {
	title: string;
	pieces: PieceProps[];
	sx?: SxProps;
}

export default function ArtSection({ title, pieces, sx }: Props) {
	const PiecesFlex = (
		<Box display="flex" flexWrap="wrap" gap="1rem">
			{pieces.map((props, index) => (
				<Piece {...props} key={index} />
			))}
		</Box>
	);

	return (
		<Box width="100%" sx={sx}>
			<Typography variant="h3" mb="1rem">
				{title}
			</Typography>
			{PiecesFlex}
		</Box>
	);
}
