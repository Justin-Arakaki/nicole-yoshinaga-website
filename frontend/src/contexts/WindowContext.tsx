import { createContext, useEffect, useState } from 'react';
import { createUseContext, Children } from '../utils/contextConstructor';

const WindowContext = createContext<number | null>(null);

export const useWindow = createUseContext(WindowContext, 0);

export function WindowProvider({ children }: Children) {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	return (
		<WindowContext.Provider value={width}>{children}</WindowContext.Provider>
	);
}
