import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { useContext } from "react";
import { PostContext } from "./../../Post";

import {
	Button,
	ButtonIcon,
	ButtonText,
	ButtonWrapper,
} from "../PostButtons.style";

export function MoreBtn() {
	const {
		response: {
			id,
			post_info: { title },
		},
	} = useContext(PostContext);

	return (
		<ButtonWrapper>
			<Button
				as={Link}
				to={`posts/${id}/${title && title.replaceAll(" ", "-")}`}
				title="Continue Reading"
			>
				<ButtonIcon>
					<IoEyeOutline />
				</ButtonIcon>

				<ButtonText>Continue</ButtonText>
			</Button>
		</ButtonWrapper>
	);
}
