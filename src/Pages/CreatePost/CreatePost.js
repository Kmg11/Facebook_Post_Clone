import { Fragment } from "react";
import { useDocumentTitle } from "./../../Hooks/useDocumentTitle/useDocumentTitle";
import { Navbar } from "./../../Components/Navbar/Navbar";
import { Form } from "../../Components/Form/Form";

export function CreatePostPage() {
	useDocumentTitle("Create Post");

	return (
		<Fragment>
			<Navbar />
			<Form />
		</Fragment>
	);
}
