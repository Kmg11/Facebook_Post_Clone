import { useContext, useState } from "react";
import { useFetchPatch } from "../../../../Hooks/useFetch/useFetchPatch";
import { BiLike } from "react-icons/bi";
import { PostContext } from "./../../Post";

import {
	Button,
	ButtonCounter,
	ButtonIcon,
	ButtonText,
	ButtonWrapper,
} from "../PostButtons.style";

export function LikeBtn() {
	const { updateData } = useFetchPatch();

	const {
		single,
		response: {
			id,
			buttons_info: {
				like: { likes, like_status },
			},
		},
	} = useContext(PostContext);

	const [likeCounter, setLikeCounter] = useState(likes);
	const [likeStatue, setLikeStatue] = useState(like_status);

	const likePost = () => {
		setLikeStatue((prevValue) => !prevValue);

		if (likeStatue) {
			updateData(
				`http://localhost:8000/posts/${id}`,
				{
					buttons_info: {
						like: { likes: likeCounter - 1, like_status: false },
					},
				},
				() => setLikeCounter((prevValue) => prevValue - 1)
			);
		} else {
			updateData(
				`http://localhost:8000/posts/${id}`,
				{
					buttons_info: {
						like: { likes: likeCounter + 1, like_status: true },
					},
				},
				() => setLikeCounter((prevValue) => prevValue + 1)
			);
		}
	};

	return (
		<ButtonWrapper>
			<Button
				counter={likeCounter ? true : false}
				liked={likeStatue ? true : false}
				onClick={likePost}
			>
				<ButtonIcon>
					<BiLike />
				</ButtonIcon>

				<ButtonText>Like</ButtonText>

				{likeCounter !== 0 && (
					<ButtonCounter>
						{likeCounter >= 1000
							? !single
								? Math.round(likeCounter / 1000) + "K"
								: (likeCounter / 1000).toFixed(2) + "K"
							: likeCounter}
					</ButtonCounter>
				)}
			</Button>
		</ButtonWrapper>
	);
}
