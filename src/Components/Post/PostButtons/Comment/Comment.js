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
	const { single, commentsState } = useContext(PostContext);
	const commentsLength = commentsState.commentsLength;

	return (
		<ButtonWrapper>
			<Button
				counter={commentsLength ? true : false}
				onClick={() => !single && setShowComments((prev) => !prev)}
				title="Comment On Post"
			>
				<ButtonIcon>
					<GoCommentDiscussion />
				</ButtonIcon>

				<ButtonText>Comment</ButtonText>

				{commentsLength !== 0 && (
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
