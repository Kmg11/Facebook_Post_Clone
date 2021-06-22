import { Fragment, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFetchDelete } from "../../Hooks/useFetch/useFetchDelete";
import { useFetchPatch } from "../../Hooks/useFetch/useFetchPatch";
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { RiDeleteBin7Line } from "react-icons/ri";

import {
	PostStyle,
	Title,
	Description,
	Buttons,
	ButtonWrapper,
	Button,
	ButtonIcon,
	ButtonText,
	ButtonCounter,
	Loading,
} from "./Style";

export function Post({ single, response }) {
	const { id, title, description, likes, like_status, getData } = response;
	const history = useHistory();
	const { deleteData, isPending } = useFetchDelete();
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
		<Fragment>
			<PostStyle>
				{isPending && <Loading />}

				{title && (
					<Title as="h2">
						{!single && title.length >= 30 ? title.slice(0, 30) + "..." : title}
					</Title>
				)}

				{description && (
					<Description>
						{!single && description.length >= 150
							? description.slice(0, 150) + "..."
							: description}
					</Description>
				)}

				<Buttons single={!single}>
					<ButtonWrapper>
						<Button
							counter
							liked={likeStatue ? true : false}
							onClick={likePost}
						>
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
			</PostStyle>
		</Fragment>
	);
}
