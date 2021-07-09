import { useContext } from "react";
import { useFetchPatch } from "../../../Hooks/useFetch/useFetchPatch";
import { CreateComment } from "./CreateComment/CreateComment";
import { CommentsList } from "./CommentsList/CommentsList";
import { PostContext } from "../Post";
import { APIContext } from "../../../App";
import { Comments } from "./PostComments.style";

export function PostComments() {
	const API = useContext(APIContext);
	const { updateData } = useFetchPatch();

	const {
		response: { id },
		commentsState,
	} = useContext(PostContext);

	const updateComments = (newComments, successCallback) => {
		updateData(`${API}/${id}`, { comments: newComments }, successCallback);
		commentsState.setCommentsLength(newComments.length);
	};

	return (
		<Comments>
			<CreateComment updateComments={updateComments} />
			<CommentsList updateComments={updateComments} />
		</Comments>
	);
}
