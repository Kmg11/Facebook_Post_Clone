import { useContext } from "react";
import { PostContext } from "../Post";

import {
	Name,
	UserInfo,
	ImageContainer,
	Image,
	UserTextAvater,
	NameDate,
	Date,
} from "./PostUserInfo.style";

export function PostUserInfo() {
	const {
		response: {
			global_info,
			user_info: { user_name, user_image },
		},
	} = useContext(PostContext);

	return (
		<UserInfo>
			<UserImage userImage={user_image} userName={user_name} />
			<UserNameDate userName={user_name} globalInfo={global_info} />
		</UserInfo>
	);
}

function UserImage({ userImage, userName }) {
	const isAvaterObject = userImage instanceof Object;
	const { background_color, text_color } = userImage;

	const initialsName = userName
		.split(" ")
		.slice(0, 2)
		.map((name) => name[0])
		.join(" ");

	return (
		<ImageContainer backgroundColor={isAvaterObject && background_color}>
			{isAvaterObject && (
				<UserTextAvater textColor={isAvaterObject && text_color}>
					{initialsName}
				</UserTextAvater>
			)}

			{!isAvaterObject && (
				<Image src={userImage} alt="User Image" draggable="false" />
			)}
		</ImageContainer>
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
