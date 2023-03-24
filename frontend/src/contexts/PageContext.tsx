import { createContext, useContext, useState, ReactNode } from 'react';

const [page, setPage] = useState(0);
const Context = createContext(page);
const UpdateContext = createContext(setPage);

export function usePage() {
	return useContext(Context);
}

export function usePageUpdate() {
	return useContext(UpdateContext);
}

export function PageProvider(children: ReactNode) {
	return (
		<Context.Provider value={page}>
			<UpdateContext.Provider value={setPage}>
				{children}
			</UpdateContext.Provider>
		</Context.Provider>
	);
}
