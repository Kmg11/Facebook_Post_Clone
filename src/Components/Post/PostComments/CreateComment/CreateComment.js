import { useContext, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { UserAvater } from "../../../UserAvater/UserAvater";
import { PostContext } from "../../Post";

import {
	Button,
	Form,
	Input,
} from "./CreateComment.style";

export function CreateComment({ updateComments }) {
	const {
		response: { user_info, comments },
	} = useContext(PostContext);
	const [comment, setComment] = useState("");

	const addComment = (e) => {
		e.preventDefault();
		comments.push({ text: comment });
		if (comment !== "") updateComments(comments, () => setComment(""));
	};

	return (
		<Form onSubmit={addComment}>
			<UserAvater
				userInfo={user_info}
				dimensions={{ wh: "35px", font: ".9rem" }}
			/>

			<Input
				type="text"
				value={comment}
				requierd
				autoComplete="off"
				placeholder="Comment"
				onChange={(e) => setComment(e.target.value)}
			/>

			<Button type="submit">
				<IoSendSharp />
			</Button>
		</Form>
	);
}
