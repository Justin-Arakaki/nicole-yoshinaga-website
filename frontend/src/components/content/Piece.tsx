import { useTheme } from '@mui/material/styles';
import { useWindow } from '../../contexts/WindowContext';

export interface PieceProps {
	src: string;
	href: string;
}

export default function Piece({ src, href }: PieceProps) {
	const theme = useTheme();
	const windowWidth = useWindow();
	const columns = 3;
	const gap = '2rem';
	const gapPerColumn = `${gap} * (${columns} - 1) / ${columns})`;
	const isAboveBreakpoint = windowWidth > theme.breakpoints.values.sm;
	const flexBasis = isAboveBreakpoint
		? `calc(100% / ${columns} - ${gapPerColumn}`
		: '100%';
	const height = isAboveBreakpoint ? 300 : 200;

	return (
		<a href={href} target="_blank" style={{ flexBasis, height }}>
			<img
				width="100%"
				height="100%"
				src={src}
				style={{ objectFit: 'cover', borderRadius: '1rem' }}
			/>
		</a>
	);
}
