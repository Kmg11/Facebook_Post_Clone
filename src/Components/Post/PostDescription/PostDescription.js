import { useContext } from "react";
import { PostContext } from "../Post";
import { Description } from "./PostDescription.style";

export function PostDescription() {
	const { single, response } = useContext(PostContext);
	const { description } = response;

	return (
		<Description>
			{!single && description.length >= 200
				? description.slice(0, 200) + "..."
				: description}
		</Description>
	);
}
