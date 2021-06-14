import { Fragment } from "react";

import { Navbar } from "./../../Components/Navbar/Navbar";
import { SinglePost } from "./../../Components/SinglePost/SinglePost";

export function PostPage() {
	return (
		<Fragment>
			<Navbar />
			<SinglePost />
		</Fragment>
	);
}
