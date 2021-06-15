import { Fragment } from "react";
import { useFetchDelete } from "../../Hooks/useFetch/useFetchDelete";

import {
	PostStyle,
	Title,
	Description,
	LikeWrapper,
	LikeButton,
	LikeCounter,
	GoToPost,
	DeleteBtn,
} from "./Style";

export function Post({ id, title, description, likes, getData }) {
	const { deleteData } = useFetchDelete();

	return (
		<Fragment>
			<PostStyle>
				{title && <Title>{title}</Title>}

				{description && <Description>{description}</Description>}

				<LikeWrapper>
					<LikeButton>Like</LikeButton>
					<LikeCounter>{likes ? likes : 0}</LikeCounter>
				</LikeWrapper>

				{id && <GoToPost to={`posts/${id}/${title}`}>Go To Post</GoToPost>}
				{id && (
					<DeleteBtn
						onClick={() =>
							deleteData(`http://localhost:8000/posts/${id}`, getData)
						}
					>
						Delete Post
					</DeleteBtn>
				)}
			</PostStyle>
		</Fragment>
	);
}
