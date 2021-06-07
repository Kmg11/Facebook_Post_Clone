import { useFetch } from "../../Hooks/useFetch";
import {
	PostsStyle,
	Post,
	Title,
	Description,
	LikeWrapper,
	LikeButton,
	LikeCounter,
	Loading,
} from "./Style";

export function Posts() {
	const {
		data: posts,
		isPending,
		success,
		error,
	} = useFetch("./../../Apis/posts.json");

	const postsList = [...posts]
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
		});

	return (
		<PostsStyle>
			<div className="container">
				{isPending && <Loading>Loading...</Loading>}

				{success && postsList}

				{error && <div>{error.message}</div>}
			</div>
		</PostsStyle>
	);
}
