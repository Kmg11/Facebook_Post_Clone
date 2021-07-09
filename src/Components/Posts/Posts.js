import { useContext } from "react";
import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { PostsList } from "./Posts.style";
import { Post } from "./../Post/Post";
import { APIContext } from "../../App.js";

import {
	LoadingWrapper,
	Loading,
	ErrorMessage,
	EmptyMessage,
} from "./../../Styles/Components/Components.style";

export function Posts() {
	const {
		getData,
		data: posts,
		isPending,
		success,
		error,
	} = useFetchGet(useContext(APIContext));

	const postsList =
		posts && posts.length > 0 ? (
			Array.from(posts)
				.reverse()
				.map(
					({
						id,
						global_info,
						user_info,
						post_info,
						buttons_info,
						comments,
					}) => {
						return (
							<Post
								key={id}
								single={false}
								response={{
									id,
									global_info,
									user_info,
									post_info,
									buttons_info,
									comments,
									getData,
								}}
							></Post>
						);
					}
				)
		) : (
			<EmptyMessage>No Posts Added</EmptyMessage>
		);

	return (
		<PostsList>
			<div className="container">
				{isPending && (
					<LoadingWrapper>
						<Loading />
					</LoadingWrapper>
				)}

				{error && <ErrorMessage>{error} Please Try Again Later</ErrorMessage>}

				{success && postsList}
			</div>
		</PostsList>
	);
}
