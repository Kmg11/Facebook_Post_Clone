import { useContext } from "react";
import { PostContext } from "../Post";
import { LikeBtn } from "./Like/Like";
import { CommentBtn } from "./Comment/Comment";
import { MoreBtn } from "./More/More";
import { DeleteBtn } from "./Delete/Delete";
import { Buttons } from "./PostButtons.style";

export function PostButtons({ setShowComments }) {
	const { single } = useContext(PostContext);

	return (
		<Buttons single={!single}>
			<LikeBtn />

			<CommentBtn setShowComments={setShowComments} />

			{!single && <MoreBtn />}

			<DeleteBtn />
		</Buttons>
	);
}
