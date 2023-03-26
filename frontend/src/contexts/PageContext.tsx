import { createContext, useState } from 'react';
import {
	createUseContext,
	createUseContextUpdate,
	HandleContext,
	Children,
} from '../utils/contextConstructor';

const PageContext = createContext<number | null>(null);
const PageUpdateContext = createContext<HandleContext | null>(null);

export const usePage = createUseContext(PageContext, 0);
export const usePageUpdate = createUseContextUpdate(PageUpdateContext);

export function PageProvider({ children }: Children) {
	const [page, setPage] = useState(0);

	function handleChange(event: React.SyntheticEvent, newValue: number) {
		setPage(newValue);
	}

	return (
		<PageContext.Provider value={page}>
			<PageUpdateContext.Provider value={handleChange}>
				{children}
			</PageUpdateContext.Provider>
		</PageContext.Provider>
	);
}
