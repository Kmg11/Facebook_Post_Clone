import { useDocumentTitle } from "../../Hooks/useDocumentTitle";
import { useFetchGet } from "../../Hooks/useFetchGet";

import {
	PostsList,
	Post,
	Title,
	Description,
	LikeWrapper,
	LikeButton,
	LikeCounter,
	Loading,
	Error,
	Empty,
} from "./Style";

export function Posts() {
	useDocumentTitle();

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
				.map(({ id, title, description, likes }, index) => {
					return (
						<Post key={id}>
							{title && <Title>{title}</Title>}

							{description && <Description>{description}</Description>}

							<LikeWrapper>
								<LikeButton>Like</LikeButton>
								<LikeCounter>{likes ? likes : 0}</LikeCounter>
							</LikeWrapper>
						</Post>
					);
				})
		) : (
			<Empty>No Posts Added</Empty>
		);

	return (
		<PostsList>
			<div className="container">
				{isPending && <Loading>Loading...</Loading>}

				{success && postsList}

				{error && <Error error>{error} Please Try Again Later</Error>}
			</div>
		</PostsList>
	);
}
