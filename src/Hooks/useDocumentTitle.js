import { useEffect } from "react";

export const useDocumentTitle = (title) => {
	const defaultTitle = "Blog";

	useEffect(() => {
		document.title = `${defaultTitle} ${title ? `| ${title}` : ``}`;
	}, [title]);
};
