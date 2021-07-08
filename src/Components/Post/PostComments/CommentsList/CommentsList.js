import { useContext } from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { PostContext } from "../../Post";
import { UserAvater } from "../../../UserAvater/UserAvater";

import {
	List,
	Comment,
	CommentText,
	DeleteCommentBtn,
	ShowMoreComments,
} from "./CommentsList.style";

export function CommentsList({ updateComments }) {
	const {
		single,
		response: {
			id,
			user_info,
			post_info: { title },
			comments,
		},
	} = useContext(PostContext);

	const deleteComment = (index) => {
		comments.splice(index, 1);
		updateComments(comments);
	};

	const finalComments = !single ? comments.slice(0, 1) : comments;

	const commentsList = finalComments.map(({ text }, index) => {
		return (
			<Comment key={index}>
				<UserAvater
					userInfo={user_info}
					dimensions={{ wh: "35px", font: ".9rem" }}
				/>

				<CommentText>{text}</CommentText>

				<DeleteCommentBtn onClick={() => deleteComment(index)}>
					<RiDeleteBin7Line />
				</DeleteCommentBtn>
			</Comment>
		);
	});

	return (
		<List>
			{comments && commentsList}

			{!single && comments.length > 1 && (
				<ShowMoreComments
					to={`posts/${id}/${title && title.replaceAll(" ", "-")}`}
				>
					Show More Comments {comments.length - 1} Not Appear
				</ShowMoreComments>
			)}
		</List>
	);
}
