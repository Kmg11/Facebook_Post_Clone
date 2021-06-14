import {
	PostStyle,
	Title,
	Description,
	LikeWrapper,
	LikeButton,
	LikeCounter,
	GoToPost,
} from "./Style";

export function Post({ id, title, description, likes }) {
	return (
		<div>
			<PostStyle>
				{title && <Title>{title}</Title>}

				{description && <Description>{description}</Description>}

				<LikeWrapper>
					<LikeButton>Like</LikeButton>
					<LikeCounter>{likes ? likes : 0}</LikeCounter>
				</LikeWrapper>

				{id && <GoToPost to={`posts/${id}/${title}`}>Go To Post</GoToPost>}
			</PostStyle>
		</div>
	);
}
