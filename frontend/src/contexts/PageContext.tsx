import {
	createContext,
	useContext,
	useState,
	ReactNode,
	Dispatch,
	SetStateAction,
	SyntheticEvent,
} from 'react';

type CreateContext = (
	event: SyntheticEvent<Element, Event>,
	newValue: number
) => void;

const PageContext = createContext<number | null>(null);
const PageUpdateContext = createContext<CreateContext | null>(null);

export function usePage(): number {
	const context = useContext(PageContext);
	const defaultVal = 0;
	if (!context) return defaultVal;
	return context;
}

// Only any works here for some reason
export function usePageUpdate(): any {
	const context = useContext(PageUpdateContext);
	if (!context) throw new Error('PageUpdateContext is null');
	return context;
}

interface Children {
	children: ReactNode;
}

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
