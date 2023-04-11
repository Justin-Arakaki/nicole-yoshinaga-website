import changeRem from '../changeRem';

test('takes a rem string and function and outputs rem string', () => {
	const remStr = '5.5rem';
	const editFunc = (rem: number) => rem * 2;
	const editedRemStr = changeRem(remStr, editFunc);

	expect(editedRemStr).toBe('11rem');
});
