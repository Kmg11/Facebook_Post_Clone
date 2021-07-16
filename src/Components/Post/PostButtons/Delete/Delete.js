import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { APIContext } from "./../../../../App";
import { RiDeleteBin7Line } from "react-icons/ri";
import { PostContext } from "./../../Post";

import {
	Button,
	ButtonIcon,
	ButtonText,
	ButtonWrapper,
} from "../PostButtons.style";

export function DeleteBtn() {
	const history = useHistory();
	const API = useContext(APIContext);

	const {
		single,
		response: { id, getData, index },
		deleteData,
	} = useContext(PostContext);

	return (
		<ButtonWrapper>
			<Button
				title="Delete Post"
				onClick={() => {
					deleteData(`${API}/${id}`, () => {
						single ? history.push("/") : getData(true, index);
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
