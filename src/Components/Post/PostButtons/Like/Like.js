import { useContext, useState } from "react";
import { APIContext } from "../../../../App";
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
	const API = useContext(APIContext);
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
	const [likeStatus, setLikeStatus] = useState(like_status);

	const likePost = () => {
		updateData(
			`${API}/${id}`,
			{
				buttons_info: {
					like: {
						likes: like_status ? likeCounter - 1 : likeCounter + 1,
						like_status: !like_status,
					},
				},
			},
			() => {
				setLikeStatus((prevValue) => !prevValue);
				setLikeCounter((prevValue) =>
					likeStatus ? prevValue - 1 : prevValue + 1
				);
			}
		);
	};

	return (
		<ButtonWrapper>
			<Button
				counter={likeCounter ? true : false}
				liked={likeStatus ? true : false}
				onClick={likePost}
				title="Like Post"
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
