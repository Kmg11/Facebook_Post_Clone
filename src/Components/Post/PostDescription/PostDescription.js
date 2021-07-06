import { useContext } from "react";
import { PostContext } from "../Post";
import { Description } from "./PostDescription.style";

export function PostDescription() {
	const {
		single,
		response: {
			post_info: { description },
		},
	} = useContext(PostContext);

	return (
		<Description>
			{!single && description.length >= 200
				? description.slice(0, 200) + "..."
				: description}
		</Description>
	);
}
