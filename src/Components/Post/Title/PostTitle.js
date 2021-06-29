import { useContext } from "react";
import { PostContext } from "./../Post";
import { Title } from "./PostTitle.style";

export function PostTitle() {
	const { single, response } = useContext(PostContext);
	const { title } = response;

	return (
		<Title as="h2">
			{!single && title.length >= 30 ? title.slice(0, 30) + "..." : title}
		</Title>
	);
}
