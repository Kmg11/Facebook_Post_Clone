import { Fragment } from "react";
import { Navbar } from "./../../Components/Navbar/Navbar";
import { SinglePost } from "./../../Components/SinglePost/SinglePost";

export function PostPage() {
	/*
		useDocumentTitle Hook Not Here Because I Need To Set Document Title Using Post Title
		So The Hook Used In SinglePost Component
	*/

	return (
		<Fragment>
			<Navbar />
			<SinglePost />
		</Fragment>
	);
}
