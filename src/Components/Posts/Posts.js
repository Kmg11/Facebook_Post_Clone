import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { PostsList } from "./Posts.style";
import { Post } from "./../Post/Post";

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
	} = useFetchGet("http://localhost:8000/posts");

	const postsList =
		posts && posts.length > 0 ? (
			Array.from(posts)
				.reverse()
				.map(
					({
						id,
						user_info,
						title,
						description,
						likes,
						like_status,
						images,
					}) => {
						return (
							<Post
								key={id}
								single={false}
								response={{
									id,
									user_info,
									title,
									description,
									likes,
									like_status,
									images,
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
