import { useContext } from "react";
import { UserAvater } from "../../UserAvater/UserAvater";
import { PostContext } from "../Post";

import {
	Name,
	UserInfo,
	NameDate,
	Date,
} from "./PostUserInfo.style";

export function PostUserInfo() {
	const {
		response: { global_info, user_info },
	} = useContext(PostContext);
	const { user_name } = user_info;

	return (
		<UserInfo>
			<UserAvater
				userInfo={user_info}
				dimensions={{ wh: "50px", font: "1.1rem" }}
			/>
			<UserNameDate userName={user_name} globalInfo={global_info} />
		</UserInfo>
	);
}

function UserNameDate({ userName, globalInfo }) {
	return (
		<NameDate>
			<Name>{userName}</Name>
			<Date>{globalInfo.post_date}</Date>
		</NameDate>
	);
}
