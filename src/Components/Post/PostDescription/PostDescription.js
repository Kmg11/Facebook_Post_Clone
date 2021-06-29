import { useContext } from "react";
import { PostContext } from "../Post";
import { Description } from "./PostDescription.style";

export function PostDescription() {
	const { single, response } = useContext(PostContext);
	const { description } = response;

	return (
		<Description>
			{!single && description.length >= 150
				? description.slice(0, 150) + "..."
				: description}
		</Description>
	);
}
