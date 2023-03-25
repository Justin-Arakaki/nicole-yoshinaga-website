import {
	createContext,
	useContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
	SyntheticEvent,
} from 'react';

type CreateContext = Dispatch<SetStateAction<number>>;

const PageContext = createContext<number | null>(null);
const PageUpdateContext = createContext<CreateContext | null>(null);

export function usePage(): number {
	const context = useContext(PageContext);
	if (!context) throw new Error('PageContext is null');
	return context;
}

// Only any works here for some reason
export function usePageUpdate(): any {
	const context = useContext(PageUpdateContext);
	if (!context) throw new Error('PageContext is null');
	return context;
}

interface Children {
	children: ReactNode;
}

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
