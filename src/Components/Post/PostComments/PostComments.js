import { useContext } from "react";
import { useFetchPatch } from "../../../Hooks/useFetch/useFetchPatch";
import { CreateComment } from "./CreateComment/CreateComment";
import { CommentsList } from "./CommentsList/CommentsList";
import { PostContext } from "../Post";
import { Comments } from "./PostComments.style";

export function PostComments() {
	const { updateData } = useFetchPatch();

	const {
		response: { id },
	} = useContext(PostContext);

	const updateComments = (newComments, successCallback) => {
		updateData(
			`http://localhost:8000/posts/${id}`,
			{ comments: newComments },
			successCallback
		);
	};

	return (
		<Comments>
			<CreateComment updateComments={updateComments} />
			<CommentsList updateComments={updateComments} />
		</Comments>
	);
}
