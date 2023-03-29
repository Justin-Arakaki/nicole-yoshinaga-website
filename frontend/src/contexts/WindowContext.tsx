import { createContext, useEffect, useState, useRef } from 'react';
import { createUseContext, Children } from '../utils/contextConstructor';
import debounce from 'lodash/debounce';

const WindowContext = createContext<number | null>(null);

export const useWindow = createUseContext(WindowContext, 0);

export function WindowProvider({ children }: Children) {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		window.addEventListener('resize', debounce(handleResizeWindow, 300));
		return () => {
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);

	function getWindowSize() {}

	return (
		<WindowContext.Provider value={width}>{children}</WindowContext.Provider>
	);
}
