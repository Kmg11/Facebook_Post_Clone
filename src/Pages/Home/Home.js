import { Fragment } from "react";

import { Navbar } from "./../../Components/Navbar/Navbar";
import { Posts } from "../../Components/Posts/Posts";

export function HomePage() {
	return (
		<Fragment>
			<Navbar />
			<Posts />
		</Fragment>
	);
}
