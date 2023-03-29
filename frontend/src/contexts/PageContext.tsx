import { createContext, useState } from 'react';
import {
	createUseContext,
	createUseContextUpdate,
	SetValue,
	Children,
} from '../utils/contextConstructor';

const PageContext = createContext<number | null>(null);
const PageUpdateContext = createContext<SetValue<number> | null>(null);

export const usePage = createUseContext(PageContext, 0);
export const usePageUpdate = createUseContextUpdate(PageUpdateContext);

export function PageProvider({ children }: Children) {
	const [page, setPage] = useState(0);

	return (
		<PageContext.Provider value={page}>
			<PageUpdateContext.Provider value={setPage}>
				{children}
			</PageUpdateContext.Provider>
		</PageContext.Provider>
	);
}
