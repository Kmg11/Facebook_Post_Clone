import { useContext } from "react";
import { PostContext } from "../Post";
import { Title } from "./PostTitle.style";

export function PostTitle() {
	const {
		single,
		response: {
			post_info: { title },
		},
	} = useContext(PostContext);

	return (
		<Title as="h2">
			{!single && title.length >= 30 ? title.slice(0, 30) + "..." : title}
		</Title>
	);
}
