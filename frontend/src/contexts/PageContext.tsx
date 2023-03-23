import { createContext } from 'react';

type PageContextInterface = {
	page?: number;
	setPage(value: number): void;
};
const PageContext = createContext<PageContextInterface>({});

export const PageProvider = PageContext.Provider;

export default PageContext;
