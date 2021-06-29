import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useFetchPatch } from "../../../Hooks/useFetch/useFetchPatch";
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin7Line } from "react-icons/ri";
import { PostContext } from "../Post";

import {
	Button,
	ButtonCounter,
	ButtonIcon,
	Buttons,
	ButtonText,
	ButtonWrapper,
} from "./PostButtons.style";

export function PostButtons() {
	const { single, response } = useContext(PostContext);
	const { id, title, likes, like_status, getData, deleteData } = response;

	const history = useHistory();
	const { updateData } = useFetchPatch();

	const [likeCounter, setLikeCounter] = useState(likes);
	const [likeStatue, setLikeStatue] = useState(like_status);

	const likePost = () => {
		setLikeStatue((prevValue) => !prevValue);

		if (likeStatue) {
			setLikeCounter((prevValue) => prevValue - 1);

			updateData(`http://localhost:8000/posts/${id}`, {
				likes: likeCounter - 1,
				like_status: false,
			});
		} else {
			setLikeCounter((prevValue) => prevValue + 1);

			updateData(`http://localhost:8000/posts/${id}`, {
				likes: likeCounter + 1,
				like_status: true,
			});
		}
	};

	return (
		<Buttons single={!single}>
			<ButtonWrapper>
				<Button counter liked={likeStatue ? true : false} onClick={likePost}>
					<ButtonIcon>
						<BiLike />
					</ButtonIcon>
					<ButtonText>Like</ButtonText>
					<ButtonCounter>
						{likeCounter
							? likeCounter >= 1000
								? !single
									? Math.round(likeCounter / 1000) + "K"
									: (likeCounter / 1000).toFixed(2) + "K"
								: likeCounter
							: 0}
					</ButtonCounter>
				</Button>
			</ButtonWrapper>

			<ButtonWrapper>
				<Button>
					<ButtonIcon>
						<GoCommentDiscussion />
					</ButtonIcon>
					<ButtonText>Comment</ButtonText>
				</Button>
			</ButtonWrapper>

			{!single && (
				<ButtonWrapper>
					<Button
						as={Link}
						to={`posts/${id}/${title && title.replaceAll(" ", "-")}`}
					>
						<ButtonIcon>
							<IoEyeOutline />
						</ButtonIcon>
						<ButtonText>More</ButtonText>
					</Button>
				</ButtonWrapper>
			)}

			<ButtonWrapper>
				<Button
					onClick={() => {
						deleteData(
							`http://localhost:8000/posts/${id}`,
							single ? () => history.push("/") : getData
						);
					}}
				>
					<ButtonIcon>
						<RiDeleteBin7Line />
					</ButtonIcon>
					<ButtonText>Delete</ButtonText>
				</Button>
			</ButtonWrapper>
		</Buttons>
	);
}
