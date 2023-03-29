export default function changeRem(
	rem: string,
	edit: (inputSize: number) => number
) {
	const noRem = Number(rem.replace('rem', ''));
	const editedVal = edit(noRem);
	return editedVal + 'rem';
}
