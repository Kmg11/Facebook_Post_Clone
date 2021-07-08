import { useContext } from "react";
import { GoCommentDiscussion } from "react-icons/go";
import { PostContext } from "./../../Post";

import {
	Button,
	ButtonCounter,
	ButtonIcon,
	ButtonText,
	ButtonWrapper,
} from "../PostButtons.style";

export function CommentBtn({ setShowComments }) {
	const {
		single,
		response: { comments },
	} = useContext(PostContext);

	const commentsLength = comments.length;

	return (
		<ButtonWrapper>
			<Button
				counter={commentsLength ? true : false}
				onClick={() => !single && setShowComments((prev) => !prev)}
			>
				<ButtonIcon>
					<GoCommentDiscussion />
				</ButtonIcon>

				<ButtonText>Comment</ButtonText>

				{commentsLength && (
					<ButtonCounter>
						{commentsLength >= 1000
							? !single
								? Math.round(commentsLength / 1000) + "K"
								: (commentsLength / 1000).toFixed(2) + "K"
							: commentsLength}
					</ButtonCounter>
				)}
			</Button>
		</ButtonWrapper>
	);
}
