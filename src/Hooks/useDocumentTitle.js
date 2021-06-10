import { useEffect } from "react";

export function useDocumentTitle(title) {
	const defaultTitle = "Blog";

	useEffect(() => {
		document.title = `${defaultTitle} ${title ? `| ${title}` : ``}`;
	}, [title]);
}
