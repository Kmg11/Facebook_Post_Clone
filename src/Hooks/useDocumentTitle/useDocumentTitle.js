import { useEffect } from "react";

export function useDocumentTitle(title) {
	const defaultTitle = "Facebook Post";

	useEffect(() => {
		document.title = `${defaultTitle} ${title ? `| ${title}` : ``}`;
	}, [title]);
}
