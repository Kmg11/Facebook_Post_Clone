import { useFetchGet } from "../../Hooks/useFetch/useFetchGet";
import { Post } from "./../Post/Post";
import { PostsList, Loading, Error, Empty } from "./Style";

export function Posts() {
	const {
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
						></Post>
					);
				})
		) : (
			<Empty>No Posts Added</Empty>
		);

	return (
		<PostsList>
			<div className="container">
				{isPending && <Loading>Loading...</Loading>}

				{error && <Error error>{error} Please Try Again Later</Error>}

				{success && postsList}
			</div>
		</PostsList>
	);
}
