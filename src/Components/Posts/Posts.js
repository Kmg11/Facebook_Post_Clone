import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { Post } from "./../Post/Post";
import styled from "styled-components";

import {
	LoadingMessage,
	ErrorMessage,
	EmptyMessage,
} from "./../../Styles/Components/Components";

export const PostsList = styled.div``;

export function Posts() {
	const {
		getData,
		data: posts,
		isPending,
		success,
		error,
	} = useFetchGet("http://localhost:8000/posts");

	const postsList =
		posts && posts.length > 0 ? (
			Array.from(posts)
				.reverse()
				.map(({ id, title, description, likes }) => {
					return (
						<Post
							key={id}
							id={id}
							title={title}
							description={description}
							likes={likes}
							getData={getData}
						></Post>
					);
				})
		) : (
			<EmptyMessage>No Posts Added</EmptyMessage>
		);

	return (
		<PostsList>
			<div className="container">
				{isPending && <LoadingMessage>Loading...</LoadingMessage>}

				{error && <ErrorMessage>{error} Please Try Again Later</ErrorMessage>}

				{success && postsList}
			</div>
		</PostsList>
	);
}
