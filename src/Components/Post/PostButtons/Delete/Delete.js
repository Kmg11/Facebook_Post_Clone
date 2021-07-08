import { useContext } from "react";
import { PostContext } from "./../../Post";

import {
	Button,
	ButtonIcon,
	ButtonText,
	ButtonWrapper,
} from "../PostButtons.style";
import { useHistory } from "react-router-dom";
import { RiDeleteBin7Line } from "react-icons/ri";

export function DeleteBtn() {
	const history = useHistory();

	const {
		single,
		response: { id, getData },
		deleteData,
	} = useContext(PostContext);

	return (
		<ButtonWrapper>
			<Button
				onClick={() => {
					deleteData(`http://localhost:8000/posts/${id}`, () => {
						single ? history.push("/") : getData();
					});
				}}
			>
				<ButtonIcon>
					<RiDeleteBin7Line />
				</ButtonIcon>

				<ButtonText>Delete</ButtonText>
			</Button>
		</ButtonWrapper>
	);
}
