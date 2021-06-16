import { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useFetchDelete } from "../../Hooks/useFetch/useFetchDelete";
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
} from "./Style";

export function Post({ single, response }) {
	const history = useHistory();
	const { id, title, description, likes, getData, success } = response;
	const { deleteData } = useFetchDelete();
	const [animatePost, setAnimatePost] = useState(false);

	useEffect(() => {
		let time;

		success && (time = setTimeout(() => setAnimatePost(true)));

		return () => clearTimeout(time);
	}, [success]);

	return (
		<Fragment>
			<PostStyle show={animatePost ? true : false}>
				{title && <Title as="h2">{title}</Title>}

				{description && <Description>{description}</Description>}

				<Buttons single={!single}>
					<ButtonWrapper>
						<Button counter>
							<ButtonIcon>
								<BiLike />
							</ButtonIcon>
							<ButtonText>Like</ButtonText>
							<ButtonCounter>{likes ? likes : 0}</ButtonCounter>
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
							<Button as={Link} to={`posts/${id}/${title}`}>
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
