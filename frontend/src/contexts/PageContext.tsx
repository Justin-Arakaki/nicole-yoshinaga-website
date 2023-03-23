import { createContext, useContext, useState } from 'react';

const Context = createContext<number>(0);
const UpdateContext = createContext<Function>();

export function usePage() {
	return useContext(Context);
}

export function usePageUpdate() {
	return useContext(UpdateContext);
}

export function PageProvider({ children: React. }) {
	const [page, setPage] = useState(0);

	return (
		<Context.Provider value={page}>
			<UpdateContext.Provider value={setPage}>
				{children}
			</UpdateContext.Provider>
		</Context.Provider>
	);
}
