import { useDocumentTitle } from "../../Hooks/useDocumentTitle/useDocumentTitle";
import { NotFound } from "../../Components/NotFound/NotFound";

export function NotFoundPage() {
	useDocumentTitle("Page Not Found");

	return <NotFound></NotFound>;
}
