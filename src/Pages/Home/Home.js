import { Fragment } from "react";
import { useDocumentTitle } from "../../Hooks/useDocumentTitle/useDocumentTitle";
import { Navbar } from "./../../Components/Navbar/Navbar";
import { Posts } from "../../Components/Posts/Posts";

export function HomePage() {
	useDocumentTitle();

	return (
		<Fragment>
			<Navbar />
			<Posts />
		</Fragment>
	);
}
