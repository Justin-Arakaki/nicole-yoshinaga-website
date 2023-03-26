import { useContext, ReactNode, Context, SyntheticEvent } from 'react';

export type HandleContext = (
	event: SyntheticEvent<Element, Event>,
	newValue: number
) => void;

export interface Children {
	children: ReactNode;
}

export function createUseContext<T>(
	MyContext: Context<T>,
	defaultVal: NonNullable<T>
) {
	return (): NonNullable<T> => {
		const context = useContext(MyContext);
		if (!context) return defaultVal;
		return context;
	};
}

export function createUseContextUpdate<T>(MyContextUpdate: Context<T>) {
	const name = Object.keys(MyContextUpdate)[3];
	return (): any => {
		const context = useContext(MyContextUpdate);
		if (!context) throw new Error(`${name} is null`);
		return context;
	};
}
